import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCall from "@/components/StickyCall";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { CONTACT } from "@/lib/constants";

const baseUrl = "https://rodjendaonica-novi-sad.com";

export const metadata: Metadata = {
  title: "Lokacija i Kako Do Nas | Somborska 17, Novi Sad | Jabadabadoo",
  description: "Jabadabadoo rodjendaonica - Somborska 17, Novi Sad. Između Adice i Telepa, na produžetku Bulevara Evrope. Blizu Minakve i Veternika. Kako do nas - mapa i saveti.",
  keywords: "Jabadabadoo lokacija, rodjendaonica Novi Sad adresa, Somborska 17, igraonica Bulevar Evrope, kako do Jabadabadoo",
  alternates: {
    canonical: `${baseUrl}/lokacija`,
  },
  openGraph: {
    title: "Lokacija | Somborska 17, Novi Sad | Jabadabadoo",
    description: "Kako do Jabadabadoo rodjendaonice - Somborska 17, između Adice i Telepa, blizu Bulevara Evrope.",
    url: `${baseUrl}/lokacija`,
    siteName: "Jabadabadoo Rođendaonica",
  },
};

export default function LokacijaPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": baseUrl,
    name: "Jabadabadoo Rođendaonica",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Somborska 17",
      addressLocality: "Novi Sad",
      postalCode: "21000",
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.2671,
      longitude: 19.8335,
    },
    url: baseUrl,
    telephone: CONTACT.phoneFormatted,
    openingHours: "Mo-Su 10:00-21:00",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Lokacija", item: `${baseUrl}/lokacija` },
    ],
  };

  return (
    <div className="min-h-screen bg-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="py-24 md:py-32 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-text/60">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Početna
                </Link>
              </li>
              <li>/</li>
              <li className="text-text/80">Lokacija</li>
            </ol>
          </nav>

          <header className="mb-16">
            <div className="text-6xl mb-6">📍</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text">
              Gde Se Nalazimo - Lokacija Jabadabadoo
            </h1>
            <p className="text-xl text-text/80 leading-relaxed">
              Jabadabadoo rodjendaonica i igraonica se nalazi na Somborska 17 u Novom Sadu. Lako dostupni iz centra grada, između Adice i Telepa, na produžetku Bulevara Evrope. Razmatrate više rodjendaonica?{" "}
              <Link href="/najbolja-rodjendaonica" className="text-primary font-semibold hover:underline">
                Uporedite opcije u Novom Sadu
              </Link>
              .
            </p>
          </header>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Adresa i Kontakt
            </h2>
            <div className="bg-white p-8 rounded-3xl border-4 border-secondary shadow-lg mb-8">
              <p className="text-xl font-bold text-text mb-2">{CONTACT.address}</p>
              <p className="text-text/80 mb-6">{CONTACT.addressDescription}</p>
              <p className="text-text/80 mb-4">
                <strong>Radno vreme:</strong> {CONTACT.workingHours}
              </p>
              <p className="text-text/80 mb-6">{CONTACT.workingHoursNote}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT.phoneFormatted}`}
                  className="inline-block bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-red-500 transition-all text-center"
                >
                  📞 {CONTACT.phone}
                </a>
                <a
                  href={CONTACT.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-secondary text-white px-6 py-3 rounded-full font-bold hover:bg-teal-500 transition-all text-center"
                >
                  🗺️ Otvori u Google Maps
                </a>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Kako Do Nas - Saveti
            </h2>
            <ul className="space-y-4 text-lg text-text/80">
              <li className="flex gap-3">
                <span className="text-2xl">🚗</span>
                <div>
                  <strong>Automobilom:</strong> Somborska 17 - ulica je na produžetku Bulevara Evrope, između naselja Adice i Telep. Parking u blizini.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🚌</span>
                <div>
                  <strong>Gradskim prevozom:</strong> Proverite linije koje prolaze blizu Somborske ulice i Bulevara Evrope.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <strong>Orijentiri:</strong> Blizu Minakve i Veternika. Lako dostupni iz centra Novog Sada.
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Mapa - Google Maps
            </h2>
            <div className="rounded-3xl overflow-hidden border-4 border-secondary shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Somborska+17,+21000+Novi+Sad,+Serbia&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija Jabadabadoo - Somborska 17, Novi Sad"
                className="w-full"
              />
            </div>
            <p className="mt-4 text-text/60 text-sm">
              <a
                href={CONTACT.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Otvori punu mapu u Google Maps →
              </a>
            </p>
          </section>

          <section className="bg-white p-8 rounded-3xl border-4 border-secondary shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-primary">Rezervacija</h2>
            <p className="text-text/80 mb-6">
              Za rođendane - pozovite nas da proverite dostupnost i rezervišete termin. Za posetu igraonice i kafića - dođite bilo kada tokom radnog vremena.
            </p>
            <Link
              href="/#kontakt"
              className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition-all"
            >
              Rezerviši Rođendan
            </Link>
          </section>
        </div>
      </main>
      <Footer />
      <StickyCall />
      <WhatsAppWidget />
    </div>
  );
}
