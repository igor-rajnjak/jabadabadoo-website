import type { Metadata } from "next";
import "./globals.css";
import { CONTACT, SEO, FAQ, REVIEWS, TRUST_SIGNALS } from "@/lib/constants";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: "Jabadabadoo Rođendaonica" }],
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    type: "website",
    locale: "sr_RS",
    siteName: "Jabadabadoo Rođendaonica",
    images: [
      {
        url: "https://rodjendaonica-novi-sad.com/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-og-photo.png",
        width: 1200,
        height: 630,
        alt: "Jabadabadoo rodjendaonica za decu u Novom Sadu - all-inclusive dečiji rođendani, tematski rođendani, profesionalni animatori",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [
      "https://rodjendaonica-novi-sad.com/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-og-photo.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rodjendaonica-novi-sad.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N2557RR5NG"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // Enable debug mode if ?debug=1 is in URL
              var isDebugMode = false;
              if (typeof window !== 'undefined' && window.location) {
                isDebugMode = window.location.search.includes('debug=1') || window.location.hostname === 'localhost';
              }
              
              gtag('config', 'G-N2557RR5NG', {
                debug_mode: isDebugMode
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Jabadabadoo Rođendaonica",
              alternateName: "Jabadabadoo Rodjendaonica",
              serviceType: "Rođendaonica",
              description: "Organizacija rođendana i rodjendana za decu u Novom Sadu. All-inclusive dečiji rođendani, tematski rođendani, profesionalni animatori.",
              image: "https://rodjendaonica-novi-sad.com/logo.png",
              "@id": "https://rodjendaonica-novi-sad.com",
              url: "https://rodjendaonica-novi-sad.com",
              telephone: CONTACT.phone,
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: CONTACT.phoneFormatted,
                  contactType: "customer service",
                  areaServed: "RS",
                  availableLanguage: ["sr", "sr-RS"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: CONTACT.whatsapp,
                  contactType: "customer service",
                  areaServed: "RS",
                  availableLanguage: ["sr", "sr-RS"],
                  sameAs: CONTACT.whatsappUrl,
                },
              ],
              priceRange: "15.990 - 44.990 RSD",
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
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Monday",
                  opens: "10:00",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Tuesday",
                  opens: "10:00",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Wednesday",
                  opens: "10:00",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Thursday",
                  opens: "10:00",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "10:00",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "10:00",
                  closes: "21:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.6",
                reviewCount: "134",
              },
              sameAs: [
                CONTACT.instagram,
                CONTACT.facebook,
                CONTACT.whatsappUrl,
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Jabadabadoo Rođendaonica",
              review: REVIEWS.map((review) => ({
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: review.name,
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: review.rating,
                  bestRating: 5,
                },
                reviewBody: review.text,
                datePublished: new Date(Date.now() - review.monthsAgo * 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
              })),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Jabadabadoo Rođendaonica",
              alternateName: "Jabadabadoo Rodjendaonica",
              url: "https://rodjendaonica-novi-sad.com",
              logo: "https://rodjendaonica-novi-sad.com/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-transparent.png",
              foundingDate: TRUST_SIGNALS.foundingDate,
              description: `Organizacija rođendana i rodjendana za decu u Novom Sadu. Osnovana ${TRUST_SIGNALS.foundingDateDisplay}. All-inclusive dečiji rođendani, tematski rođendani, profesionalni animatori.`,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Somborska 17",
                addressLocality: "Novi Sad",
                postalCode: "21000",
                addressCountry: "RS",
              },
              sameAs: [
                CONTACT.instagram,
                CONTACT.facebook,
                CONTACT.whatsappUrl,
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Jabadabadoo Rođendaonica",
              url: "https://rodjendaonica-novi-sad.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://rodjendaonica-novi-sad.com/?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Početna",
                  item: "https://rodjendaonica-novi-sad.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Zašto mi?",
                  item: "https://rodjendaonica-novi-sad.com#zasto-mi",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Galerija",
                  item: "https://rodjendaonica-novi-sad.com#galerija",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Cenovnik",
                  item: "https://rodjendaonica-novi-sad.com#cenovnik",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Recenzije",
                  item: "https://rodjendaonica-novi-sad.com#recenzije",
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  name: "FAQ",
                  item: "https://rodjendaonica-novi-sad.com#faq",
                },
                {
                  "@type": "ListItem",
                  position: 7,
                  name: "Kontakt",
                  item: "https://rodjendaonica-novi-sad.com#kontakt",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Usluge Jabadabadoo Rođendaonica",
              description: "Kompletna lista usluga za organizaciju rođendana za decu",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Profesionalni animatori",
                  description: "Aktivni profesionalni animatori koji vode program tokom cele proslave",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Igre prilagođene uzrastu",
                  description: "Raznovrsne aktivnosti i igre prilagođene uzrastu gostiju - od 2 do 10 godina",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Interaktivni zid",
                  description: "Digitalni interaktivni ekran sa igricama i zabavnim sadržajem",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Maskenbal i crtanje po licu",
                  description: "Maskenbal sa kostimima i profesionalno šminkanje/crtanje po licu",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Pinjata sa slatkišima",
                  description: "Tradicionalna pinjata punjena slatkišima",
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  name: "Torte i dekoracije",
                  description: "Torte po izboru i premium tematske dekoracije",
                },
                {
                  "@type": "ListItem",
                  position: 7,
                  name: "Hrana i piće",
                  description: "Mini pizza, slatki sto, neograničeni sokovi",
                },
                {
                  "@type": "ListItem",
                  position: 8,
                  name: "Show program",
                  description: "Mađioničarska predstava ili maskota omiljenog lika",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Organizacija rođendana za decu",
              provider: {
                "@type": "LocalBusiness",
                name: "Jabadabadoo Rođendaonica",
                "@id": "https://rodjendaonica-novi-sad.com",
              },
              areaServed: {
                "@type": "City",
                name: "Novi Sad",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Paketi za rođendane",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Standard paket - Rođendan za decu",
                      description: "Osnovna zabava sa svim potrebnim - 2 sata, do 30 dece",
                    },
                    price: "15990",
                    priceCurrency: "RSD",
                    availability: "https://schema.org/InStock",
                    url: "https://rodjendaonica-novi-sad.com#cenovnik",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Premium paket - Rođendan za decu",
                      description: "Standard + Grickalice i dodatni sadržaji - 2.5 sata, do 30 dece",
                    },
                    price: "21990",
                    priceCurrency: "RSD",
                    availability: "https://schema.org/InStock",
                    url: "https://rodjendaonica-novi-sad.com#cenovnik",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "All-Inclusive paket - Rođendan za decu",
                      description: "Kompletna hrana - bez dodatnih troškova! - 2.5 sata, do 30 dece",
                    },
                    price: "33490",
                    priceCurrency: "RSD",
                    availability: "https://schema.org/InStock",
                    url: "https://rodjendaonica-novi-sad.com#cenovnik",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Ultra All-Inclusive paket - Rođendan za decu",
                      description: "Luksuz: Kompletna hrana + Show program - 3 sata, do 30 dece",
                    },
                    price: "45990",
                    priceCurrency: "RSD",
                    availability: "https://schema.org/InStock",
                    url: "https://rodjendaonica-novi-sad.com#cenovnik",
                  },
                ],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "Kako organizujemo rođendane za decu u Novom Sadu",
              description: "Korak po korak vodič kako organizujemo nezaboravne rođendane za decu",
              step: [
                {
                  "@type": "HowToStep",
                  position: 1,
                  name: "Rezervacija",
                  text: "Pozovite nas na 066286555 za proveru dostupnosti i rezervaciju. Preporučujemo rezervaciju najmanje mesec dana unapred.",
                },
                {
                  "@type": "HowToStep",
                  position: 2,
                  name: "Izbor paketa",
                  text: "Izaberite paket koji najbolje odgovara vašim potrebama - Standard, Premium, All-Inclusive ili Ultra paket.",
                },
                {
                  "@type": "HowToStep",
                  position: 3,
                  name: "Priprema",
                  text: "Naš tim priprema prostor, dekoracije, tortu i sve potrebno prema izabranoj temi rođendana.",
                },
                {
                  "@type": "HowToStep",
                  position: 4,
                  name: "Proslava",
                  text: "Profesionalni animatori vode program sa igrama, aktivnostima, maskenbalom ili crtanjem po licu, pinjatom i zabavom prilagođenom uzrastu dece.",
                },
                {
                  "@type": "HowToStep",
                  position: 5,
                  name: "Završetak",
                  text: "Deca dobijaju diplome, poklone i nezaboravne uspomene. Roditelji dobijaju fotografije i video materijal.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
