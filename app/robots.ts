import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/pricing-new"],
      },
    ],
    sitemap: "https://rodjendaonica-novi-sad.com/sitemap.xml",
  };
}

