"use client";

import { CONTACT } from "@/lib/constants";
import { trackPhoneCall } from "@/lib/analytics";

export default function StickyCall() {
  return (
    <a
      href={`tel:${CONTACT.phoneFormatted}`}
      onClick={() => trackPhoneCall(CONTACT.phone, "StickyCall")}
      className="fixed bottom-6 right-6 z-50 md:hidden bg-primary text-white px-6 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-red-500 transition-all hover:-translate-y-1 flex items-center gap-2"
      aria-label="Pozovi"
    >
      📞 {CONTACT.phone}
    </a>
  );
}

