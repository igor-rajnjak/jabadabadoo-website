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
    icon: [
      { url: '/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-transparent.png', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-transparent.png',
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
        {/* Favicon for Google Search Results */}
        <link rel="icon" href="/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-transparent.png" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="shortcut icon" href="/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-transparent.png" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs" />
        {/* Google tag (gtag.js) - GA4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N2557RR5NG"
        />
        {/* Google tag (gtag.js) - Google Ads Conversion */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17632661819"
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
              
              // Google Analytics 4
              gtag('config', 'G-N2557RR5NG', {
                debug_mode: isDebugMode
              });
              
              // Google Ads Conversion Tracking
              gtag('config', 'AW-17632661819');
            `,
          }}
        />
        {/* Microsoft Clarity - Heatmaps (Add your Project ID from clarity.microsoft.com) */}
        {/* 
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "YOUR_CLARITY_PROJECT_ID");
            `,
          }}
        />
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Jabadabadoo Rođendaonica",
              alternateName: "Jabadabadoo Rodjendaonica",
              description: "Organizacija rođendana i rodjendana za decu u Novom Sadu. Somborska 17 – između Adice i Telepa, blizu Minakve, Veternika i Bulevara Evrope. All-inclusive dečiji rođendani, tematski rođendani, profesionalni animatori.",
              image: "https://rodjendaonica-novi-sad.com/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-transparent.png",
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
              priceRange: "15.990 - 45.990 RSD",
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
                reviewCount: TRUST_SIGNALS.reviewCount,
              },
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
              sameAs: [
                CONTACT.instagram,
                CONTACT.facebook,
                CONTACT.youtube,
                CONTACT.googleMaps,
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
                CONTACT.youtube,
                CONTACT.googleMaps,
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
              inLanguage: "sr-RS",
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
              "@type": "WebPage",
              "@id": "https://rodjendaonica-novi-sad.com/#webpage",
              url: "https://rodjendaonica-novi-sad.com",
              name: "Jabadabadoo Rođendaonica - Početna",
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["#faq"],
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
                  name: "Blog",
                  item: "https://rodjendaonica-novi-sad.com/blog",
                },
                {
                  "@type": "ListItem",
                  position: 7,
                  name: "FAQ",
                  item: "https://rodjendaonica-novi-sad.com#faq",
                },
                {
                  "@type": "ListItem",
                  position: 8,
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
                  description: "Projekcija slike na zid sa igricama i zabavnim sadržajem",
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
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Somborska 17",
                  addressLocality: "Novi Sad",
                  postalCode: "21000",
                  addressCountry: "RS",
                },
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
              name: "Kako organizovati nezaboravan rođendan za decu u Novom Sadu",
              description: "Zabavan vodič kako napraviti savršen dečiji rođendan sa profesionalnim animatorima, tematskim dekoracijama, tortom i zabavnim aktivnostima",
              image: "https://rodjendaonica-novi-sad.com/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-deciji-rodjendan-01.png",
              totalTime: "PT2H30M",
              step: [
                {
                  "@type": "HowToStep",
                  position: 1,
                  name: "📞 Rezervišite termin",
                  text: "Pozovite nas na 066286555 za proveru dostupnosti i rezervaciju. Preporučujemo rezervaciju najmanje mesec dana unapred - vikendi se popune brzo!",
                  image: "https://rodjendaonica-novi-sad.com/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-deciji-rodjendan-02.png",
                },
                {
                  "@type": "HowToStep",
                  position: 2,
                  name: "🎁 Izaberite paket",
                  text: "Izaberite paket koji najbolje odgovara vašem detetu - Standard (2h), Premium (2.5h), All-Inclusive (2.5h sa hranom) ili Ultra (3h sa show programom).",
                  image: "https://rodjendaonica-novi-sad.com/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-deciji-rodjendan-03.png",
                },
                {
                  "@type": "HowToStep",
                  position: 3,
                  name: "🎨 Odaberite temu",
                  text: "Izaberite temu rođendana - superheroji, princeze, životinje, ili bilo koju drugu temu koju vaše dete voli. Naš tim priprema dekoracije, tortu i sve potrebno!",
                  image: "https://rodjendaonica-novi-sad.com/images/rodjendaonica-torta-dekoracije-rodjendan-novi-sad-jabadabadoo-square.png",
                },
                {
                  "@type": "HowToStep",
                  position: 4,
                  name: "🎭 Zabava počinje!",
                  text: "Profesionalni animatori vode program sa igrama, maskenbalom ili crtanjem po licu, interaktivnim zidom (projekcija), pinjatom sa slatkišima i disko žurkom uz balončiće od sapunice i prave balone - sve prilagođeno uzrastu dece!",
                  image: "https://rodjendaonica-novi-sad.com/images/rodjendan-animatori-novi-sad-rodjendaonica-za-decu-jabadabadoo-animatori-zabava-square.png",
                },
                {
                  "@type": "HowToStep",
                  position: 5,
                  name: "🎂 Torta i slavljenje",
                  text: "Deca uživaju u torti po izboru, slatkom stolu (popsi, krofnice), mini pizzama i neograničenim sokovima. Sve je uključeno u All-Inclusive paketu!",
                  image: "https://rodjendaonica-novi-sad.com/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg",
                },
                {
                  "@type": "HowToStep",
                  position: 6,
                  name: "🏆 Nagrade i uspomene",
                  text: "Deca dobijaju diplome, medalje, poklon kartice i nezaboravne uspomene. U svakom paketu su uključene fotografije sa proslave (Standard: osnovni set; Premium: premium set; All-Inclusive: premium fotke + snimak; Ultra: premium fotke + premium video). Na kraju proslave sve podelimo sa vama.",
                  image: "https://rodjendaonica-novi-sad.com/images/rodjendaonica-igraonica-cuvaonica-pinjata-animatori-igre-bezbedno-rodjendan-novi-sad-zabava-square.png",
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
              "@type": "ImageGallery",
              name: "Galerija rođendana u Novom Sadu - Jabadabadoo Rođendaonica",
              description: "Fotografije nezaboravnih rođendana za decu sa profesionalnim animatorima, tematskim dekoracijama, tortama i zabavnim aktivnostima",
              url: "https://rodjendaonica-novi-sad.com#galerija",
              image: [
                {
                  "@type": "ImageObject",
                  contentUrl: "https://rodjendaonica-novi-sad.com/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-deciji-rodjendan-03.png",
                  description: "Jabadabadoo rodjendaonica za decu u Novom Sadu - organizacija dečijih rodjendana sa animatorima i tematskim dekoracijama",
                },
                {
                  "@type": "ImageObject",
                  contentUrl: "https://rodjendaonica-novi-sad.com/images/rodjendaonica-igraonica-klimatizovano-animatori-za-decu-bebe-novi-sad-jabadabadoo-animatori.png",
                  description: "Klimatizovana rodjendaonica i igraonica za decu u Novom Sadu - profesionalni animatori i bezbedan prostor za rodjendane",
                },
                {
                  "@type": "ImageObject",
                  contentUrl: "https://rodjendaonica-novi-sad.com/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg",
                  description: "Rodjendan za decu u Novom Sadu - personalizovana torta i tematske dekoracije u rodjendaonici Jabadabadoo",
                },
                {
                  "@type": "ImageObject",
                  contentUrl: "https://rodjendaonica-novi-sad.com/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-deciji-rodjendan-01.png",
                  description: "Tematski rodjendani za decu u Novom Sadu - rodjendaonica Jabadabadoo sa igraonicom i poligonom za organizaciju rođendana",
                },
                {
                  "@type": "ImageObject",
                  contentUrl: "https://rodjendaonica-novi-sad.com/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png",
                  description: "Prostor za roditelje u rodjendaonici Jabadabadoo Novi Sad - udoban prostor za odmor dok deca uživaju u rođendanu",
                },
                {
                  "@type": "ImageObject",
                  contentUrl: "https://rodjendaonica-novi-sad.com/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-deciji-rodjendan-02.png",
                  description: "Dečiji rođendani u Novom Sadu - rodjendaonica Jabadabadoo sa animatorima, igrama i zabavnim aktivnostima",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
