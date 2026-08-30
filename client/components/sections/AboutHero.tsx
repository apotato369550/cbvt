import { ArrowUpRight, ShieldCheck, Wrench } from "lucide-react";

export default function AboutHero() {
  return (
    <section id="about" className="relative flex min-h-[720px] items-end overflow-hidden bg-porcelain pb-16 pt-36 sm:min-h-[800px] sm:pb-24 lg:min-h-[850px] lg:pb-28">
      <img src="https://images.pexels.com/photos/27134985/pexels-photo-27134985.jpeg" alt="Installed air conditioning unit outside a building" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,241,234,.98)_0%,rgba(246,241,234,.88)_42%,rgba(246,241,234,.2)_100%)]" />
      <img src="https://images.pexels.com/photos/16848596/pexels-photo-16848596.jpeg" alt="Air conditioning unit mounted on a wall" className="absolute right-6 top-24 hidden h-40 w-56 rounded-md object-cover shadow-xl shadow-ink-900/10 ring-4 ring-white sm:block lg:right-12 lg:top-32 lg:h-52 lg:w-72" />
      <div className="absolute right-6 top-[16.5rem] hidden max-w-[230px] items-center gap-3 rounded-sm bg-copper-600 p-5 text-white shadow-xl sm:flex lg:right-12 lg:top-[21.5rem]"><span className="font-display text-4xl font-bold">15+</span><span className="text-xs font-semibold leading-tight text-white/85">years of keeping<br />Cebu comfortable</span></div>
      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white p-1.5 shadow-sm"><img src="/logo.svg" alt="CBVT logo" className="h-full w-full" /></span>
            <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-copper-600"><span className="h-px w-8 bg-copper-600" />Why CBVT</span>
          </div>
          <h2 className="font-display text-5xl font-bold leading-[.95] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">The cool,<br /><span className="text-steel-500">local choice.</span></h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-neutral-600">Cebu Best Value Trading Corporation is your local partner for air-conditioning, ventilation, and general technical services. Good service is more than fixing a unit — it's showing up when you say you will, doing the job properly, and leaving people with peace of mind.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="border-t border-border pt-4"><ShieldCheck className="text-copper-600" size={23} strokeWidth={1.7} /><h3 className="mt-3 font-display text-xl font-semibold text-ink-900">Built on trust</h3><p className="mt-1 text-sm leading-relaxed text-neutral-600">Straightforward advice, transparent pricing, no shortcuts.</p></div>
            <div className="border-t border-border pt-4"><Wrench className="text-copper-600" size={23} strokeWidth={1.7} /><h3 className="mt-3 font-display text-xl font-semibold text-ink-900">Made to last</h3><p className="mt-1 text-sm leading-relaxed text-neutral-600">Quality workmanship and parts that stand up to daily use.</p></div>
          </div>
          <a href="#contact" className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-copper-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-copper-400">Start a conversation <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
        </div>
      </div>
    </section>
  );
}
