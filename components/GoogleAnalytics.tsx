"use client";

import Script from "next/script";

// Google Analytics 4 Measurement ID
// TODO: Replace with your actual GA4 Measurement ID (e.g., G-XXXXXXXXXX)
// Get it from: https://analytics.google.com/ → Admin → Data Streams → Web Stream
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null; // Don't render if no GA ID is provided
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

