import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCall from "@/components/StickyCall";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { CONTACT, TRUST_SIGNALS } from "@/lib/constants";

const baseUrl = "https://rodjendaonica-novi-sad.com";

export const metadata: Metadata = {
  title: "Igraonica Novi Sad | Kafić sa Igraonicom za Porodice | Jabadabadoo",
  description: "Igraonica i kafić za porodice u Novom Sadu. Dok deca igraju u sigurnom prostoru, roditelji mogu popiti kafu. Somborska 17 - blizu Bulevara Evrope, Minakve i Veternika.",
  keywords: "igraonica novi sad, kafić sa igraonicom novi sad, igraonica i kafić, dečija igraonica novi sad, kafić za porodice novi sad",
  alternates: {
    canonical: `${baseUrl}/igraonica-i-kafic`,
  },
  openGraph: {
    title: "Igraonica Novi Sad | Kafić sa Igraonicom | Jabadabadoo",
    description: "Igraonica i kafić za porodice u Novom Sadu. Klimatizovan prostor, deca igraju - roditelji uživaju u kafi.",
    url: `${baseUrl}/igraonica-i-kafic`,
    siteName: "Jabadabadoo Rođendaonica",
  },
};

export default function IgraonicaPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Jabadabadoo Igraonica i Kafić",
    description: "Igraonica i kafić za porodice u Novom Sadu. Klimatizovan prostor gde deca igraju dok roditelji uživaju u kafi.",
    url: `${baseUrl}/igraonica-i-kafic`,
    telephone: CONTACT.phoneFormatted,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Somborska 17",
      addressLocality: "Novi Sad",
      postalCode: "21000",
      addressCountry: "RS",
    },
    openingHours: "Mo-Su 10:00-21:00",
    image: `${baseUrl}/images/rodjendaonica-igraonica-klimatizovano-animatori-za-decu-bebe-novi-sad-jabadabadoo-animatori.png`,
  };

  return (
    <div className="min-h-screen bg-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
              <li className="text-text/80">Igraonica i kafić</li>
            </ol>
          </nav>

          <header className="mb-16">
            <div className="text-6xl mb-6">🎮</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text">
              Igraonica i Kafić za Porodice u Novom Sadu
            </h1>
            <p className="text-xl text-text/80 leading-relaxed">
              Jabadabadoo nudi igraonicu za decu i kafić za roditelje - sve na jednom mestu. Dok se deca igraju u sigurnom i klimatizovanom prostoru, vi možete da popijete kafu, sok ili nešto slatko.
            </p>
          </header>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Kafić sa Igraonicom - Šta To Nudimo?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-3xl border-4 border-secondary shadow-lg">
                <div className="text-4xl mb-4">👶</div>
                <h3 className="text-xl font-bold mb-3 text-text">Igraonica za Decu</h3>
                <p className="text-text/80">
                  Prostran, bezbedan i klimatizovan prostor za decu od 2 do 10 godina. Poligon, igračke i aktivnosti - sve što je potrebno za zabavu.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl border-4 border-secondary shadow-lg">
                <div className="text-4xl mb-4">☕</div>
                <h3 className="text-xl font-bold mb-3 text-text">Kafić za Roditelje</h3>
                <p className="text-text/80">
                  Udoban prostor gde roditelji mogu da se opuste uz kafu, sok ili nešto slatko dok deca igraju. Sve na dohvat ruke.
                </p>
              </div>
            </div>

            <p className="text-lg text-text/80 leading-relaxed mb-8">
              Već {TRUST_SIGNALS.years}. godinu organizujemo rodjendane i dočekujemo porodice. Naš prostor kombinuje igraonicu, kafić i rodjendaonicu - idealno za one koji traže <strong>kafić sa igraonicom u Novom Sadu</strong>.
            </p>

            <div className="bg-white p-8 rounded-3xl border-4 border-secondary shadow-lg mb-12">
              <h3 className="text-xl font-bold mb-4 text-primary">Gde Se Nalazimo?</h3>
              <p className="text-text/80 mb-4">
                <strong>{CONTACT.address}</strong>
              </p>
              <p className="text-text/80 mb-4">{CONTACT.addressDescription}</p>
              <p className="text-text/80 mb-6">Radno vreme: {CONTACT.workingHours}</p>
              <Link
                href="/lokacija"
                className="inline-block text-primary font-bold hover:underline"
              >
                → Kako do nas - mapa i uputstva
              </Link>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Igraonica, Kafić ili Rodjendaonica?
            </h2>
            <p className="text-lg text-text/80 leading-relaxed mb-6">
              Možete nas posetiti kao <strong>igraonicu i kafić</strong> – dođite bilo kada tokom radnog vremena. Ako planirate rođendan, <Link href="/#cenovnik" className="text-primary font-semibold hover:underline">rezervišite all-inclusive paket</Link> i prepustite nam organizaciju. Razmatrate i druge rodjendaonice? <Link href="/najbolja-rodjendaonica" className="text-primary font-semibold hover:underline">Uporedite opcije u Novom Sadu</Link>.
            </p>
            <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden border-4 border-secondary">
              <Image
                src="/images/rodjendaonica-igraonica-klimatizovano-animatori-za-decu-bebe-novi-sad-jabadabadoo-animatori.png"
                alt="Igraonica i kafić Jabadabadoo Novi Sad - klimatizovan prostor za decu i roditelje"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          </section>

          <section className="bg-white p-8 md:p-10 rounded-3xl border-4 border-secondary shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-primary">Rezervišite ili Posetite Nas</h2>
            <p className="text-text/80 mb-6">
              Za rođendane - rezervacija je obavezna. Za posetu igraonice i kafića - dođite kad god želite tokom radnog vremena.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${CONTACT.phoneFormatted}`}
                className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition-all text-center"
              >
                📞 Pozovi {CONTACT.phone}
              </a>
              <Link
                href="/#kontakt"
                className="inline-block bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-500 transition-all text-center"
              >
                Rezerviši Online
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <StickyCall />
      <WhatsAppWidget />
    </div>
  );
}
