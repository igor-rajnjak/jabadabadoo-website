import type { Metadata } from "next";
import "./globals.css";
import { CONTACT, SEO, FAQ, REVIEWS } from "@/lib/constants";
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
        url: "https://rodjendaonica-novi-sad.com/images/rodjendan-animatori-novi-sad-rodjendaonica-za-decu-jabadabadoo-animatori-zabava.jpeg",
        width: 1200,
        height: 630,
        alt: "All-inclusive dečiji rođendani u Novom Sadu - profesionalni animatori i zabava za decu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [
      "https://rodjendaonica-novi-sad.com/images/rodjendan-animatori-novi-sad-rodjendaonica-za-decu-jabadabadoo-animatori-zabava.jpeg",
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
              
              if (isDebugMode) {
                console.log('[GA4] Debug mode enabled');
              }
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
      </head>
      <body className="antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
