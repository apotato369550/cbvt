import NavBar from "@/components/sections/NavBar";
import MainHero from "@/components/sections/MainHero";
import BrandMarquee from "@/components/sections/BrandMarquee";
import WorkCarousel from "@/components/sections/WorkCarousel";
import AboutHero from "@/components/sections/AboutHero";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-mist-50 text-ink-900">
      <NavBar />
      <MainHero />
      <BrandMarquee />
      <WorkCarousel />
      <AboutHero />
      <ContactSection />
      <Footer />
    </main>
  );
}
