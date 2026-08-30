import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/content";

const AUTOPLAY_INTERVAL_MS = 6000;

export default function WorkCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="services" className="relative overflow-hidden bg-ink-900">
      <Carousel opts={{ loop: true }} setApi={setApi} className="relative">
        <CarouselContent className="ml-0">
          {services.map(({ icon: Icon, title, text, image }, i) => (
            <CarouselItem key={title} className="basis-full pl-0">
              <div className="relative flex min-h-[720px] items-end overflow-hidden bg-ink-900 pb-16 pt-36 sm:min-h-[800px] sm:pb-24 lg:min-h-[850px] lg:pb-28">
                <div className="absolute inset-0 [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] sm:[clip-path:polygon(12%_0,100%_0,100%_100%,38%_100%)]">
                  <img src={image} alt={`${title} — CBVT HVAC service`} className="h-full w-full object-cover object-center" />
                  <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(15,40,81,.97)_0%,rgba(15,40,81,.8)_28%,rgba(15,40,81,.35)_50%,rgba(15,40,81,0)_72%)]" />
                </div>
                <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12">
                  <div className="max-w-xl">
                    <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-copper-400">
                      <span className="h-px w-8 bg-copper-400" />
                      What we do — {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-copper-600 text-white">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>
                    <h2 className="mt-6 font-display text-5xl font-bold leading-[.95] tracking-tight text-white sm:text-6xl lg:text-7xl">{title}</h2>
                    <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">{text}</p>
                    <a href="#contact" className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-copper-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-copper-400">Book this service <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-6 top-1/2 h-11 w-11 -translate-y-1/2 border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white sm:left-10" />
        <CarouselNext className="right-6 top-1/2 h-11 w-11 -translate-y-1/2 border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white sm:right-10" />
      </Carousel>
    </section>
  );
}
