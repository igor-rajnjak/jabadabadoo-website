import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-pink text-white py-16 md:py-20 px-6 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-transparent.png"
                alt="Jabadabadoo Rođendaonica Logo - all-inclusive dečiji rođendani u Novom Sadu, tematski rođendani za decu"
                width={50}
                height={50}
              />
              <span className="text-xl md:text-2xl font-bold">Jabadabadoo</span>
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              Već 3. godinu organizujemo nezaboravne rođendane za decu u Novom Sadu.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg md:text-xl mb-6">Kontakt</h4>
            <ul className="space-y-3 text-white/80 text-lg">
              <li>
                <a href={`tel:${CONTACT.phoneFormatted}`} className="hover:text-accent transition-colors">
                  📞 {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-accent transition-colors">
                  ✉️ {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.address}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg md:text-xl mb-6">Pratite nas</h4>
            <div className="flex gap-6">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                👥
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-10 md:pt-12 text-center text-white/60 text-lg">
          <p>&copy; {new Date().getFullYear()} Jabadabadoo Rođendaonica. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}

