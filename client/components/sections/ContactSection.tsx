import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { services } from "@/data/content";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeajvdly";

export default function ContactSection() {
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
    <section id="contact" className="bg-mist-100 py-24 sm:py-32"><div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-24 lg:px-12"><div><p className="eyebrow">Let's get to work</p><h2 className="mt-3 font-display text-5xl font-bold leading-none tracking-tight sm:text-6xl">Need a hand<br /><span className="text-steel-500">with your HVAC?</span></h2><p className="mt-6 max-w-sm leading-relaxed text-neutral-600">Tell us what you need and our team will get back to you as soon as possible.</p><div className="mt-10 space-y-4 text-sm"><div className="flex items-start gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-copper-600"><Phone size={16} strokeWidth={1.6} /></span><div className="flex flex-col gap-1 font-semibold text-ink-900"><a href="tel:+639270067888" className="hover:text-copper-600">Globe Telecom: (63) 927 006 7888</a><a href="tel:+639228847888" className="hover:text-copper-600">Sun Telecom: (63) 922 884 7888</a></div></div><a href="mailto:cebubestvaluetrading@gmail.com" className="flex items-center gap-3 font-semibold text-ink-900 hover:text-copper-600"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-copper-600"><Mail size={16} strokeWidth={1.6} /></span>cebubestvaluetrading@gmail.com</a><span className="flex items-center gap-3 text-neutral-600"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-copper-600"><MapPin size={16} strokeWidth={1.6} /></span>Cebu City, Cebu, Philippines</span></div></div><div className="rounded-md bg-white p-6 shadow-xl shadow-ink-900/5 sm:p-9">{submitted ? <div className="flex min-h-[350px] flex-col items-center justify-center text-center"><div className="flex h-14 w-14 items-center justify-center rounded-full bg-mist-100 text-steel-600"><Check size={27} /></div><h3 className="mt-5 font-display text-3xl font-semibold">Message received.</h3><p className="mt-2 max-w-sm text-sm text-neutral-600">Thanks for reaching out. Our team will be in touch shortly.</p></div> : <form onSubmit={handleContactSubmit} className="grid gap-5"><input type="hidden" name="_subject" value="New contact form submission — CBVT website" /><div className="grid gap-5 sm:grid-cols-2"><label className="field-label">Your name<input required name="name" placeholder="Juan Dela Cruz" /></label><label className="field-label">Phone number<input required name="phone" placeholder="09XX XXX XXXX" /></label></div><label className="field-label">What can we help with?<select required name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}<option>Sales / Product inquiry</option></select></label><label className="field-label">Message<textarea required name="message" placeholder="Tell us a little about your project..." rows={4} /></label>{submitError && <p className="text-sm font-semibold text-red-600">Something went wrong sending your message. Please try again, or call us directly.</p>}<button type="submit" disabled={submitting} className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-copper-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-copper-400 disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Sending..." : "Send message"} <ArrowUpRight size={16} /></button></form>}</div></div></section>
  );
}
