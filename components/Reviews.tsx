import { REVIEWS, TRUST_SIGNALS } from "@/lib/constants";
import Link from "next/link";

export default function Reviews() {
  return (
    <section id="recenzije" className="relative py-24 md:py-32 px-6 md:px-8 bg-bg overflow-hidden">
      {/* Subtle decorative emojis */}
      <div className="absolute top-20 left-4 md:left-10 text-3xl md:text-4xl opacity-10 pointer-events-none z-0">⭐</div>
      <div className="absolute top-1/4 right-4 md:right-10 text-2xl md:text-3xl opacity-10 pointer-events-none z-0">🎈</div>
      <div className="absolute bottom-1/3 left-1/4 text-2xl md:text-3xl opacity-10 pointer-events-none z-0">🎊</div>
      <div className="absolute bottom-20 right-1/3 text-2xl md:text-3xl opacity-10 pointer-events-none z-0">🎁</div>
      
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
        
        <div className="text-center">
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

