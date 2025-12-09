"use client";

import Image from "next/image";
import { trackCTAClick } from "@/lib/analytics";

const ORGANIZATION_FEATURES = [
  {
    icon: "🎭",
    title: "Profesionalni Animatori",
    description: "Stručan tim animatora vodi program tokom cele proslave - organizuju igre, zabavljaju decu i vode brigu o toku rođendana.",
    image: "/images/rodjendan-animatori-novi-sad-rodjendaonica-za-decu-jabadabadoo-animatori-zabava-square.png",
  },
  {
    icon: "🎮",
    title: "Aktivnosti i Igre",
    description: "Raznovrsne aktivnosti i igre prilagođene uzrastu gostiju - od 2 do 10 godina. Timske igre, takmičenja i zabavne aktivnosti.",
    image: "/images/rodjendaonica-rodjendan-za-decu-novi-sad-jabadabadoo-unutrasnji-prostor-igraonica.jpeg",
  },
  {
    icon: "🎂",
    title: "Torte i Dekoracije",
    description: "Torta po vašoj želji i temi rođendana, personalizovana sa imenom slavljenika. Tematske dekoracije koje stvaraju nezaboravnu atmosferu.",
    image: "/images/rodjendaonica-torta-deokracije-rodjendan-novi-sad-jabadabadoo-square.png",
  },
  {
    icon: "🎁",
    title: "Pinjata i Nagrade",
    description: "Tradicionalna pinjata punjena slatkišima i sitnim igračkama. Diplome i medalje za pobednike takmičenja.",
    image: "/images/rodjendaonica-igraonica-cuvaonica-pinjata-animatori-igre-bezbedno-rodjendan-novi-sad-zabava-square.png",
  },
];

export default function HowWeOrganize() {
  return (
    <section id="kako-organizujemo" className="relative py-24 md:py-32 px-6 md:px-8 bg-white overflow-hidden">
      {/* Subtle decorative emojis */}
      <div className="absolute top-10 right-4 md:right-10 text-3xl md:text-4xl opacity-[0.06] pointer-events-none z-0">🎪</div>
      <div className="absolute top-1/2 left-4 md:left-10 text-2xl md:text-3xl opacity-[0.05] pointer-events-none z-0">🎨</div>
      <div className="absolute bottom-1/3 right-1/4 text-2xl md:text-3xl opacity-[0.06] pointer-events-none z-0">🎭</div>
      <div className="absolute bottom-10 left-1/3 text-2xl md:text-3xl opacity-[0.06] pointer-events-none z-0">🎉</div>
      
      <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8 text-text flex items-center justify-center gap-2 md:gap-3">
          <span className="text-2xl md:text-3xl align-middle">🎉</span>
          <span>Kako Organizujemo Rodjendane u Novom Sadu</span>
          <span className="text-2xl md:text-3xl align-middle">🎉</span>
        </h2>
        <p className="text-center text-xl md:text-2xl mb-16 md:mb-20 text-text/80 max-w-3xl mx-auto">
          Sve što vam treba za nezaboravan rođendan vašeg deteta
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-20">
          {ORGANIZATION_FEATURES.map((feature, index) => (
            <div
              key={index}
              className="bg-bg rounded-3xl overflow-hidden shadow-lg border-4 border-secondary hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-72 md:h-96 lg:h-[420px]">
                <Image
                  src={feature.image}
                  alt={`${feature.title} - all-inclusive dečiji rođendani i rodjendani u Novom Sadu, tematski rođendani za decu, Jabadabadoo rođendaonica`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="p-8 md:p-10">
                <div className="text-5xl md:text-6xl mb-6 text-center">{feature.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-primary">
                  {feature.title}
                </h3>
                <p className="text-text/80 text-center leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
                <div className="text-center">
                  <a
                    href="#kontakt"
                    onClick={() => trackCTAClick("Rezerviši Rođendan", "HowWeOrganize")}
                    className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition-all hover:-translate-y-1 shadow-lg"
                  >
                    Rezerviši Rođendan
                  </a>
                </div>
      </div>
    </section>
  );
}

