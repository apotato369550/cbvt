import { writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const publicDir = path.join(root, "public");
const svgPath = path.join(publicDir, "logo.svg");

// The mark's dominant shape is a solid Ink 900 ring, so at tab-icon sizes it
// needs a light backing to read against a dark browser chrome — same role
// the old favicon.svg's navy background rect used to play, just inverted.
const PORCELAIN = "#F6F1EA";

async function withBacking(svg, size, radius) {
  const backing = Buffer.from(
    `<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" fill="${PORCELAIN}" /></svg>`,
  );
  const mark = await sharp(svg)
    .resize(Math.round(size * 0.86), Math.round(size * 0.86))
    .png()
    .toBuffer();
  return sharp(backing)
    .composite([{ input: mark, gravity: "center" }])
    .png()
    .toBuffer();
}

function buildFaviconSvg(logoSvgText) {
  const viewBoxMatch = logoSvgText.match(/viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/);
  if (!viewBoxMatch) throw new Error("logo.svg is missing a viewBox");
  const w = Number(viewBoxMatch[1]);
  const h = Number(viewBoxMatch[2]);
  const paths = [...logoSvgText.matchAll(/<path[^>]*\/>/g)].map((m) => m[0]);
  if (paths.length !== 2) throw new Error(`Expected 2 paths in logo.svg, found ${paths.length}`);

  const canvas = 100;
  const fill = 0.86;
  const scale = (canvas * fill) / Math.max(w, h);
  const tx = (canvas - w * scale) / 2;
  const ty = (canvas - h * scale) / 2;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${canvas}" height="${canvas}" viewBox="0 0 ${canvas} ${canvas}">
  <rect width="${canvas}" height="${canvas}" rx="${Math.round(canvas * 0.22)}" fill="${PORCELAIN}" />
  <g transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${scale.toFixed(4)})">
${paths.map((p) => "    " + p).join("\n")}
  </g>
</svg>
`;
}

async function main() {
  const svg = await readFile(svgPath);
  const faviconSvg = buildFaviconSvg(svg.toString("utf8"));
  await writeFile(path.join(publicDir, "favicon.svg"), faviconSvg);

  const sizes = {
    "icon-16.png": 16,
    "icon-32.png": 32,
    "icon-48.png": 48,
    "icon-192.png": 192,
    "icon-512.png": 512,
  };

  const generated = {};
  for (const [file, size] of Object.entries(sizes)) {
    const radius = Math.round(size * 0.22);
    const buffer = await withBacking(svg, size, radius);
    generated[file] = buffer;
    await writeFile(path.join(publicDir, file), buffer);
  }

  // apple-touch-icon needs an opaque background (no transparency) at 180x180
  const appleTouchIcon = await sharp(svg)
    .resize(150, 150)
    .toBuffer()
    .then((mark) =>
      sharp({
        create: {
          width: 180,
          height: 180,
          channels: 3,
          background: PORCELAIN,
        },
      })
        .composite([{ input: mark, gravity: "center" }])
        .flatten({ background: PORCELAIN })
        .png()
        .toBuffer(),
    );
  await writeFile(path.join(publicDir, "apple-touch-icon.png"), appleTouchIcon);

  const icoBuffer = await pngToIco([
    generated["icon-16.png"],
    generated["icon-32.png"],
    generated["icon-48.png"],
  ]);
  await writeFile(path.join(publicDir, "favicon.ico"), icoBuffer);

  console.log("Favicons generated in public/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
