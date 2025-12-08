"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CONTACT, TRUST_SIGNALS, HERO_IMAGES } from "@/lib/constants";
import { trackCTAClick, trackPhoneCall, trackLinkClick } from "@/lib/analytics";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative bg-gradient-to-r from-primary via-secondary to-accent text-white py-16 md:py-20 xl:py-24 px-6 md:px-8 overflow-hidden">
      {/* Subtle decorative emojis - positioned behind content */}
      <div className="absolute top-10 left-4 md:left-10 text-4xl md:text-6xl opacity-[0.08] pointer-events-none z-0">🎉</div>
      <div className="absolute top-20 right-4 md:right-10 text-3xl md:text-5xl opacity-[0.08] pointer-events-none z-0">🎈</div>
      <div className="absolute bottom-10 left-1/4 text-3xl md:text-4xl opacity-[0.06] pointer-events-none z-0">🎊</div>
      <div className="absolute bottom-20 right-1/4 text-3xl md:text-4xl opacity-[0.06] pointer-events-none z-0">🎁</div>
      <div className="absolute top-1/3 left-1/3 text-2xl md:text-3xl opacity-[0.05] pointer-events-none z-0">🎂</div>
      <div className="absolute top-1/2 right-1/3 text-2xl md:text-3xl opacity-[0.06] pointer-events-none z-0">🎪</div>
      <div className="absolute bottom-1/3 left-1/2 text-2xl md:text-3xl opacity-[0.04] pointer-events-none z-0">🎨</div>
      <div className="absolute top-2/3 right-1/4 text-2xl md:text-3xl opacity-[0.06] pointer-events-none z-0">🎭</div>
      
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
              <a
                href="#kontakt"
                onClick={() => trackCTAClick("Rezerviši Rođendan", "Hero")}
                className="bg-accent text-text px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all hover:-translate-y-1 shadow-lg min-w-[200px] text-center"
              >
                Rezerviši Rođendan
              </a>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${CONTACT.phoneFormatted}`}
                  onClick={() => trackPhoneCall(CONTACT.phone, "Hero")}
                  className="bg-white/20 backdrop-blur-md text-white px-6 py-4 rounded-full font-bold text-lg border-2 border-white hover:bg-white/30 transition-all hover:-translate-y-1 shadow-lg text-center"
                >
                  📞 {CONTACT.phone}
                </a>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLinkClick("WhatsApp", CONTACT.whatsappUrl, "Hero")}
                  className="bg-[#25D366] text-white px-6 py-4 rounded-full font-bold text-lg border-2 border-[#20BA5A] hover:bg-[#20BA5A] transition-all hover:-translate-y-1 shadow-lg text-center inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
            
            {/* Short Urgency Message Below Buttons */}
            <p className="text-sm md:text-base text-white/90 text-center xl:text-left flex items-center justify-center xl:justify-start gap-2">
              <span>⏰</span>
              <span>Vikendi se obično popune 3-4 nedelje ranije</span>
            </p>
          </div>

          {/* Right Side - Hero Carousel (Full-Width Only) */}
          <div className="flex-1 hidden xl:block relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
              {/* Carousel Images */}
              {HERO_IMAGES.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    quality={90}
                    sizes="(max-width: 1280px) 0vw, 50vw"
                  />
                </div>
              ))}
              
              {/* Carousel Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                {HERO_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "w-8 bg-white"
                        : "w-2 bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Prikaži sliku ${index + 1}`}
                  />
                ))}
              </div>

              {/* Logo Watermark - Bottom Right Corner */}
              <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-xl hover:scale-105 transition-transform flex items-center justify-center w-fit z-20">
                <Image
                  src="/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-transparent.png"
                  alt="Jabadabadoo Rođendaonica Logo - all-inclusive dečiji rođendani u Novom Sadu"
                  width={140}
                  height={140}
                  className="drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

