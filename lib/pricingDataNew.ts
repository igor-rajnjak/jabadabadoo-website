// New pricing data from prototype

export interface PackageFeature {
  text: string;
  tooltip?: string;
  isNew?: boolean;
  isExclusive?: boolean;
}

export interface Package {
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
  standardFeatures?: PackageFeature[];
  additionalFeatures?: PackageFeature[];
  strategyNote: string;
  featureCount?: string;
}

export const PACKAGES_DATA_NEW: Package[] = [
  {
    id: "standard",
    name: "Standard",
    duration: "⏱️ 2 sata | 👶 Do 30 dece",
    subtitle: "Osnovna zabava sa svim potrebnim (ukupno 2h)",
    price: "15.990",
    pricePerChild: "ili ~533 din/dete (za 30 dece)",
    popular: false,
    allIncluded: true,
    standardFeatures: [
      { text: "Aktivni profesionalni animatori", tooltip: "Profesionalni animatori koji vode program tokom cele proslave - organizuju igre, zabavljaju decu i vode brigu o toku rođendana." },
      { text: "Igre prilagođene uzrastu", tooltip: "Raznovrsne aktivnosti i igre prilagođene uzrastu gostiju - od 2 do 10 godina. Uključuje timske igre, takmičenja i zabavne aktivnosti." },
      { text: "Interaktivni zid", tooltip: "Digitalni interaktivni ekran sa igricama i zabavnim sadržajem prilagođenim uzrastu dece." },
      { text: "Maskenbal ILI Crtanje po licu", tooltip: "Birate jednu opciju: Maskenbal sa kostimima i rekvizitima, ili profesionalno šminkanje/crtanje po licu sa sigurnim bojama." },
      { text: "Pinjata sa slatkišima", tooltip: "Tradicionalna pinjata punjena slatkišima. Sva deca učestvuju u razbijanju pinjate." },
      { text: "Svetleće tetovaze", tooltip: "Privremene svetleće tetovaze koje se vide u mraku. Bezopasne, lake za nanošenje i uklanjanje." },
      { text: "Diplome", tooltip: "Diplome za pobednike u igricama i takmičenjima tokom proslave." },
      { text: "Prostor za decu i roditelje", tooltip: "Veliki salon sa kapacitetom do 30 dece i 36 roditelja. Udoban prostor za sedenje i odmor roditelja dok deca uživaju." },
      { text: "Escajg i pribor", tooltip: "Kompletan escajg sa tanjirima, čašama, salvetama i priborom za sve učesnike." },
      { text: "Pozivnice (štampane ili elektronske)", tooltip: "Dizajnirane pozivnice prema temi rođendana. Možete birati između štampanih pozivnica ili elektronskih koje šaljete preko aplikacija." },
      { text: "Neograničeni sokovi", tooltip: "Raznovrsni sokovi dostupni tokom cele proslave za svu decu. Bez ograničenja količine." },
      { text: "Poklon kartica za slavljenika 2h (vrednost: 760 RSD)", tooltip: "Poklon vaučer za slavljenika - 2 sata besplatnog korišćenja igraonice u narednih 30 dana." },
      { text: "Disko žurka uz balončiće", tooltip: "Disko atmosfera sa svetlima, muzikom i balonima. Deca plešu i zabavljaju se uz omiljene pesme." },
    ],
    strategyNote: "💡 Idealno za: Roditelje koji žele kvalitetnu osnovu bez dodatnih troškova.<br><br>✨ 13 usluga uključeno",
  },
  {
    id: "premium",
    name: "Premium",
    duration: "⏱️ 2,5 sata | 👶 Do 30 dece",
    subtitle: "Standard + Grickalice i dodatni sadržaji (ukupno 2.5h)",
    price: "21.990",
    pricePerChild: "ili ~733 din/dete (za 30 dece)",
    popular: false,
    allIncluded: true,
    additionalFeatures: [
      { text: "Maskenbal I Crtanje (oba!)", tooltip: "Dobijate OBE opcije umesto jedne - i maskenbal sa kostimima i profesionalno šminkanje za svu decu.", isNew: true },
      { text: "Medalje", tooltip: "Medalje za pobednike takmičenja i igara. Deca vole da dobiju nagrade!", isNew: true },
      { text: "🥨 Grickalice", tooltip: "Raznovrsne grickalice za decu tokom proslave.", isNew: true },
      { text: "🥂 Deciji sampanjac", tooltip: "Deciji sampanjac za slavljenje rođendana.", isNew: true },
      { text: "Unikatan poklon za slavljenika", tooltip: "Unikatan poklon koji nas čini autentičnim a slavljeniku ostavlja nezaboravne uspomene.", isNew: true },
      { text: "Poklon kartica 4h za slavljenika (vrednost: 1.520 RSD)", tooltip: "Duplo vreme u igraonici - 4 sata besplatnog korišćenja za slavljenika u narednih 30 dana.", isNew: true },
      { text: "➕ 30 minuta dodatne zabave", tooltip: "Proslava traje 2,5 sata umesto 2h - više vremena za igru i zabavu!", isNew: true },
    ],
    strategyNote: "💡 Idealno za: Roditelje koji žele proširenu zabavu. Za 6.000 više dobijate grickalice, sampanjac, obe šminke/maskenbale, medalje i produženo trajanje.<br><br>✨ 20 usluga uključeno",
  },
  {
    id: "all-inclusive",
    name: "All-Inclusive",
    duration: "⏱️ 2,5 sata | 👶 Do 30 dece",
    subtitle: "Kompletna hrana - bez dodatnih troškova! (ukupno 2.5h)",
    price: "33.490",
    pricePerChild: "ili ~1.116 din/dete (za 30 dece)",
    popular: true,
    badge: "NAJPOPULARNIJE ⭐",
    allIncluded: true,
    additionalFeatures: [
      { text: "🍕 Mini pizza", tooltip: "Mini pizze za svu decu. Toplo serviranje tokom proslave - deca dobijaju hranu bez dodatnih troškova.", isNew: true },
      { text: "🧁 Slatki sto (popsi i krofnice)", tooltip: "Bogat slatki sto sa popsima, krofnicama, mafinima ili mix (po dogovoru). Vizuelno atraktivno posluženo na tematskom stolu.", isNew: true },
      { text: "🍰 Torta po izboru", tooltip: "Torta po izboru slavljenika, birate ukus kao i izgled torte. Personalizovana sa imenom slavljenika.", isNew: true },
      { text: "🎨 Premium tematske dekoracije", tooltip: "Premium tematske dekoracije koje stvaraju nezaboravnu atmosferu.", isNew: true },
      { text: "💌 Premium dizajn pozivnica", tooltip: "Premium dizajn pozivnica prema temi rođendana.", isNew: true },
      { text: "🎟️ Poklon kartica 4h za slavljenika (vrednost: 1.520 RSD)", tooltip: "Duplo vreme u igraonici - 4 sata besplatnog korišćenja za slavljenika u narednih 30 dana.", isNew: true },
      { text: "🎁 2x Poklon kartica 1h za poklanjanje drugima (vrednost: 760 RSD)", tooltip: "2 poklon kartice od 1h koje slavljenik može da pokloni drugima.", isNew: true },
      { text: "💰 Ukupna vrednost kartica: 2.280 RSD", tooltip: "Ukupna vrednost svih poklon kartica uključenih u paket.", isNew: true },
    ],
    strategyNote: "🎯 NAJBOLJI IZBOR! Za samo 11.500 više od Premium dobijate KOMPLETNU HRANU - mini pizza, slatki sto i tortu! Plus premium dekoracije i pozivnice. Roditelji ne moraju ništa dodatno da kupuju.<br><br>✨ 28 usluga uključeno<br>🔥 Samo 7 mesta ovaj mesec",
    limited: "⏰ Rezervišite 30+ dana unapred = 5% popusta",
  },
  {
    id: "ultra",
    name: "Ultra All-Inclusive",
    duration: "⏱️ 3 sata | 👶 Do 30 dece",
    subtitle: "Luksuz: Kompletna hrana + Show program (ukupno 3h)",
    price: "45.990",
    pricePerChild: "ili ~1.533 din/dete (za 30 dece)",
    popular: false,
    badge: "ULTRA 💎",
    limited: "🔥 Samo 3 Ultra paketa mesečno",
    allIncluded: true,
    additionalFeatures: [
      { text: "🎭 Mađioničarska predstava ILI Maskota", tooltip: "Profesionalni show program: mađioničarska predstava (30-45min) sa interaktivnim trikovima ILI maskota omiljenog lika (fotografisanje, igre, interakcija).", isExclusive: true },
      { text: "➕ 30 minuta produžene zabave (ukupno 3h)", tooltip: "Proslava traje punih 3 sata - maksimalna zabava za decu, opuštenost za roditelje!", isExclusive: true },
      { text: "🎟️ Poklon kartica 4h za slavljenika (vrednost: 1.520 RSD)", tooltip: "Duplo vreme u igraonici - 4 sata besplatnog korišćenja za slavljenika u narednih 30 dana.", isExclusive: true },
      { text: "🎁 4x Poklon kartica 1h za slavljenika (može da podeli drugima, vrednost: 1.520 RSD)", tooltip: "4 poklon kartice od 1h za slavljenika koje može da podeli drugima.", isExclusive: true },
      { text: "💰 Ukupna vrednost kartica: 3.040 RSD", tooltip: "Ukupna vrednost svih poklon kartica uključenih u paket.", isExclusive: true },
      { text: "🎁 Ekskluzivni premium poklon za slavljenika", tooltip: "Ekskluzivni premium poklon za slavljenika - veći i bolji od standardnog poklona.", isExclusive: true },
    ],
    strategyNote: "💎 LUKSUZNO IZDANJE. Za još 12.500 dobijate ekskluzivni profesionalni show program koji će deca pamtiti! Idealno za posebne proslave.<br><br>✨ 34 usluge uključene<br>🔥 Samo 3 Ultra paketa mesečno",
  },
];

