"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/lib/constants";
import { trackPhoneCall, trackNavClick, trackLogoClick, trackLinkClick } from "@/lib/analytics";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#zasto-mi", label: "Zašto mi?" },
    { href: "#galerija", label: "Galerija" },
    { href: "#cenovnik", label: "Cenovnik" },
    { href: "#recenzije", label: "Recenzije" },
    { href: "#faq", label: "Pitanja" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary to-pink shadow-lg">
      <nav className="container mx-auto px-6 md:px-8 py-2 md:py-3 flex justify-between items-center max-w-7xl">
        <Link 
          href="/" 
          className="flex items-center gap-2 md:gap-3"
          onClick={() => trackLogoClick()}
        >
          <Image
            src="/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-transparent.png"
            alt="Jabadabadoo Rođendaonica Logo - all-inclusive dečiji rođendani u Novom Sadu, tematski rođendani za decu"
            width={60}
            height={60}
            className="hover:scale-105 transition-transform flex-shrink-0"
            priority
          />
          <span className="text-white text-lg md:text-xl lg:text-2xl font-bold whitespace-nowrap">Jabadabadoo</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-3 lg:gap-4 xl:gap-6 items-center flex-shrink-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => trackNavClick(link.label, link.href)}
              className="text-white hover:text-accent transition-colors font-semibold text-sm lg:text-base whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${CONTACT.phoneFormatted}`}
            onClick={() => trackPhoneCall(CONTACT.phone, "Header")}
            className="bg-accent text-text px-4 lg:px-6 py-1.5 lg:py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors min-w-[100px] lg:min-w-[120px] text-center text-xs lg:text-sm"
          >
            📞 {CONTACT.phone}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none flex-shrink-0"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary/95 pb-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                trackNavClick(link.label, link.href);
                setIsMenuOpen(false);
              }}
              className="block text-white text-base font-semibold py-2.5 px-4 hover:bg-primary/80 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${CONTACT.phoneFormatted}`}
            onClick={() => {
              trackPhoneCall(CONTACT.phone, "Header Mobile");
              setIsMenuOpen(false);
            }}
            className="block bg-accent text-text px-6 py-2.5 mx-4 mt-2 rounded-full font-bold text-center hover:bg-yellow-400 transition-all shadow-md text-sm"
          >
            📞 Pozovi {CONTACT.phone}
          </a>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackLinkClick("WhatsApp", CONTACT.whatsappUrl, "Header Mobile");
              setIsMenuOpen(false);
            }}
            className="block bg-[#25D366] text-white px-6 py-2.5 mx-4 mt-2 rounded-full font-bold text-center hover:bg-[#20BA5A] transition-all shadow-md text-sm flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

