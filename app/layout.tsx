import type { Metadata } from "next";
import "./globals.css";
import { CONTACT, SEO } from "@/lib/constants";
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
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    type: "website",
    locale: "sr_RS",
    siteName: "Jabadabadoo Rođendaonica",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
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
              gtag('config', 'G-N2557RR5NG');
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
              image: "https://rodjendaonica-novi-sad.com/logo.png",
              "@id": "https://rodjendaonica-novi-sad.com",
              url: "https://rodjendaonica-novi-sad.com",
              telephone: CONTACT.phone,
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
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "10:00",
                closes: "21:00",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.6",
                reviewCount: "134",
              },
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
