import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 px-5 pt-5 sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between rounded-full border border-white/15 bg-ink-900/90 px-4 py-3 text-white shadow-xl shadow-ink-900/10 backdrop-blur-md sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-porcelain p-1.5"><img src="/logo.svg" alt="CBVT logo" className="h-full w-full" /></span>
          <span className="font-display text-[19px] font-bold leading-none tracking-wide sm:text-[21px]">
            <span className="sm:hidden">CBVT<span className="text-copper-400">.</span></span>
            <span className="hidden sm:inline">Cebu Best Value Trading<span className="text-copper-400">.</span></span>
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold text-white/75 lg:flex">
          <a className="transition hover:text-white" href="#services">Services</a>
          <a className="transition hover:text-white" href="#about">About us</a>
          <a className="transition hover:text-white" href="#contact">Contact</a>
        </div>
        <a href="#contact" className="hidden rounded-full bg-copper-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-copper-400 sm:block">Book a service</a>
        <button aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded-full p-2 lg:hidden">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </nav>
      {menuOpen && <div className="mx-auto mt-2 max-w-[1240px] rounded-2xl bg-ink-900 p-5 text-white shadow-xl lg:hidden"><div className="grid gap-4 text-sm font-semibold"><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#about" onClick={() => setMenuOpen(false)}>About us</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></div></div>}
    </header>
  );
}
