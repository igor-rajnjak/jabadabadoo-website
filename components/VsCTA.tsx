"use client";

import Link from "next/link";
import { trackPhoneCall, trackCTAClick, trackNavClick } from "@/lib/analytics";
import { CONTACT } from "@/lib/constants";

interface VsCTAProps {
  competitorName: string;
}

export default function VsCTA({ competitorName }: VsCTAProps) {
  return (
    <div className="mt-16 pt-8 border-t-4 border-secondary">
      <div className="bg-white p-8 md:p-10 rounded-3xl border-4 border-secondary shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
          Rezervišite Rođendan u Jabadabadoo
        </h2>
        <p className="text-text text-lg mb-6">
          Spremni ste da napravite nezaboravan rođendan za vaše dete? Kontaktirajte nas i
          rezervišite termin – cenovnik, dostupnost i sve detalje možete proveriti pozivom ili
          putem forme.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
          <a
            href={`tel:${CONTACT.phoneFormatted}`}
            onClick={() => trackPhoneCall(CONTACT.phone, `Vs CTA - ${competitorName}`)}
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition-all text-center"
          >
            📞 Pozovi {CONTACT.phone}
          </a>
          <Link
            href="/najbolja-rodjendaonica"
            onClick={() => trackNavClick("Uporedite ostale rodjendaonice", "/najbolja-rodjendaonica")}
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-secondary text-text px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary/20 transition-all text-center"
          >
            📋 Uporedite ostale rodjendaonice
          </Link>
          <Link
            href="/#cenovnik"
            onClick={() => trackCTAClick("Cenovnik", `Vs CTA - ${competitorName}`)}
            className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-500 transition-all text-center"
          >
            💰 Cenovnik
          </Link>
          <Link
            href="/#kontakt"
            onClick={() => trackCTAClick("Rezerviši Online", `Vs CTA - ${competitorName}`)}
            className="inline-flex items-center justify-center gap-2 bg-accent text-text px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all text-center"
          >
            📝 Rezerviši Online
          </Link>
        </div>
      </div>
    </div>
  );
}
