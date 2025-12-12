import Link from "next/link";
import { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blogPosts";

export const metadata: Metadata = {
  title: "Blog - Saveti za Organizaciju Rođendana | Jabadabadoo Rođendaonica",
  description: "Korisni saveti i vodiči za organizaciju nezaboravnih rođendana za decu. Saznajte kako pripremiti rođendan, izabrati temu, i napraviti savršenu proslavu.",
  keywords: "blog rodjendan, saveti rodjendan, kako organizovati rodjendan, teme rodjendana, rodjendan za decu",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-bg">
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
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border-4 border-secondary hover:-translate-y-2 transition-all duration-300"
              >
                <div className="p-8 md:p-10">
                  <div className="text-4xl mb-4">{post.emoji}</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                    {post.title}
                  </h2>
                  <p className="text-text/80 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-text/60">
                    <span>{post.readTime} min čitanja</span>
                    <span className="font-bold text-primary">Pročitaj više →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

