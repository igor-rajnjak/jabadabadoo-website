"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/lib/constants";

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
      <nav className="container mx-auto px-6 md:px-8 py-4 md:py-5 flex justify-between items-center max-w-7xl">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-transparent.png"
            alt="Jabadabadoo Rođendaonica Logo - rođendan za decu novi sad"
            width={70}
            height={70}
            className="hover:scale-105 transition-transform"
            priority
          />
          <span className="text-white text-xl md:text-2xl font-bold">Jabadabadoo</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 lg:gap-6 xl:gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-accent transition-colors font-semibold text-sm lg:text-base whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${CONTACT.phoneFormatted}`}
            className="bg-accent text-text px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors min-w-[120px] text-center"
          >
            📞 {CONTACT.phone}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary/95 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-white text-lg font-semibold py-3 px-4 hover:bg-primary/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${CONTACT.phoneFormatted}`}
            className="block bg-accent text-text px-6 py-3 mx-4 mt-2 rounded-full font-bold text-center hover:bg-yellow-400 transition-all shadow-md"
            onClick={() => setIsMenuOpen(false)}
          >
            📞 Pozovi {CONTACT.phone}
          </a>
        </div>
      )}
    </header>
  );
}

