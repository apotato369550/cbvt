import { ChevronDown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink-900 px-5 py-10 text-white sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-6 sm:flex-row sm:items-center"><div className="flex items-center gap-2.5"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-porcelain p-1.5"><img src="/logo.svg" alt="CBVT logo" className="h-full w-full" /></span><span className="font-display text-lg font-bold tracking-wide"><span className="sm:hidden">CBVT<span className="text-copper-400">.</span></span><span className="hidden sm:inline">Cebu Best Value Trading<span className="text-copper-400">.</span></span></span></div><p className="text-xs text-white/45">© 2025 Cebu Best Value Trading Corporation · Cebu City, Cebu, PH</p><a href="#top" className="flex items-center gap-2 text-xs font-semibold text-white/65 hover:text-white">Back to top <ChevronDown className="rotate-180" size={15} /></a></div></footer>
  );
}
