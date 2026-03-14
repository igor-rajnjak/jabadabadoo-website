import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const baseUrl = "https://rodjendaonica-novi-sad.com";

export const metadata: Metadata = {
  title: "Pravila korišćenja | Jabadabadoo Rođendaonica",
  description: "Uslovi korišćenja sajta i usluge Jabadabadoo rođendaonice. Rezervacije, otkazivanje, autorska prava.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${baseUrl}/pravila` },
  openGraph: {
    title: "Pravila korišćenja | Jabadabadoo Rođendaonica",
    description: "Uslovi korišćenja sajta i usluge. Rezervacije, otkazivanje, autorska prava.",
    url: `${baseUrl}/pravila`,
    siteName: "Jabadabadoo Rođendaonica",
    type: "website",
    locale: "sr_RS",
    images: [{ url: `${baseUrl}/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-og-photo.png`, width: 1200, height: 630, alt: "Jabadabadoo Rođendaonica" }],
  },
  twitter: { card: "summary_large_image", title: "Pravila korišćenja | Jabadabadoo Rođendaonica", description: "Uslovi korišćenja sajta i usluge." },
};

export default function PravilaPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main className="py-24 md:py-32 px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <nav className="mb-8 text-text/60 text-sm">
            <Link href="/" className="hover:text-primary transition-colors">
              Početna
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text/80">Pravila korišćenja</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-text mb-8">
            Pravila korišćenja
          </h1>
          <p className="text-text/80 mb-8">
            Poslednja izmena: februar 2026.
          </p>

          <div className="prose prose-lg text-text/90 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-text mb-3">Sajt i informacije</h2>
              <p>
                Sajt je informativan. Cene, paketi i usluge mogu da se menjaju; za rezervaciju važi ono što je dogovoreno pri rezervaciji (telefon, email ili forma).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text mb-3">Rezervacija i otkazivanje</h2>
              <p>
                Za rođendane rezervacija je obavezna. Uslovi otkazivanja (rok, povrat novca ili premeštanje termina) važe prema dogovoru pri rezervaciji. Za pojedinosti pozovite nas ili pišite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text mb-3">Fotografisanje i snimanje</h2>
              <p>
                Fotografisanje u prostoru je dozvoljeno u skladu sa praksom objekta. Roditelji su odgovorni za dozvole za snimanje dece.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text mb-3">Autorska prava</h2>
              <p>
                Sadržaj sajta (tekstovi, slike, logo) zaštićen je autorskim pravima i pripada Jabadabadoo Rođendaonica. Komercijalno kopiranje ili korišćenje bez dozvole nije dozvoljeno.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text mb-3">Reklamacije i prigovori</h2>
              <p>
                Za reklamacije i prigovore obratite nam se putem kontakta (email ili telefon) navedenog na sajtu. Trudimo se da odgovorimo u razumnom roku.
              </p>
            </section>
          </div>

          <p className="mt-12 text-text/60 text-sm">
            <Link href="/" className="text-primary hover:underline">
              ← Nazad na početnu
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
