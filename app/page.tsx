import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import HowWeOrganize from "@/components/HowWeOrganize";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import FAQSection from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCall from "@/components/StickyCall";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyUs />
      <Gallery />
      <HowWeOrganize />
      <Pricing />
      <Reviews />
      <FAQSection />
      <Contact />
      <Footer />
      <StickyCall />
      <WhatsAppWidget />
    </main>
  );
}
