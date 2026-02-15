import { Metadata } from "next";
import Link from "next/link";
import { VS_COMPETITORS } from "@/lib/vsCompetitors";
import Header from "@/components/Header";
import { ComparisonIndexTopCTAs, ComparisonIndexBottomCTA } from "@/components/ComparisonIndexCTAs";
import ComparisonTable from "@/components/ComparisonTable";
import Footer from "@/components/Footer";
import StickyCall from "@/components/StickyCall";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const baseUrl = "https://rodjendaonica-novi-sad.com";
const basePath = "/najbolja-rodjendaonica";

export const metadata: Metadata = {
  title: "Uporedite Rodjendaonice u Novom Sadu | Jabadabadoo ili Ostale Rodjendaonice",
  description:
    "Uporedite Jabadabadoo sa drugim rodjendaonicama i igraonicama u Novom Sadu. Dum pa dum, Loompa Land, Cosmoplay, Fantazija, Starli i ostali – lokacija, paketi, all-inclusive, roditelji besplatno.",
  keywords:
    "uporedite rodjendaonice novi sad, rodjendaonice novi sad poređenje, jabadabadoo ili, igraonice novi sad poređenje",
  alternates: {
    canonical: `${baseUrl}${basePath}`,
  },
  openGraph: {
    title: "Uporedite Rodjendaonice u Novom Sadu | Jabadabadoo",
    description:
      "Uporedite Jabadabadoo sa drugim rodjendaonicama u Novom Sadu – lokacija, paketi, all-inclusive, roditelji besplatno.",
    type: "website",
    url: `${baseUrl}${basePath}`,
    siteName: "Jabadabadoo Rođendaonica",
    images: [
      {
        url: `${baseUrl}/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-og-photo.png`,
        width: 1200,
        height: 630,
        alt: "Jabadabadoo rodjendaonica Novi Sad – uporedite sa ostalim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uporedite Rodjendaonice u Novom Sadu",
    description: "Uporedite Jabadabadoo sa drugim rodjendaonicama – lokacija, paketi, all-inclusive.",
  },
};

export default function NajboljaRodjendaonicaIndexPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Uporedite Rodjendaonice u Novom Sadu",
    description:
      "Uporedite Jabadabadoo sa drugim rodjendaonicama i igraonicama u Novom Sadu – lokacija, paketi, all-inclusive opcija, roditelji besplatno.",
    url: `${baseUrl}${basePath}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: VS_COMPETITORS.length,
      itemListElement: VS_COMPETITORS.map((c, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "WebPage",
          name: c.title,
          description: c.metaDescription,
          url: `${baseUrl}${basePath}/${c.slug}`,
        },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Uporedite rodjendaonice", item: `${baseUrl}${basePath}` },
    ],
  };

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-text/60">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Početna
                </Link>
              </li>
              <li>/</li>
              <li className="text-text/80">Uporedite rodjendaonice</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text">
            Uporedite Rodjendaonice u Novom Sadu
          </h1>
          <p className="text-xl text-text/80 mb-12 leading-relaxed">
            Razmatrate različite igraonice i rodjendaonice za rođendan vašeg deteta? Uporedite
            Jabadabadoo sa ostalim opcijama u Novom Sadu – lokacija, paketi, all-inclusive opcija,
            da li roditelji plaćaju ulaz. Kliknite na konkurenta za detaljno poređenje.
          </p>

          <ComparisonIndexTopCTAs />

          <ComparisonTable competitors={VS_COMPETITORS} basePath={basePath} />

          <p className="mt-12 text-text/70 text-center">
            Svaka stranica sadrži detaljno poređenje – lokacija, paketi, šta je uključeno, da li
            roditelji plaćaju ulaz, FAQ i naše prednosti.
          </p>

          <ComparisonIndexBottomCTA />
        </div>
      </section>

      <Footer />
      <StickyCall />
      <WhatsAppWidget />
    </div>
  );
}
