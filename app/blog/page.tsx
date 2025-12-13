import { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCall from "@/components/StickyCall";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import BlogCard from "@/components/BlogCard";

const baseUrl = "https://rodjendaonica-novi-sad.com";

export const metadata: Metadata = {
  title: "Blog - Saveti za Organizaciju Rođendana | Jabadabadoo Rođendaonica",
  description: "Korisni saveti i vodiči za organizaciju nezaboravnih rođendana za decu. Saznajte kako pripremiti rođendan, izabrati temu, i napraviti savršenu proslavu.",
  keywords: "blog rodjendan, saveti rodjendan, kako organizovati rodjendan, teme rodjendana, rodjendan za decu",
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
  openGraph: {
    title: "Blog - Saveti za Organizaciju Rođendana | Jabadabadoo Rođendaonica",
    description: "Korisni saveti i vodiči za organizaciju nezaboravnih rođendana za decu.",
    type: "website",
    url: `${baseUrl}/blog`,
    siteName: "Jabadabadoo Rođendaonica",
    images: [
      {
        url: `${baseUrl}/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-og-photo.png`,
        width: 1200,
        height: 630,
        alt: "Jabadabadoo Rođendaonica Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Saveti za Organizaciju Rođendana",
    description: "Korisni saveti i vodiči za organizaciju nezaboravnih rođendana za decu.",
    images: [`${baseUrl}/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-og-photo.png`],
  },
};

export default function BlogPage() {
  // Blog Collection Schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog - Saveti za Organizaciju Rođendana",
    description: "Korisni saveti i vodiči za organizaciju nezaboravnih rođendana za decu",
    url: `${baseUrl}/blog`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: BLOG_POSTS.length,
      itemListElement: BLOG_POSTS.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          url: `${baseUrl}/blog/${post.slug}`,
          datePublished: post.date,
        },
      })),
    },
  };

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8 text-text">
            📝 Blog - Saveti za Rođendane
          </h1>
          <p className="text-center text-xl md:text-2xl mb-16 md:mb-20 text-text/80 max-w-3xl mx-auto">
            Korisni vodiči i saveti za organizaciju nezaboravnih rođendana za decu
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {BLOG_POSTS.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                readTime={post.readTime}
                emoji={post.emoji}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <StickyCall />
      <WhatsAppWidget />
    </div>
  );
}

