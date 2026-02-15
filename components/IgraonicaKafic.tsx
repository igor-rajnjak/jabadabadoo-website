"use client";

import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";

export default function IgraonicaKafic() {
  return (
    <section id="igraonica-kafic" className="relative py-24 md:py-32 px-6 md:px-8 bg-white overflow-hidden">
      <div className="absolute top-1/4 right-4 md:right-10 text-3xl md:text-4xl opacity-[0.06] pointer-events-none z-0">☕</div>
      <div className="absolute bottom-1/3 left-4 md:left-10 text-2xl md:text-3xl opacity-[0.05] pointer-events-none z-0">🎮</div>

      <div className="container mx-auto max-w-4xl 2xl:max-w-[1000px] relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8 text-text flex items-center justify-center gap-2 md:gap-3">
          <span className="text-2xl md:text-3xl align-middle">🎮</span>
          <span>Igraonica i Kafić u Jednom</span>
          <span className="text-2xl md:text-3xl align-middle">☕</span>
        </h2>
        <p className="text-center text-xl md:text-2xl mb-8 md:mb-10 text-text/80 leading-relaxed">
          Nismo samo rodjendaonica – imamo i igraonicu za decu i kafić za roditelje. Dok se deca igraju u sigurnom i klimatizovanom prostoru, vi možete da popijete kafu, sok ili nešto slatko u našem kafiću. Idealno za porodice koje traže kafić sa igraonicom u Novom Sadu.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/igraonica-i-kafic"
            onClick={() => trackCTAClick("Saznaj više - Igraonica", "IgraonicaKafic")}
            className="inline-block bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-500 transition-all hover:-translate-y-1 shadow-lg text-center"
          >
            Saznaj više o igraonici i kafiću
          </Link>
          <a
            href="#kontakt"
            onClick={() => trackCTAClick("Rezerviši Rođendan", "IgraonicaKafic")}
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition-all hover:-translate-y-1 shadow-lg text-center"
          >
            Rezerviši Rođendan
          </a>
        </div>
      </div>
    </section>
  );
}
