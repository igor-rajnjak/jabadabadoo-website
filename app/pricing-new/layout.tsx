import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cenovnik - Jabadabadoo Rođendaonica",
  description: "Cenovnik rođendana u Novom Sadu",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function PricingNewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

