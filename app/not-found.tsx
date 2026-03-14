import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCall from "@/components/StickyCall";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { CONTACT } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Header />
      <main className="flex-1 py-24 md:py-32 px-6 md:px-8 flex items-center justify-center">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="text-8xl md:text-9xl mb-6">🎈</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text">
            Stranica nije pronađena
          </h1>
          <p className="text-xl text-text/80 mb-10">
            Možda ste pogrešili link ili je stranica premeštena. Vratite se na početnu ili nas pozovite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition-all"
            >
              Nazad na početnu
            </Link>
            <a
              href={`tel:${CONTACT.phoneFormatted}`}
              className="inline-block bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-500 transition-all"
            >
              📞 Pozovi {CONTACT.phone}
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <StickyCall />
      <WhatsAppWidget />
    </div>
  );
}
