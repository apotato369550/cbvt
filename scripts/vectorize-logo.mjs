import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";
import potrace from "potrace";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const sourcePath = path.join(root, "public", "new_logo.png");
const outPath = path.join(root, "public", "logo.svg");

// Brand hex tokens (STYLE_GUIDE.md), the source PNG's colors are close but not exact.
const INK_900 = "#0F2851";
const COPPER_600 = "#A85A1A";

// Sampled from the source PNG.
const NAVY_SAMPLE = [28, 50, 87];
const COPPER_SAMPLE = [235, 135, 67];
const BG_SAMPLE = [242, 242, 233];

function distSq(a, b) {
  return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2;
}

// Anti-aliased edge pixels between navy and background blend to a grayish-blue
// that "nearest of 3" would occasionally misclassify as copper. Requiring an
// absolute distance cap (not just nearest-of-3) keeps ambiguous edge blends
// out of the copper mask instead of producing a stray hairline/speckle.
const MAX_DIST = 90 ** 2;

async function buildMask(raw, info, target) {
  const { width, height, channels } = info;
  const mask = Buffer.alloc(width * height);
  for (let i = 0; i < width * height; i++) {
    const o = i * channels;
    const px = [raw[o], raw[o + 1], raw[o + 2]];
    const dNavy = distSq(px, NAVY_SAMPLE);
    const dCopper = distSq(px, COPPER_SAMPLE);
    const dBg = distSq(px, BG_SAMPLE);
    const isTarget =
      target === "navy"
        ? dNavy <= dCopper && dNavy <= dBg && dNavy <= MAX_DIST
        : dCopper <= dNavy && dCopper <= dBg && dCopper <= MAX_DIST;
    // Potrace traces black-on-white by default (blackOnWhite: true).
    mask[i] = isTarget ? 0 : 255;
  }
  return sharp(mask, { raw: { width, height, channels: 1 } }).png().toBuffer();
}

function traceLayer(maskPng, fillColor) {
  return new Promise((resolve, reject) => {
    const tracer = new potrace.Potrace();
    tracer.setParameters({
      threshold: 128,
      blackOnWhite: true,
      turdSize: 30,
      optCurve: true,
      alphaMax: 1,
    });
    tracer.loadImage(maskPng, (err) => {
      if (err) return reject(err);
      resolve(tracer.getPathTag(fillColor));
    });
  });
}

async function main() {
  const upscale = sharp(sourcePath).trim({ threshold: 12 });
  const trimmedMeta = await upscale.metadata();
  const scale = 4;
  const width = trimmedMeta.width * scale;
  const height = trimmedMeta.height * scale;

  const { data: raw, info } = await sharp(sourcePath)
    .trim({ threshold: 12 })
    .resize(width, height, { kernel: "cubic" })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const [navyMask, copperMask] = await Promise.all([
    buildMask(raw, info, "navy"),
    buildMask(raw, info, "copper"),
  ]);

  const [navyPath, copperPath] = await Promise.all([
    traceLayer(navyMask, INK_900),
    traceLayer(copperMask, COPPER_600),
  ]);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${info.width} ${info.height}">
${navyPath}
${copperPath}
</svg>
`;

  await writeFile(outPath, svg);
  console.log(`Vectorized logo written to ${path.relative(root, outPath)} (${info.width}x${info.height} viewBox)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
