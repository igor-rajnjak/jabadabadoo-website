"use client";

import Link from "next/link";
import { trackPhoneCall, trackBlogCTAClick, trackBlogNavClick } from "@/lib/analytics";
import { CONTACT } from "@/lib/constants";

interface BlogCTAProps {
  postTitle: string;
}

export default function BlogCTA({ postTitle }: BlogCTAProps) {
  return (
    <div className="mt-16 pt-8 border-t-4 border-secondary">
      <Link
        href="/blog"
        onClick={() => trackBlogNavClick("Nazad na blog", postTitle)}
        className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition-all hover:-translate-y-1 shadow-lg mb-8"
      >
        ← Nazad na blog
      </Link>
      <div className="bg-white p-8 rounded-3xl border-4 border-secondary shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-primary">Rezervišite Rođendan Danas!</h2>
        <p className="text-text mb-6">
          Spremni ste da napravite nezaboravan rođendan za vaše dete? Kontaktirajte nas i rezervišite termin!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:066286555"
            onClick={() => {
              trackPhoneCall(CONTACT.phone, "Blog Post CTA");
              trackBlogCTAClick("Pozovi 066286555", postTitle);
            }}
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition-all text-center"
          >
            📞 Pozovi 066286555
          </a>
          <Link
            href="/#kontakt"
            onClick={() => trackBlogCTAClick("Rezerviši Online", postTitle)}
            className="inline-block bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-500 transition-all text-center"
          >
            📝 Rezerviši Online
          </Link>
        </div>
      </div>
    </div>
  );
}

