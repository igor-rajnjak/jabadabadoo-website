"use client";

import { CONTACT } from "@/lib/constants";
import ReservationForm from "./ReservationForm";
import { trackPhoneCall } from "@/lib/analytics";

export default function Contact() {
  return (
    <section id="kontakt" className="relative py-24 md:py-32 px-6 md:px-8 bg-gradient-to-b from-white to-bg overflow-hidden">
      {/* Subtle decorative emojis */}
      <div className="absolute top-20 left-4 md:left-10 text-3xl md:text-4xl opacity-10 pointer-events-none z-0">📞</div>
      <div className="absolute top-1/3 right-4 md:right-10 text-2xl md:text-3xl opacity-10 pointer-events-none z-0">✉️</div>
      <div className="absolute bottom-1/4 left-1/4 text-2xl md:text-3xl opacity-10 pointer-events-none z-0">📍</div>
      <div className="absolute bottom-20 right-1/3 text-2xl md:text-3xl opacity-10 pointer-events-none z-0">📅</div>
      
      <div className="container mx-auto max-w-6xl 2xl:max-w-[1200px] relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8 text-text flex items-center justify-center gap-2 md:gap-3">
          <span className="text-2xl md:text-3xl align-middle">📞</span>
          <span>Kontakt i Rezervacija</span>
          <span className="text-2xl md:text-3xl align-middle">📞</span>
        </h2>
        <p className="text-center text-xl md:text-2xl mb-16 md:mb-20 text-text/80 max-w-3xl mx-auto">
          Rezervišite rođendan ili kontaktirajte nas za više informacija
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-primary">Kontakt Informacije</h3>
            
            <div className="space-y-6 md:space-y-8 mb-10 md:mb-12">
              <div className="bg-white p-8 md:p-10 rounded-3xl border-4 border-secondary shadow-lg">
                <p className="font-bold text-lg md:text-xl mb-3">📞 Telefon</p>
                        <a
                          href={`tel:${CONTACT.phoneFormatted}`}
                          onClick={() => trackPhoneCall(CONTACT.phone, "Contact Section")}
                          className="text-primary text-xl md:text-2xl font-bold hover:underline"
                        >
                          {CONTACT.phone}
                        </a>
                <p className="text-sm md:text-base text-text/60 mt-3">
                  Možete nas pozvati ili pisati na Viber/WhatsApp
                </p>
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-3xl border-4 border-secondary shadow-lg">
                <p className="font-bold text-lg md:text-xl mb-3">✉️ Email</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-primary text-lg md:text-xl font-bold hover:underline"
                >
                  {CONTACT.email}
                </a>
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-3xl border-4 border-secondary shadow-lg">
                <p className="font-bold text-lg md:text-xl mb-3">📍 Adresa</p>
                <p className="text-text text-lg">{CONTACT.address}</p>
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-3xl border-4 border-secondary shadow-lg">
                <p className="font-bold text-lg md:text-xl mb-3">🕐 Radno Vreme</p>
                <p className="text-text text-lg">{CONTACT.workingHours}</p>
                <p className="text-sm md:text-base text-text/60 mt-3">{CONTACT.workingHoursNote}</p>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-3xl border-4 border-secondary shadow-lg">
              <h4 className="font-bold text-lg md:text-xl mb-6">Pronađite nas</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.5!2d19.8335!3d45.2671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b10613de5a3e9%3A0x1b74b4b9b8b8b8b8!2sSomborska%2017%2C%20Novi%20Sad%2021000!5e0!3m2!1sen!2srs!4v1700000000000!5m2!1sen!2srs"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
                title="Jabadabadoo Rođendaonica - Somborska 17, Novi Sad"
              />
              <p className="text-sm text-text/60 mt-4 text-center">
                <a 
                  href={CONTACT.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Otvori u Google Maps →
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-primary">Rezervacija Rođendana</h3>
            <div className="bg-white p-8 md:p-10 rounded-3xl border-4 border-secondary shadow-lg mb-8">
              <ReservationForm />
            </div>
            
            {/* Urgency Banner - Full Details */}
            <div className="bg-red-50 border-4 border-red-400 rounded-2xl p-6 md:p-8">
              <h4 className="text-xl md:text-2xl font-bold mb-4 text-red-800 flex items-center gap-2">
                <span>⏰</span>
                <span>Ograničen broj termina - rezervišite na vreme!</span>
              </h4>
              <div className="space-y-2 text-red-700">
                <p>
                  <strong>📅 Kada rezervisati:</strong> Najbolje makar mesec dana ranije, ali što ranije to je veći izgled da će moći da rezervišu
                </p>
                <p>
                  ⚠️ <strong>Ne možemo garantovati slobodne termine</strong> - pozovite nas za proveru dostupnosti
                </p>
                <p>🔥 Vikendi se obično popune 3-4 nedelje ranije</p>
                <p className="font-bold text-lg mt-4">
                  📞 Pozovite nas odmah: <a href={`tel:${CONTACT.phoneFormatted}`} className="underline">{CONTACT.phone}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

