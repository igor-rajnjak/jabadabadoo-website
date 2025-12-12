// Complete pricing data - now using new pricing structure
// Export types and interfaces from new pricing data
export type { PackageFeature, Package } from "./pricingDataNew";

// Export new pricing data as main PACKAGES_DATA
export { PACKAGES_DATA_NEW as PACKAGES_DATA } from "./pricingDataNew";

// Legacy data kept for reference (old pricing structure)
export interface PackageFeatureOld {
  text: string;
  tooltip?: string;
  isNew?: boolean;
  isExclusive?: boolean;
}

export interface PackageOld {
  id: string;
  name: string;
  duration: string;
  subtitle: string;
  price: string;
  pricePerChild: string;
  popular: boolean;
  badge?: string;
  limited?: string;
  allIncluded: boolean;
  standardFeatures: PackageFeatureOld[];
  additionalFeatures?: PackageFeatureOld[];
  strategyNote: string;
}

export const PACKAGES_DATA_OLD: PackageOld[] = [
  {
    id: "standard",
    name: "Standard",
    duration: "⏱️ 2 sata | 👶 Do 30 dece",
    subtitle: "Osnovna zabava sa svim potrebnim",
    price: "15.990",
    pricePerChild: "ili ~533 din/dete (za 30 dece)",
    popular: false,
    allIncluded: true,
    standardFeatures: [
      { text: "Prostor za decu i roditelje", tooltip: "Veliki salon sa kapacitetom do 30 dece i 36 roditelja. Udoban prostor za sedenje i odmor roditelja dok deca uživaju." },
      { text: "Escajg i pribor za posluživanje", tooltip: "Kompletan escajg sa tanjirima, čašama, salvetama i priborom za sve učesnike." },
      { text: "Pozivnice (štampane ili elektronske)", tooltip: "Pozivnice dizajnirane prema temi rođendana. Možete birati između štampanih pozivnica ili elektronskih koje šaljete preko aplikacija." },
      { text: "Interaktivni zid", tooltip: "Projekcija slike na zid sa igricama i zabavnim sadržajem prilagođenim uzrastu dece." },
      { text: "Aktivni profesionalni animatori", tooltip: "Profesionalni animatori koji vode program tokom cele proslave - organizuju igre, zabavljaju decu i vode brigu o toku rođendana." },
      { text: "Igre prilagođene uzrastu", tooltip: "Raznovrsne aktivnosti i igre prilagođene uzrastu gostiju - od 2 do 10 godina. Uključuje timske igre, takmičenja i zabavne aktivnosti." },
      { text: "Maskenbal ILI Crtanje po licu", tooltip: "Birate jednu opciju: Maskenbal sa kostimima i rekvizitima, ili profesionalno šminkanje/crtanje po licu sa sigurnim bojama." },
      { text: "Pinjata sa slatkišima", tooltip: "Tradicionalna pinjata punjena slatkišima. Sva deca učestvuju u razbijanju pinjate." },
      { text: "Svetleće tetovaze", tooltip: "Privremene svetleće tetovaze koje se vide u mraku. Bezopasne, lake za nanošenje i uklanjanje." },
      { text: "Diplome", tooltip: "Diplome za pobednike u igricama i takmičenjima tokom proslave." },
      { text: "Disko žurka uz balončiće", tooltip: "Disko atmosfera sa svetlima, muzikom, balončićima od sapunice (koje pravi mašina) i pravim balonima. Deca plešu i zabavljaju se uz omiljene pesme." },
      { text: "Neograničeni sokovi", tooltip: "Raznovrsni sokovi dostupni tokom cele proslave za svu decu. Bez ograničenja količine." },
      { text: "Poklon kartica za slavljenika 2h", tooltip: "Poklon vaučer za slavljenika - 2 sata besplatnog korišćenja igraonice u narednih 30 dana." },
    ],
    strategyNote: "💡 Idealno za: Roditelje koji žele kvalitetnu osnovu bez dodatnih troškova. Pokriva sve bitne elemente uspešnog rođendana.",
  },
  {
    id: "premium",
    name: "Premium",
    duration: "⏱️ 2,5 sata | 👶 Do 30 dece",
    subtitle: "Standard + Hrana i dodatni sadržaji",
    price: "22.990",
    pricePerChild: "ili ~766 din/dete (za 30 dece)",
    popular: false,
    allIncluded: true,
    standardFeatures: [], // All from Standard
    additionalFeatures: [
      { text: "Maskenbal I Crtanje (oba!)", tooltip: "Dobijate OBE opcije umesto jedne - i maskenbal sa kostimima i profesionalno šminkanje za svu decu.", isNew: true },
      { text: "Medalje", tooltip: "Medalje za pobednike takmičenja i igara. Deca vole da dobiju nagrade!", isNew: true },
      { text: "🍕 Mini pizza", tooltip: "Mini pizze za svu decu. Toplo serviranje tokom proslave - deca dobijaju hranu bez dodatnih troškova.", isNew: true },
      { text: "Unikatan poklon za slavljenika", tooltip: "Unikatan poklon koji nas čini autentičnim a slavljeniku ostavlja nezaboravne uspomene.", isNew: true },
      { text: "Poklon kartica 4h (umesto 2h)", tooltip: "Duplo vreme u igraonici - 4 sata besplatnog korišćenja za slavljenika u narednih 30 dana.", isNew: true },
      { text: "➕ 30 minuta dodatne zabave", tooltip: "Proslava traje 2,5 sata umesto 2h - više vremena za igru i zabavu!", isNew: true },
    ],
    strategyNote: "💡 Idealno za: Roditelje koji žele proširenu zabavu sa hranom. Za 7.000 više dobijate pizzu, obe šminke/maskenbale, medalje i produženo trajanje.",
  },
  {
    id: "all-inclusive",
    name: "All-Inclusive",
    duration: "⏱️ 2,5 sata | 👶 Do 30 dece",
    subtitle: "Kompletna hrana - bez dodatnih troškova!",
    price: "33.990",
    pricePerChild: "ili ~1.133 din/dete (za 30 dece)",
    popular: true,
    badge: "NAJPOPULARNIJE ⭐",
    allIncluded: true,
    standardFeatures: [], // All from Premium
    additionalFeatures: [
      { text: "🧁 Slatki sto (popsi i krofnice)", tooltip: "Bogat slatki sto sa popsima, krofnicama, mafinima ili mix (po dogovoru). Vizuelno atraktivno posluženo na tematskom stolu.", isNew: true },
      { text: "🍰 Torta po izboru", tooltip: "Torta po izboru slavljenika, birate ukus kao i izgled torte. Personalizovana sa imenom slavljenika.", isNew: true },
    ],
    strategyNote: "🎯 NAJBOLJI IZBOR! Za samo 11.000 više od Premium dobijate KOMPLETNU HRANU - pizza, slatki sto i tortu! Roditelji ne moraju ništa dodatno da kupuju.",
  },
  {
    id: "ultra",
    name: "Ultra All-Inclusive",
    duration: "⏱️ 3 sata | 👶 Do 30 dece",
    subtitle: "Luksuz: Kompletna hrana + Show program",
    price: "44.990",
    pricePerChild: "ili ~1.500 din/dete (za 30 dece)",
    popular: false,
    badge: "ULTRA 💎",
    limited: "🔥 Samo 3 Ultra paketa mesečno",
    allIncluded: true,
    standardFeatures: [], // All from All-Inclusive
    additionalFeatures: [
      { text: "🎭 Mađioničarska predstava ILI Maskota", tooltip: "Profesionalni show program: mađioničarska predstava (30-45min) sa interaktivnim trikovima ILI maskota omiljenog lika (fotografisanje, igre, interakcija).", isExclusive: true },
      { text: "➕ 30 minuta produžene zabave", tooltip: "Proslava traje punih 3 sata - maksimalna zabava za decu, opuštenost za roditelje!", isExclusive: true },
    ],
    strategyNote: "💎 LUKSUZNO IZDANJE. Za još 11.000 dobijate ekskluzivni profesionalni show program koji će deca pamtiti! Idealno za posebne proslave.",
  },
];

export interface Addon {
  name: string;
  price: string;
  description: string;
  comingSoon?: boolean;
}

export const ADDONS: Addon[] = [
  {
    name: "🎭 Mađioničar / Maskota",
    price: "10.990",
    description: "Profesionalna show predstava (30-45min) ili maskota omiljenog lika sa interakcijom i fotografisanjem. Uključeno SAMO u Ultra paketu.",
  },
  {
    name: "🍰 Torta po izboru",
    price: "6.990",
    description: "Torta po izboru slavljenika, birate ukus kao i izgled torte. Personalizovana sa imenom slavljenika. Uključeno u All-Inclusive i Ultra paketima.",
  },
  {
    name: "🧁 Slatki sto",
    price: "5.990",
    description: "Bogat slatki sto sa popsima, krofnicama, mafinima ili mix (po dogovoru). Vizuelno atraktivno posluženo na tematskom stolu. Uključeno u All-Inclusive i Ultra paketima.",
  },
  {
    name: "🍕 Mini pizza",
    price: "4.990",
    description: "Mini pizze za svu decu. Toplo serviranje. Uključeno u Premium, All-Inclusive i Ultra paketima.",
  },
  {
    name: "📸 Profesionalni fotograf",
    price: "",
    description: "2 sata fotografisanja, 100+ editovanih fotografija, online galerija. Kontaktirajte nas za rezervaciju i cenu.",
    comingSoon: true,
  },
  {
    name: "🎈 Balon Artist",
    price: "",
    description: "1 sat pravljenja balona - skulpture, kape, mačevi, cveće. Pozovite nas za više informacija i rezervaciju.",
    comingSoon: true,
  },
  {
    name: "⏱️ +30 min",
    price: "2.990",
    description: "Produžite zabavu za dodatnih 30 minuta uz nastavak animacije i korišćenje prostora.",
  },
  {
    name: "🎁 Premium poklon paketi",
    price: "990/dete",
    description: "Tematski paket sa igračkama i slatkišima za svako dete. Minimum 10 dece.",
  },
];

