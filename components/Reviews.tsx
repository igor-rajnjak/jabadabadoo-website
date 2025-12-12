import { REVIEWS, TRUST_SIGNALS, CONTACT } from "@/lib/constants";
import Link from "next/link";

export default function Reviews() {
  return (
    <section id="recenzije" className="relative py-24 md:py-32 px-6 md:px-8 bg-bg overflow-hidden">
      {/* Subtle decorative emojis */}
      <div className="absolute top-20 left-4 md:left-10 text-3xl md:text-4xl opacity-[0.06] pointer-events-none z-0">⭐</div>
      <div className="absolute top-1/4 right-4 md:right-10 text-2xl md:text-3xl opacity-[0.06] pointer-events-none z-0">🎈</div>
      <div className="absolute bottom-1/3 left-1/4 text-2xl md:text-3xl opacity-[0.06] pointer-events-none z-0">🎊</div>
      <div className="absolute bottom-20 right-1/3 text-2xl md:text-3xl opacity-[0.06] pointer-events-none z-0">🎁</div>
      
      <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8 text-text flex items-center justify-center gap-2 md:gap-3">
          <span className="text-2xl md:text-3xl align-middle">⭐</span>
          <span>Recenzije</span>
          <span className="text-2xl md:text-3xl align-middle">⭐</span>
        </h2>
        <div className="text-center mb-16 md:mb-20">
          <p className="text-2xl md:text-3xl font-bold text-primary mb-4">
            {TRUST_SIGNALS.rating}/5 ⭐ | {TRUST_SIGNALS.reviewCount} recenzija
          </p>
          <p className="text-xl text-text/80">Šta kažu zadovoljni roditelji</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-20">
          {REVIEWS.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border-4 border-secondary hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl md:text-2xl">⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-text mb-6 italic leading-relaxed">"{review.text}"</p>
              <p className="font-bold text-primary text-lg mb-2">- {review.name}</p>
              <p className="text-sm text-text/60">Pre {review.monthsAgo} meseci</p>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-6">
          <div>
            <a
              href={CONTACT.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-red-500 font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Pogledajte sve {TRUST_SIGNALS.reviewCount} recenzija na Google Maps</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <Link
            href="#kontakt"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition-all hover:-translate-y-1 shadow-lg"
          >
            Rezerviši Rođendan
          </Link>
        </div>
      </div>
    </section>
  );
}

