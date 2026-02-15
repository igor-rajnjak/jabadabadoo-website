"use client";

import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import { trackPhoneCall, trackCTAClick } from "@/lib/analytics";

interface ComparisonSlugTopCTAsProps {
  competitorName: string;
}

export default function ComparisonSlugTopCTAs({ competitorName }: ComparisonSlugTopCTAsProps) {
  return (
    <div className="mb-12 flex flex-col sm:flex-row gap-4">
      <a
        href={`tel:${CONTACT.phoneFormatted}`}
        onClick={() => trackPhoneCall(CONTACT.phone, `Comparison Page - ${competitorName}`)}
        className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition-all shadow-lg"
      >
        📞 Pozovi {CONTACT.phone}
      </a>
      <Link
        href="/#kontakt"
        onClick={() => trackCTAClick("Rezerviši Online", `Comparison Page - ${competitorName}`)}
        className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-500 transition-all shadow-lg"
      >
        📝 Rezerviši Online
      </Link>
    </div>
  );
}
