"use client";

import { FEATURES } from "@/lib/constants";
import { CONTACT } from "@/lib/constants";
import { trackCTAClick, trackPhoneCall } from "@/lib/analytics";

export default function WhyUs() {
  return (
    <section id="zasto-mi" className="relative py-24 md:py-32 px-6 md:px-8 bg-bg overflow-hidden">
      {/* Subtle decorative emojis */}
      <div className="absolute top-20 left-4 md:left-10 text-3xl md:text-4xl opacity-[0.06] pointer-events-none z-0">🎈</div>
      <div className="absolute top-1/3 right-4 md:right-10 text-2xl md:text-3xl opacity-[0.06] pointer-events-none z-0">🎊</div>
      <div className="absolute bottom-1/4 left-1/4 text-2xl md:text-3xl opacity-[0.05] pointer-events-none z-0">🎂</div>
      <div className="absolute bottom-20 right-1/3 text-2xl md:text-3xl opacity-[0.06] pointer-events-none z-0">🎁</div>
      
      <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8 text-text flex items-center justify-center gap-2 md:gap-3">
          <span className="text-2xl md:text-3xl align-middle">✨</span>
          <span>Zašto Naša Rođendaonica u Novom Sadu?</span>
          <span className="text-2xl md:text-3xl align-middle">✨</span>
        </h2>
        <p className="text-center text-xl md:text-2xl mb-16 md:mb-20 text-text/80 max-w-3xl mx-auto">
          Već {FEATURES[0].title.split(" ")[0]} porodica nam je verovalo za nezaboravne rođendane
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-16 md:mb-20">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border-4 border-secondary hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl mb-6 text-center hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-primary">
                {feature.title}
              </h3>
              <p className="text-text/80 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#kontakt"
            onClick={() => trackCTAClick("Rezerviši Rođendan", "WhyUs")}
            className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition-all hover:-translate-y-1 shadow-lg text-center"
          >
            Rezerviši Rođendan
          </a>
          <a
            href={`tel:${CONTACT.phoneFormatted}`}
            onClick={() => trackPhoneCall(CONTACT.phone, "WhyUs")}
            className="bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-500 transition-all hover:-translate-y-1 shadow-lg text-center"
          >
            📞 Pozovi {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

