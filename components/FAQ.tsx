"use client";

import { useState } from "react";
import { FAQ } from "@/lib/constants";
import { CONTACT } from "@/lib/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 md:py-32 px-6 md:px-8 bg-white overflow-hidden">
      {/* Subtle decorative emojis */}
      <div className="absolute top-10 left-4 md:left-10 text-3xl md:text-4xl opacity-10 pointer-events-none z-0">❓</div>
      <div className="absolute top-1/3 right-4 md:right-10 text-2xl md:text-3xl opacity-10 pointer-events-none z-0">💭</div>
      <div className="absolute bottom-1/4 left-1/4 text-2xl md:text-3xl opacity-10 pointer-events-none z-0">🤔</div>
      <div className="absolute bottom-10 right-1/3 text-2xl md:text-3xl opacity-10 pointer-events-none z-0">💡</div>
      
      <div className="container mx-auto max-w-4xl 2xl:max-w-[1000px] relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8 text-text flex items-center justify-center gap-2 md:gap-3">
          <span className="text-2xl md:text-3xl align-middle">❓</span>
          <span>Često Postavljana Pitanja</span>
          <span className="text-2xl md:text-3xl align-middle">❓</span>
        </h2>
        <p className="text-center text-xl md:text-2xl mb-16 md:mb-20 text-text/80">
          Odgovori na najčešća pitanja o našim rođendanima
        </p>
        
        <div className="space-y-6 md:space-y-8">
          {FAQ.map((item, index) => (
            <div
              key={index}
              className="bg-bg rounded-3xl border-4 border-secondary overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 md:p-8 font-bold text-lg md:text-xl text-primary hover:bg-secondary/10 transition-colors flex justify-between items-center"
              >
                <span className="pr-4">{item.question}</span>
                <span className="text-2xl md:text-3xl flex-shrink-0">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-6 md:p-8 pt-0 text-text/80 animate-fade-in-up leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 md:mt-20">
          <p className="text-lg mb-4 text-text/80">
            Imate dodatna pitanja? Kontaktirajte nas!
          </p>
          <a
            href={`tel:${CONTACT.phoneFormatted}`}
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition-all hover:-translate-y-1 shadow-lg"
          >
            📞 Pozovi {CONTACT.phone} za više informacija
          </a>
        </div>
      </div>
    </section>
  );
}

