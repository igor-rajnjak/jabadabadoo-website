import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { VS_COMPETITORS } from "@/lib/vsCompetitors";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCall from "@/components/StickyCall";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import VsCTA from "@/components/VsCTA";
import ComparisonSlugTopCTAs from "@/components/ComparisonSlugTopCTAs";

const baseUrl = "https://rodjendaonica-novi-sad.com";
const basePath = "/najbolja-rodjendaonica";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return VS_COMPETITORS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const competitor = VS_COMPETITORS.find((c) => c.slug === slug);

  if (!competitor) {
    return { title: "Stranica nije pronađena" };
  }

  const pageUrl = `${baseUrl}${basePath}/${competitor.slug}`;

  return {
    title: `${competitor.title} | Jabadabadoo Rođendaonica`,
    description: competitor.metaDescription,
    keywords: competitor.keywords.join(", "),
    alternates: { canonical: pageUrl },
    openGraph: {
      title: competitor.title,
      description: competitor.metaDescription,
      type: "website",
      url: pageUrl,
      siteName: "Jabadabadoo Rođendaonica",
      images: [
        {
          url: `${baseUrl}/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-og-photo.png`,
          width: 1200,
          height: 630,
          alt: "Jabadabadoo rodjendaonica Novi Sad – all-inclusive dečiji rođendani",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: competitor.title,
      description: competitor.metaDescription,
    },
  };
}

export default async function NajboljaRodjendaonicaPage({ params }: PageProps) {
  const { slug } = await params;
  const competitor = VS_COMPETITORS.find((c) => c.slug === slug);

  if (!competitor) {
    notFound();
  }

  const pageUrl = `${baseUrl}${basePath}/${competitor.slug}`;

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: competitor.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  // Breadcrumb Schema – Početna > Uporedite > [Konkurent]
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Uporedite rodjendaonice", item: `${baseUrl}${basePath}` },
      { "@type": "ListItem", position: 3, name: competitor.title, item: pageUrl },
    ],
  };

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="py-20 md:py-28 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-text/60 flex-wrap">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Početna
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href={basePath} className="hover:text-primary transition-colors">
                  Uporedite rodjendaonice
                </Link>
              </li>
              <li>/</li>
              <li className="text-text/80">{competitor.name} ili Jabadabadoo</li>
            </ol>
          </nav>

          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6 leading-tight">
              {competitor.title}
            </h1>

            {/* Direct answer – 40–60 reči, odmah ispod H1 */}
            <div className="bg-white/80 border-l-4 border-primary p-6 rounded-r-xl shadow-md mb-8">
              <p className="text-lg text-text/90 leading-relaxed">{competitor.directAnswer}</p>
            </div>

            <p className="text-lg text-text/80 leading-relaxed">{competitor.intro}</p>
          </header>

          {/* CTA above the fold */}
          <ComparisonSlugTopCTAs competitorName={competitor.name} />

          {/* Tabela poređenja – Jabadabadoo kolona istaknuta */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
              Poređenje: {competitor.name} i Jabadabadoo
            </h2>
            <div className="overflow-x-auto rounded-2xl border-2 border-secondary shadow-xl">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-pink text-white">
                    <th className="p-4 text-left font-bold">Kriterijum</th>
                    <th className="p-4 text-left font-bold">{competitor.name}</th>
                    <th className="p-4 text-left font-bold bg-secondary/90">Jabadabadoo</th>
                  </tr>
                </thead>
                <tbody>
                  {competitor.comparisonTable.map((row, i) => (
                    <tr
                      key={row.criterion}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="p-4 font-semibold text-text border-b border-gray-200">
                        {row.criterion}
                      </td>
                      <td className="p-4 text-text/80 border-b border-gray-200">
                        {row.competitor}
                      </td>
                      <td className="p-4 text-text font-medium border-b border-gray-200 bg-secondary/10">
                        {row.jabadabadoo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Prednosti Jabadabadoo */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
              Zašto roditelji biraju Jabadabadoo?
            </h2>
            <ul className="space-y-4">
              {competitor.jabadabadooAdvantages.map((adv, i) => (
                <li
                  key={i}
                  className="flex gap-3 items-start p-4 bg-white rounded-xl border-2 border-secondary/30 shadow-sm"
                >
                  <span className="text-2xl flex-shrink-0">✓</span>
                  <span className="text-text/90 text-lg">{adv}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Slike */}
          {competitor.images && competitor.images.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
                Pogledajte Jabadabadoo prostor
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {competitor.images.map((img) => (
                  <div
                    key={img.src}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-secondary shadow-lg bg-gray-100"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
              Česta pitanja
            </h2>
            <div className="space-y-6">
              {competitor.faq.map((item) => (
                <div
                  key={item.question}
                  className="bg-white p-6 rounded-xl border-2 border-secondary/30 shadow-sm"
                >
                  <h3 className="font-bold text-lg text-primary mb-2">{item.question}</h3>
                  <p className="text-text/80 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <VsCTA competitorName={competitor.name} />
        </div>
      </article>

      <Footer />
      <StickyCall />
      <WhatsAppWidget />
    </div>
  );
}
