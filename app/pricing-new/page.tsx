"use client";

import { useState } from "react";
import { PACKAGES_DATA_NEW } from "@/lib/pricingDataNew";
import { ADDONS } from "@/lib/pricingData";
import { CONTACT } from "@/lib/constants";
import PricingComparison from "@/components/PricingComparison";

export default function PricingNewPage() {
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);

  const handleTooltip = (e: React.MouseEvent, text?: string) => {
    if (text) {
      const x = e.clientX;
      const y = e.clientY;
      const windowWidth = window.innerWidth;
      const tooltipWidth = 320; // max-w-xs = 320px
      
      // If tooltip would go off right edge, show on left side
      const left = x + 10 + tooltipWidth > windowWidth ? x - tooltipWidth - 10 : x + 10;
      
      setTooltip({ text, x: left, y });
    } else {
      setTooltip(null);
    }
  };

  return (
    <section id="cenovnik" className="py-24 md:py-32 px-6 md:px-8 bg-gradient-to-b from-bg to-white">
      <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8 text-text flex items-center justify-center gap-2 md:gap-3">
          <span className="text-2xl md:text-3xl align-middle">💰</span>
          <span>Cenovnik Rodjendana u Novom Sadu</span>
          <span className="text-2xl md:text-3xl align-middle">💰</span>
        </h2>
        <p className="text-center text-xl md:text-2xl mb-8 md:mb-10 text-text/80 max-w-3xl mx-auto">
          Izaberite paket koji najbolje odgovara vašim potrebama
        </p>
        <div className="text-center mb-16 md:mb-20 bg-green-100 border-4 border-green-500 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-2 text-green-800">🏆 Preko 100 uspešnih rođendana | 3 godine iskustva</h3>
          <p className="text-green-700">📞 Besplatna konsultacija - pozovite nas za savet koji paket je najbolji za vaše dete!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-16 md:mb-20">
          {PACKAGES_DATA_NEW.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-8 rounded-3xl shadow-lg border-4 ${
                pkg.popular 
                  ? "border-accent bg-gradient-to-br from-white to-accent/5 shadow-xl scale-[1.02]" 
                  : "border-secondary"
              } hover:-translate-y-2 transition-all duration-300 relative flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-text px-3 md:px-4 py-1 md:py-2 rounded-full font-bold text-xs md:text-sm z-10 whitespace-nowrap">
                  ⭐ NAJPOPULARNIJE
                </div>
              )}
              {pkg.badge && !pkg.popular && (
                <div className="absolute -top-4 right-2 md:right-4 bg-yellow-400 text-text px-3 md:px-4 py-1 md:py-2 rounded-full font-bold text-xs md:text-sm transform rotate-12 z-10 shadow-lg whitespace-nowrap">
                  {pkg.badge}
                </div>
              )}
              <div className="text-center mb-4 md:mb-6 pt-3">
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-bold mb-2 text-primary">{pkg.name}</h3>
                <p className="text-text/70 mb-2 text-xs md:text-sm lg:text-base xl:text-base 2xl:text-base">{pkg.duration}</p>
                <p className="text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm italic text-text/60">{pkg.subtitle}</p>
              </div>
              
              <div className={`text-white p-3 md:p-4 lg:p-6 xl:p-6 2xl:p-5 rounded-2xl mb-6 text-center min-h-[120px] md:min-h-[140px] lg:min-h-[160px] xl:min-h-[160px] 2xl:min-h-[150px] flex flex-col justify-center ${
                pkg.popular 
                  ? "bg-gradient-to-br from-accent via-accent/90 to-accent/80 shadow-lg" 
                  : "bg-gradient-to-r from-primary to-pink"
              }`}>
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold mb-1 md:mb-2 break-words leading-tight px-2 overflow-hidden">{pkg.price}</div>
                <div className="text-xs md:text-sm lg:text-base xl:text-base 2xl:text-base mb-1 md:mb-2">dinara</div>
                <div className="text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm opacity-90 break-words px-2 leading-snug">{pkg.pricePerChild}</div>
              </div>
              
              {pkg.allIncluded && (
                <div className="bg-green-100 border-2 border-green-500 text-green-800 p-2 md:p-3 lg:p-4 rounded-xl mb-4 text-center text-xs md:text-sm lg:text-sm font-semibold">
                  ⚠️ Bez dodatnih troškova - sve uključeno u cenu
                </div>
              )}
              
              <div className="mb-4 md:mb-6 flex-grow">
                <h4 className="font-bold text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl mb-3 md:mb-4 text-center text-text">✨ Uključeno u cenu:</h4>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm lg:text-sm xl:text-sm">
                  {pkg.id === "standard" && pkg.standardFeatures?.map((feature, idx) => {
                    const emojiMatch = feature.text.match(/^([^\s]+)\s/);
                    const emoji = emojiMatch ? emojiMatch[1] : "✨";
                    const textWithoutEmoji = emojiMatch ? feature.text.replace(/^[^\s]+\s/, "") : feature.text;
                    
                    return (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-2xl mt-0">{emoji}</span>
                      <span className="text-text/80 flex-1">{textWithoutEmoji}</span>
                      {feature.tooltip && (
                        <button
                          onMouseEnter={(e) => handleTooltip(e, feature.tooltip)}
                          onMouseLeave={() => setTooltip(null)}
                          className="w-5 h-5 bg-white/80 border border-gray-300 text-gray-600 rounded-full text-xs font-normal flex-shrink-0 hover:bg-white hover:border-gray-400 transition-colors"
                          aria-label="Više informacija"
                        >
                          i
                        </button>
                      )}
                    </li>
                    );
                  })}
                  {pkg.id !== "standard" && (
                    <>
                      <li className="bg-gray-100 border-l-4 border-primary text-text font-semibold text-sm py-2 px-3 mb-4 rounded-r">
                        ✨ Sve iz <span className="text-primary">{pkg.id === "premium" ? "Standard" : pkg.id === "all-inclusive" ? "Premium" : "All-Inclusive"}</span> +
                      </li>
                      {(() => {
                        // Find duration extension feature and show it first
                        const durationFeature = pkg.additionalFeatures?.find(f => 
                          f.text.includes("30 minuta") || f.text.includes("produžene zabave")
                        );
                        const otherFeatures = pkg.additionalFeatures?.filter(f => 
                          !f.text.includes("30 minuta") && !f.text.includes("produžene zabave")
                        ) || [];
                        
                        // Get total duration
                        const totalDuration = pkg.id === "premium" ? "2.5h ukupno" : 
                                             pkg.id === "ultra" ? "3h ukupno" : 
                                             pkg.id === "all-inclusive" ? "2.5h ukupno" : "";
                        
                        return (
                          <>
                            {durationFeature && (() => {
                              const emojiMatch = durationFeature.text.match(/^([^\s]+)\s/);
                              const emoji = emojiMatch ? emojiMatch[1] : "➕";
                              const textWithoutEmoji = emojiMatch ? durationFeature.text.replace(/^[^\s]+\s/, "") : durationFeature.text;
                              
                              return (
                              <li className={`flex items-start gap-2 mb-3 ${durationFeature.isNew && pkg.id === "all-inclusive" ? "bg-yellow-50 p-2 rounded" : durationFeature.isNew ? "bg-blue-50 p-2 rounded" : durationFeature.isExclusive ? "" : ""}`}>
                                <span className="text-2xl mt-0">{emoji}</span>
                                <span className={`flex-1 font-semibold ${durationFeature.isExclusive ? "text-red-600" : "text-text/80"}`}>
                                  {textWithoutEmoji} <span className="text-text/60 font-normal">({totalDuration})</span>
                                </span>
                                {durationFeature.tooltip && (
                                  <button
                                    onMouseEnter={(e) => handleTooltip(e, durationFeature.tooltip)}
                                    onMouseLeave={() => setTooltip(null)}
                                    className="w-5 h-5 bg-white/80 border border-gray-300 text-gray-600 rounded-full text-xs font-normal flex-shrink-0 hover:bg-white hover:border-gray-400 transition-colors"
                                    aria-label="Više informacija"
                                  >
                                    i
                                  </button>
                                )}
                              </li>
                              );
                            })()}
                            {otherFeatures.map((feature, idx) => {
                              // Extract emoji from text if it exists
                              const emojiMatch = feature.text.match(/^([^\s]+)\s/);
                              const emoji = emojiMatch ? emojiMatch[1] : "✨";
                              const textWithoutEmoji = emojiMatch ? feature.text.replace(/^[^\s]+\s/, "") : feature.text;
                              
                              return (
                              <li key={idx} className={`flex items-start gap-2 ${feature.isNew && pkg.id === "all-inclusive" ? "bg-yellow-50 p-2 rounded" : feature.isNew ? "bg-blue-50 p-2 rounded" : feature.isExclusive ? "" : ""}`}>
                                <span className="text-2xl mt-0">{emoji}</span>
                                <span className={`flex-1 font-semibold ${feature.isExclusive ? "text-red-600" : "text-text/80"}`}>{textWithoutEmoji}</span>
                                {feature.tooltip && (
                                  <button
                                    onMouseEnter={(e) => handleTooltip(e, feature.tooltip)}
                                    onMouseLeave={() => setTooltip(null)}
                                    className="w-5 h-5 bg-white/80 border border-gray-300 text-gray-600 rounded-full text-xs font-normal flex-shrink-0 hover:bg-white hover:border-gray-400 transition-colors"
                                    aria-label="Više informacija"
                                  >
                                    i
                                  </button>
                                )}
                              </li>
                            );
                            })}
                          </>
                        );
                      })()}
                    </>
                  )}
                </ul>
              </div>
              
              <div className="bg-blue-50 border-2 border-blue-300 p-3 md:p-4 lg:p-5 rounded-xl mb-4 text-xs md:text-sm lg:text-sm">
                <p className="text-text/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: pkg.strategyNote }} />
              </div>
              
              {pkg.limited && (
                <div className="bg-orange-100 border-2 border-orange-400 text-orange-800 px-4 md:px-5 py-2 md:py-3 rounded-lg font-semibold text-xs md:text-sm mb-4 text-center shadow-sm">
                  {pkg.limited}
                </div>
              )}
              
              <a
                href={`tel:${CONTACT.phoneFormatted}`}
                className="block w-full bg-primary text-white text-center py-2.5 md:py-3 lg:py-4 rounded-full font-bold text-sm md:text-base lg:text-base hover:bg-red-500 transition-all hover:-translate-y-1 shadow-lg mt-auto"
              >
                📞 Pozovi {CONTACT.phone}
              </a>
            </div>
          ))}
        </div>
        
        {tooltip && (
          <div
            className="fixed bg-gray-900 text-white p-3 rounded-lg text-sm max-w-xs z-50 pointer-events-none"
            style={{ left: tooltip.x, top: tooltip.y - 10 }}
          >
            {tooltip.text}
          </div>
        )}
        
        <div className="text-center mb-12">
          <a
            href="#kontakt"
            className="inline-block bg-accent text-text px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all hover:-translate-y-1 shadow-lg"
          >
            Rezerviši Rođendan
          </a>
        </div>
        
        <div className="bg-red-100 border-4 border-red-500 rounded-2xl p-6 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-red-800">⏰ Ograničen broj termina - rezervišite na vreme!</h3>
          <p className="text-red-700 mb-2">
            <strong>📅 Kada rezervisati:</strong> Najbolje makar mesec dana ranije, ali što ranije to je veći izgled da će moći da rezervišu
          </p>
          <p className="text-red-700 mb-2">
            ⚠️ <strong>Ne možemo garantovati slobodne termine</strong> - pozovite nas za proveru dostupnosti
          </p>
          <p className="text-red-700 mb-2">🔥 Vikendi se obično popune 3-4 nedelje ranije</p>
          <p className="text-red-700 font-bold text-lg">
            📞 Pozovite nas odmah: <a href={`tel:${CONTACT.phoneFormatted}`} className="underline">{CONTACT.phone}</a>
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-lg border-4 border-secondary p-8 mb-12">
          <h3 className="text-3xl font-bold text-center mb-4 text-primary">🎁 Dodatne Opcije</h3>
          <p className="text-center text-text/80 mb-6">Proširite svoj paket sa dodatnim sadržajima</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ADDONS.map((addon, idx) => (
              <div
                key={idx}
                className={`bg-gray-50 p-4 rounded-2xl border-l-4 border-secondary ${addon.comingSoon ? "opacity-70" : ""}`}
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-text">{addon.name}</h4>
                  {addon.comingSoon ? (
                    <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-bold">Uskoro</span>
                  ) : (
                    <span className="text-primary font-bold text-lg">{addon.price}</span>
                  )}
                </div>
                <p className="text-sm text-text/70">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <PricingComparison />
        
        <div className="bg-white rounded-3xl shadow-lg border-4 border-secondary p-8">
          <h3 className="text-3xl font-bold text-center mb-4 text-primary">💳 Plaćanje i Rezervacija</h3>
          <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-primary max-w-2xl mx-auto">
            <ul className="space-y-3 text-text">
              <li><strong>Depozit za rezervaciju:</strong> 50% od ukupne cene paketa</li>
              <li><strong>Ostatak:</strong> Plaća se po završetku rođendana</li>
              <li><strong>Način plaćanja:</strong> Gotovina, kartica, bankovni transfer</li>
              <li><strong>Rezervacija:</strong> Pozovite nas na <strong>{CONTACT.phone}</strong> za proveru dostupnosti i rezervaciju</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

