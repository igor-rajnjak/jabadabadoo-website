import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT } from "@/lib/constants";

const baseUrl = "https://rodjendaonica-novi-sad.com";

export const metadata: Metadata = {
  title: "Politika privatnosti | Jabadabadoo Rođendaonica",
  description: "Kako Jabadabadoo prikuplja i koristi vaše podatke. Kontakt za pristup, ispravku ili brisanje podataka.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${baseUrl}/privatnost` },
  openGraph: {
    title: "Politika privatnosti | Jabadabadoo Rođendaonica",
    description: "Kako Jabadabadoo prikuplja i koristi vaše podatke. Kontakt za pristup, ispravku ili brisanje podataka.",
    url: `${baseUrl}/privatnost`,
    siteName: "Jabadabadoo Rođendaonica",
    type: "website",
    locale: "sr_RS",
    images: [{ url: `${baseUrl}/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-og-photo.png`, width: 1200, height: 630, alt: "Jabadabadoo Rođendaonica" }],
  },
  twitter: { card: "summary_large_image", title: "Politika privatnosti | Jabadabadoo Rođendaonica", description: "Kako Jabadabadoo prikuplja i koristi vaše podatke." },
};

export default function PrivatnostPage() {
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
            <span className="text-text/80">Politika privatnosti</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-text mb-8">
            Politika privatnosti
          </h1>
          <p className="text-text/80 mb-8">
            Poslednja izmena: februar 2026.
          </p>

          <div className="prose prose-lg text-text/90 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-text mb-3">Ko smo</h2>
              <p>
                Jabadabadoo Rođendaonica, {CONTACT.address}. Kontakt: {CONTACT.email}, {CONTACT.phone}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text mb-3">Koje podatke prikupljamo</h2>
              <p>
                Iz kontakt i rezervacijske forme: email, telefon, poruka i podaci uneti u formu (datum, izabrani paket). Ako koristimo analitiku (npr. Google Analytics), prikupljaju se anonimizovani podaci o poseti (IP, pregledač). Cookie-ji se mogu koristiti za rad sajta i analitiku.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text mb-3">Zašto</h2>
              <p>
                Da odgovorimo na upit, obavimo rezervaciju rođendana ili pošaljemo informacije koje ste zatražili.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text mb-3">Kome dajemo podatke</h2>
              <p>
                Samo nama (Jabadabadoo). Ne prodajemo i ne ustupamo vaše podatke trećim stranama u marketinške svrhe. Usluge kao što su hosting ili email mogu obrađivati podatke u našem imenu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text mb-3">Koliko čuvamo</h2>
              <p>
                Dok je potrebno za rezervaciju i komunikaciju, ili do 2 godine od poslednjeg kontakta, osim ako zakon ne zahteva duže čuvanje.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text mb-3">Vaša prava</h2>
              <p>
                Možete zatražiti pristup, ispravku ili brisanje vaših podataka. Pišite nam na {CONTACT.email}. Obrada je u skladu sa važećim propisima o zaštiti podataka.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text mb-3">Cookie i analitika</h2>
              <p>
                Sajt može koristiti Google Analytics ili slične alate za razumevanje posete. U podešavanjima pregledača možete ograničiti ili onemogućiti cookie-je.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text mb-3">Promene</h2>
              <p>
                Povremeno ažuriramo ovu politiku. Važne promene će biti objavljene na ovoj stranici uz datum.
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
