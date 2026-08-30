import { brands } from "@/data/content";

export default function BrandMarquee() {
  return (
    <section className="border-b border-border bg-white py-10"><div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12"><p className="text-xs font-semibold uppercase tracking-[.16em] text-neutral-600">Trusted equipment partners</p><div className="relative mt-6 overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"><div className="flex w-max items-center gap-12 motion-safe:animate-marquee hover:[animation-play-state:paused] sm:gap-16">{[...brands, ...brands].map((brand, i) => <img key={brand.name + i} src={brand.logo} alt={brand.name} className={brand.name === "Matrix" ? "h-14 w-auto shrink-0 object-contain sm:h-16" : "h-8 w-auto shrink-0 object-contain sm:h-9"} />)}</div></div></div></section>
  );
}
