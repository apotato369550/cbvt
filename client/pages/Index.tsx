import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Fan,
  Hammer,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const services = [
  { icon: Fan, title: "Aircon Repair", text: "Fast, careful diagnostics for split-type, window, and commercial units." },
  { icon: Snowflake, title: "Aircon Installation", text: "Properly sized and neatly installed systems built for Cebu weather." },
  { icon: Sparkles, title: "General Cleaning", text: "Deep cleaning that keeps your aircon fresh, efficient, and healthy." },
  { icon: Wrench, title: "Airduct Installation", text: "Reliable ductwork for balanced, comfortable airflow in every space." },
  { icon: Hammer, title: "Exhaust Duct", text: "Purpose-built exhaust solutions for kitchens, shops, and facilities." },
  { icon: Zap, title: "Motor Rewinding", text: "Expert rewinding for all kinds of motors, with lasting performance." },
];

const brands = ["Koppel", "Carrier", "Daikin", "Samsung", "Panasonic"];
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeajvdly";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError(false);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-mist-50 text-ink-900">
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
            <a className="transition hover:text-white" href="#why-us">Why CBVT</a>
            <a className="transition hover:text-white" href="#about">About us</a>
            <a className="transition hover:text-white" href="#contact">Contact</a>
          </div>
          <a href="#contact" className="hidden rounded-full bg-copper-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-copper-400 sm:block">Book a service</a>
          <button aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded-full p-2 lg:hidden">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </nav>
        {menuOpen && <div className="mx-auto mt-2 max-w-[1240px] rounded-2xl bg-ink-900 p-5 text-white shadow-xl lg:hidden"><div className="grid gap-4 text-sm font-semibold"><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#why-us" onClick={() => setMenuOpen(false)}>Why CBVT</a><a href="#about" onClick={() => setMenuOpen(false)}>About us</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></div></div>}
      </header>

      <section id="top" className="relative flex min-h-[720px] items-end overflow-hidden bg-ink-900 pb-16 pt-36 sm:min-h-[800px] sm:pb-24 lg:min-h-[850px] lg:pb-28">
        <img src="https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg" alt="HVAC technician repairing an air conditioning unit" className="absolute inset-0 h-full w-full object-cover object-center opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,40,81,.98)_0%,rgba(15,40,81,.83)_42%,rgba(15,40,81,.2)_100%)]" />
        <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-copper-400"><span className="h-px w-8 bg-copper-400" />Cebu City's HVAC &amp; motor rewinding specialists</div>
            <h1 className="max-w-3xl font-display text-6xl font-bold leading-[.92] tracking-tight text-white sm:text-7xl lg:text-[88px]">Cebu Best Value<br /><span className="text-copper-400">Trading.</span></h1>
            <p className="mt-4 font-display text-2xl font-semibold text-white/85 sm:text-3xl">Comfort that works for you.</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">From reliable aircon service to complete HVAC solutions, CBVT keeps homes, businesses, and facilities in Cebu cool, clean, and running right.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-copper-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-copper-400">Book a service <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a><a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:border-white hover:bg-white/10">Explore our services</a></div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/65"><span className="flex items-center gap-2"><BadgeCheck size={17} className="text-copper-400" /> Licensed technicians</span><span className="flex items-center gap-2"><BadgeCheck size={17} className="text-copper-400" /> Quality parts</span><span className="flex items-center gap-2"><BadgeCheck size={17} className="text-copper-400" /> Cebu-based</span></div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-8"><div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6 px-5 sm:px-8 lg:px-12"><p className="text-xs font-semibold uppercase tracking-[.16em] text-neutral-600">Trusted equipment partners</p><div className="flex flex-wrap items-center gap-x-8 gap-y-3 sm:gap-x-12">{brands.map((brand) => <span key={brand} className="font-display text-xl font-semibold tracking-wide text-ink-900/40">{brand}</span>)}</div></div></section>

      <section id="services" className="bg-mist-50 py-24 sm:py-32"><div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">What we do</p><h2 className="mt-3 max-w-xl font-display text-5xl font-bold leading-none tracking-tight sm:text-6xl">Six services.<br /><span className="text-steel-500">One Cebu-based crew.</span></h2></div><p className="max-w-sm text-base leading-relaxed text-neutral-600">We bring practical expertise and dependable service to every project, big or small.</p></div><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map(({ icon: Icon, title, text }) => <article key={title} className="group rounded-md border border-border bg-white p-6 transition hover:-translate-y-1 hover:border-steel-500/40 hover:shadow-xl hover:shadow-ink-900/5"><div className="flex h-11 w-11 items-center justify-center rounded-sm bg-ink-900 text-copper-400"><Icon size={21} strokeWidth={1.6} /></div><h3 className="mt-8 font-display text-2xl font-semibold">{title}</h3><p className="mt-2 min-h-12 text-sm leading-relaxed text-neutral-600">{text}</p><a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-steel-600 transition group-hover:text-copper-600">Learn more <ArrowUpRight size={15} /></a></article>)}</div></div></section>

      <section id="why-us" className="bg-porcelain py-24 sm:py-32"><div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[.95fr_1.05fr] lg:gap-24 lg:px-12"><div className="relative">{/* Brand panel in place of stock photography — real jobsite photography is a follow-up per STYLE_GUIDE.md §06/§08 */}<div className="flex aspect-[4/5] w-full items-center justify-center rounded-md bg-ink-900"><div className="flex h-56 w-56 items-center justify-center rounded-full bg-porcelain p-9 shadow-xl sm:h-72 sm:w-72"><img src="/logo.svg" alt="CBVT logo" className="h-full w-full" /></div></div><div className="absolute -bottom-7 -right-4 flex max-w-[230px] items-center gap-3 rounded-sm bg-copper-600 p-5 text-white shadow-xl sm:-right-7"><span className="font-display text-4xl font-bold">15+</span><span className="text-xs font-semibold leading-tight text-white/85">years of keeping<br />Cebu comfortable</span></div></div><div><p className="eyebrow">Why CBVT</p><h2 className="mt-3 font-display text-5xl font-bold leading-[.96] tracking-tight sm:text-6xl">The cool,<br /><span className="text-steel-500">local choice.</span></h2><p className="mt-7 text-lg leading-relaxed text-neutral-600">Good service is more than fixing a unit. It's showing up when you say you will, doing the job properly, and leaving people with peace of mind.</p><div className="mt-9 grid gap-5 sm:grid-cols-2"><div className="border-t border-border pt-4"><ShieldCheck className="text-copper-600" size={23} strokeWidth={1.7} /><h3 className="mt-3 font-display text-xl font-semibold">Built on trust</h3><p className="mt-1 text-sm leading-relaxed text-neutral-600">Straightforward advice, transparent pricing, no shortcuts.</p></div><div className="border-t border-border pt-4"><Wrench className="text-copper-600" size={23} strokeWidth={1.7} /><h3 className="mt-3 font-display text-xl font-semibold">Made to last</h3><p className="mt-1 text-sm leading-relaxed text-neutral-600">Quality workmanship and parts that stand up to daily use.</p></div></div><a href="#about" className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-ink-700">Meet the team <ArrowUpRight size={16} /></a></div></div></section>

      <section id="about" className="bg-white py-24 sm:py-28"><div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12"><div className="rounded-md bg-ink-900 px-7 py-12 text-white sm:px-14 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-20"><div><p className="eyebrow text-copper-400">Serving Cebu with pride</p><h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-none sm:text-5xl">Comfortable spaces make<br /><span className="text-copper-400">better days.</span></h2></div><div className="mt-8 max-w-sm lg:mt-0"><p className="text-sm leading-relaxed text-white/65">Cebu Best Value Trading Corporation is your local partner for air-conditioning, ventilation, and general technical services. We work hard so you can focus on what matters.</p><a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-copper-400 hover:text-copper-300">Start a conversation <ArrowUpRight size={16} /></a></div></div></div></section>

      <section id="contact" className="bg-mist-100 py-24 sm:py-32"><div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-24 lg:px-12"><div><p className="eyebrow">Let's get to work</p><h2 className="mt-3 font-display text-5xl font-bold leading-none tracking-tight sm:text-6xl">Need a hand<br /><span className="text-steel-500">with your HVAC?</span></h2><p className="mt-6 max-w-sm leading-relaxed text-neutral-600">Tell us what you need and our team will get back to you as soon as possible.</p><div className="mt-10 space-y-4 text-sm"><div className="flex items-start gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-copper-600"><Phone size={16} strokeWidth={1.6} /></span><div className="flex flex-col gap-1 font-semibold text-ink-900"><a href="tel:+639171622168" className="hover:text-copper-600">Globe Telecom: (63) 917 162 2168</a><a href="tel:+639228847888" className="hover:text-copper-600">Sun Telecom: (63) 922 884 7888</a></div></div><a href="mailto:cbvt_1234@yahoo.com.ph" className="flex items-center gap-3 font-semibold text-ink-900 hover:text-copper-600"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-copper-600"><Mail size={16} strokeWidth={1.6} /></span>cbvt_1234@yahoo.com.ph</a><span className="flex items-center gap-3 text-neutral-600"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-copper-600"><MapPin size={16} strokeWidth={1.6} /></span>Cebu City, Cebu, Philippines</span></div></div><div className="rounded-md bg-white p-6 shadow-xl shadow-ink-900/5 sm:p-9">{submitted ? <div className="flex min-h-[350px] flex-col items-center justify-center text-center"><div className="flex h-14 w-14 items-center justify-center rounded-full bg-mist-100 text-steel-600"><Check size={27} /></div><h3 className="mt-5 font-display text-3xl font-semibold">Message received.</h3><p className="mt-2 max-w-sm text-sm text-neutral-600">Thanks for reaching out. Our team will be in touch shortly.</p></div> : <form onSubmit={handleContactSubmit} className="grid gap-5"><input type="hidden" name="_subject" value="New contact form submission — CBVT website" /><div className="grid gap-5 sm:grid-cols-2"><label className="field-label">Your name<input required name="name" placeholder="Juan Dela Cruz" /></label><label className="field-label">Phone number<input required name="phone" placeholder="09XX XXX XXXX" /></label></div><label className="field-label">What can we help with?<select required name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}<option>Sales / Product inquiry</option></select></label><label className="field-label">Message<textarea required name="message" placeholder="Tell us a little about your project..." rows={4} /></label>{submitError && <p className="text-sm font-semibold text-red-600">Something went wrong sending your message. Please try again, or call us directly.</p>}<button type="submit" disabled={submitting} className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-copper-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-copper-400 disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Sending..." : "Send message"} <ArrowUpRight size={16} /></button></form>}</div></div></section>

      <footer className="bg-ink-900 px-5 py-10 text-white sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-6 sm:flex-row sm:items-center"><div className="flex items-center gap-2.5"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-porcelain p-1.5"><img src="/logo.svg" alt="CBVT logo" className="h-full w-full" /></span><span className="font-display text-lg font-bold tracking-wide"><span className="sm:hidden">CBVT<span className="text-copper-400">.</span></span><span className="hidden sm:inline">Cebu Best Value Trading<span className="text-copper-400">.</span></span></span></div><p className="text-xs text-white/45">© 2025 Cebu Best Value Trading Corporation · Cebu City, Cebu, PH</p><a href="#top" className="flex items-center gap-2 text-xs font-semibold text-white/65 hover:text-white">Back to top <ChevronDown className="rotate-180" size={15} /></a></div></footer>
    </main>
  );
}
