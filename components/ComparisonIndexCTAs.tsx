"use client";

import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import { trackPhoneCall, trackCTAClick } from "@/lib/analytics";

export function ComparisonIndexTopCTAs() {
  return (
    <div className="mb-12 flex flex-col sm:flex-row gap-4">
      <a
        href={`tel:${CONTACT.phoneFormatted}`}
        onClick={() => trackPhoneCall(CONTACT.phone, "Comparison Index Top")}
        className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition-all shadow-lg"
      >
        📞 Pozovi {CONTACT.phone}
      </a>
      <Link
        href="/#cenovnik"
        onClick={() => trackCTAClick("Cenovnik", "Comparison Index Top")}
        className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-500 transition-all shadow-lg"
      >
        💰 Cenovnik
      </Link>
    </div>
  );
}

export function ComparisonIndexBottomCTA() {
  return (
    <div className="mt-16 p-8 rounded-3xl border-4 border-secondary bg-white shadow-xl text-center">
      <h2 className="text-2xl font-bold text-primary mb-4">Rezervišite u Jabadabadoo</h2>
      <p className="text-text/80 mb-6">
        Somborska 17, Novi Sad – 4 paketa od 15.990 RSD, roditelji besplatno, all-inclusive
        opcija.
      </p>
      <a
        href={`tel:${CONTACT.phoneFormatted}`}
        onClick={() => trackPhoneCall(CONTACT.phone, "Comparison Index Bottom")}
        className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition-all"
      >
        📞 Pozovi {CONTACT.phone}
      </a>
    </div>
  );
}
