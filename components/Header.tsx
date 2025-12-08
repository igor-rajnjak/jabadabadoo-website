"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/lib/constants";
import { trackPhoneCall, trackNavClick, trackLogoClick } from "@/lib/analytics";

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
        </div>
      )}
    </header>
  );
}

