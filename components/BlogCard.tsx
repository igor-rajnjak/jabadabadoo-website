"use client";

import Link from "next/link";
import { trackBlogPostClick } from "@/lib/analytics";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  readTime: number;
  emoji: string;
}

export default function BlogCard({ slug, title, excerpt, readTime, emoji }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      onClick={() => trackBlogPostClick(title, slug)}
      className="bg-white rounded-3xl overflow-hidden shadow-lg border-4 border-secondary hover:-translate-y-2 transition-all duration-300"
    >
      <div className="p-8 md:p-10">
        <div className="text-4xl mb-4">{emoji}</div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
          {title}
        </h2>
        <p className="text-text/80 mb-6 leading-relaxed">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-text/60">
          <span>{readTime} min čitanja</span>
          <span className="font-bold text-primary">Pročitaj više →</span>
        </div>
      </div>
    </Link>
  );
}

