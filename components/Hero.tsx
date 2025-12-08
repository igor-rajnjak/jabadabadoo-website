"use client";

import Link from "next/link";
import Image from "next/image";
import { CONTACT, TRUST_SIGNALS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary via-secondary to-accent text-white py-16 md:py-20 xl:py-24 px-6 md:px-8 overflow-hidden">
      {/* Subtle decorative emojis - positioned behind content */}
      <div className="absolute top-10 left-4 md:left-10 text-4xl md:text-6xl opacity-20 pointer-events-none z-0">🎉</div>
      <div className="absolute top-20 right-4 md:right-10 text-3xl md:text-5xl opacity-20 pointer-events-none z-0">🎈</div>
      <div className="absolute bottom-10 left-1/4 text-3xl md:text-4xl opacity-15 pointer-events-none z-0">🎊</div>
      <div className="absolute bottom-20 right-1/4 text-3xl md:text-4xl opacity-15 pointer-events-none z-0">🎁</div>
      <div className="absolute top-1/3 left-1/3 text-2xl md:text-3xl opacity-8 pointer-events-none z-0">🎂</div>
      <div className="absolute top-1/2 right-1/3 text-2xl md:text-3xl opacity-10 pointer-events-none z-0">🎪</div>
      <div className="absolute bottom-1/3 left-1/2 text-2xl md:text-3xl opacity-5 pointer-events-none z-0">🎨</div>
      <div className="absolute top-2/3 right-1/4 text-2xl md:text-3xl opacity-10 pointer-events-none z-0">🎭</div>
      
      <div className="container mx-auto relative z-10 max-w-7xl 2xl:max-w-[1600px]">
        {/* Split Layout for Full-Width (XL+) */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:gap-12 2xl:gap-16">
          {/* Left Side - Content */}
          <div className="flex-1 text-center xl:text-left mb-12 xl:mb-0">
            {/* Trust Signal - Badge Style */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/90 to-yellow-300/90 backdrop-blur-md px-6 md:px-8 py-3 md:py-4 rounded-full mb-8 md:mb-10 border-4 border-yellow-500 shadow-xl">
              <span className="text-2xl md:text-3xl">⭐</span>
              <span className="font-bold text-base md:text-lg lg:text-xl text-gray-900">
                {TRUST_SIGNALS.rating}/5 | {TRUST_SIGNALS.satisfiedParents} zadovoljnih roditelja
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl 2xl:text-6xl font-bold mb-8 md:mb-10 animate-fade-in-up leading-tight text-shadow-lg">
              All-inclusive Dečiji Rođendani<br className="hidden sm:block" /> u Novom Sadu
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 md:mb-10 max-w-3xl xl:max-w-none mx-auto xl:mx-0 leading-relaxed">
              Već {TRUST_SIGNALS.years}. godinu organizujemo nezaboravne rođendane - preko {TRUST_SIGNALS.satisfiedParents} zadovoljnih roditelja i dece
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center xl:justify-start items-center xl:items-stretch mb-4 md:mb-6">
              <Link
                href="#kontakt"
                className="bg-accent text-text px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all hover:-translate-y-1 shadow-lg min-w-[200px] text-center"
              >
                Rezerviši Rođendan
              </Link>
              <a
                href={`tel:${CONTACT.phoneFormatted}`}
                className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white hover:bg-white/30 transition-all hover:-translate-y-1 shadow-lg min-w-[200px] text-center"
              >
                📞 Pozovi {CONTACT.phone}
              </a>
            </div>
            
            {/* Short Urgency Message Below Buttons */}
            <p className="text-sm md:text-base text-white/90 text-center xl:text-left flex items-center justify-center xl:justify-start gap-2">
              <span>⏰</span>
              <span>Vikendi se obično popune 3-4 nedelje ranije</span>
            </p>
          </div>

          {/* Right Side - Hero Image (Full-Width Only) */}
          <div className="flex-1 hidden xl:block relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/rodjendan-animatori-novi-sad-rodjendaonica-za-decu-jabadabadoo-animatori-zabava.jpeg"
                alt="All-inclusive dečiji rođendani u Novom Sadu - rođendaonica za decu sa animatorima i zabavom"
                fill
                className="object-cover"
                priority
                quality={90}
                sizes="(max-width: 1280px) 0vw, 50vw"
              />
            </div>
            {/* Logo Watermark - Bottom Right Corner */}
            <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-xl hover:scale-105 transition-transform flex items-center justify-center w-fit">
              <Image
                src="/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-transparent.png"
                alt="Jabadabadoo Rođendaonica Logo"
                width={140}
                height={140}
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

