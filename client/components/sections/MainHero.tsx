import { ArrowUpRight, BadgeCheck } from "lucide-react";

export default function MainHero() {
  return (
    <section id="top" className="relative flex min-h-[720px] items-end overflow-hidden bg-ink-900 pb-16 pt-36 sm:min-h-[800px] sm:pb-24 lg:min-h-[850px] lg:pb-28">
      <img src="https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg" alt="HVAC technician repairing an air conditioning unit" className="absolute inset-0 h-full w-full object-cover object-center opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,40,81,.98)_0%,rgba(15,40,81,.83)_42%,rgba(15,40,81,.2)_100%)]" />
      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-copper-400"><span className="h-px w-8 bg-copper-400" />Cebu City's HVAC &amp; motor rewinding specialists</div>
          <h1 className="max-w-3xl font-display text-6xl font-bold leading-[.92] tracking-tight text-white sm:text-7xl lg:text-[88px]">Cebu Best Value<br /><span className="text-copper-400">Trading Corporation.</span></h1>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[.14em] text-white/60 sm:text-base">The HVAC Division of Cebu Best Value Trading Corporation.</p>
          <p className="mt-4 font-display text-2xl font-semibold text-white/85 sm:text-3xl">Comfort that works for you.</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">From reliable aircon service to complete HVAC solutions, CBVT keeps homes, businesses, and facilities in Cebu cool, clean, and running right.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-copper-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-copper-400">Book a service <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a><a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:border-white hover:bg-white/10">Explore our services</a></div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/65"><span className="flex items-center gap-2"><BadgeCheck size={17} className="text-copper-400" /> Licensed technicians</span><span className="flex items-center gap-2"><BadgeCheck size={17} className="text-copper-400" /> Quality parts</span><span className="flex items-center gap-2"><BadgeCheck size={17} className="text-copper-400" /> Cebu-based</span></div>
        </div>
      </div>
    </section>
  );
}
