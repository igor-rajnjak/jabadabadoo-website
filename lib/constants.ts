// Contact Information
export const CONTACT = {
  phone: "066286555",
  phoneFormatted: "+38166286555",
  whatsapp: "+38166286555",
  whatsappUrl: "https://wa.me/38166286555",
  email: "jabadabadoo.ns@gmail.com",
  address: "Somborska 17, 21000 Novi Sad, Srbija",
  addressDescription: "Nalazimo se između Adice i Telepa, u blizini Minakve i Veternika, na produžetku Bulevara Evrope.",
  workingHours: "Svaki dan 10:00 - 21:00",
  workingHoursNote: "Ne radimo na praznike - pozovite za proveru dostupnosti",
  instagram: "https://www.instagram.com/jabadabadoo_rodjendaonica",
  facebook: "https://www.facebook.com/p/Jabadabadoo-Rođendaonica-100090415525723/",
  youtube: "https://www.youtube.com/@RodjendaonicaJABADABADOO",
  googleMaps: "https://www.google.com/maps/search/Jabadabadoo+Igraonica+i+Rođendaonica+Novi+Sad",
} as const;

// SEO Meta Tags
export const SEO = {
  title: "Rođendaonica Jabadabadoo Novi Sad | Rodjendan za Decu | All-inclusive",
  description: "Igraonica i kafić za porodice u Novom Sadu. All-inclusive rodjendani, tematski rođendani, profesionalni animatori - preko 100 zadovoljnih roditelja. Rezervišite: 066286555",
  keywords: "rođendaonica novi sad, rodjendaonica novi sad, rođendan za decu novi sad, rodjendan za decu novi sad, all-inclusive dečiji rođendani novi sad, all-inclusive deciji rodjendani novi sad, tematski rođendani za decu, tematski rodjendani za decu, organizacija rođendana novi sad, organizacija rodjendana novi sad, animatori rođendaonica novi sad, animatori rodjendaonica novi sad, rođendani za decu 2-10 godina, rodjendani za decu 2-10 godina, čuvaonica novi sad, cuvaonica novi sad, igraonica novi sad, rodjendaonica Bulevar Evrope, igraonica Minakva, igraonica Veternik",
} as const;

// Trust Signals
export const TRUST_SIGNALS = {
  years: "5",
  foundingDate: "2022-09-15",
  foundingDateDisplay: "15. septembra 2022",
  satisfiedParents: "100+",
  rating: "4.6",
  reviewCount: "145",
  ageRange: "2-10 godina",
} as const;

// Pricing Packages (simplified for form dropdown)
export const PACKAGES = [
  {
    id: "standard",
    name: "Standard",
    price: "15.990",
    duration: "2h",
    popular: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: "21.990",
    duration: "2.5h",
    popular: false,
  },
  {
    id: "all-inclusive",
    name: "All-Inclusive",
    price: "33.490",
    duration: "2.5h",
    popular: true,
  },
  {
    id: "ultra",
    name: "Ultra All-Inclusive",
    price: "45.990",
    duration: "3h",
    popular: false,
  },
] as const;

// Features (Why Us)
export const FEATURES = [
  {
    icon: "⭐",
    title: `${TRUST_SIGNALS.satisfiedParents} Zadovoljnih Roditelja`,
    description: "Preko 100 porodica nam je verovalo za nezaboravne rođendane",
  },
  {
    icon: "🎭",
    title: "Profesionalni Animatori",
    description: "Stručan tim animatora posvećen zabavi i deci",
  },
  {
    icon: "🏠",
    title: "Bezbedan i Klimatizovan Prostor",
    description: "Prostran, klimatizovan prostor sa igraonicom i poligonom",
  },
  {
    icon: "🎉",
    title: "Kompletna Organizacija",
    description: "Sve uključeno - animatori, torte, dekoracije, pinjata",
  },
  {
    icon: "📸🎬",
    title: "Fotografije i Video u Paketu",
    description: "U svakom paketu – od osnovnog seta fotki do premium fotografija i snimka. Na kraju proslave sve podelimo sa vama.",
  },
] as const;

// Reviews
export const REVIEWS = [
  {
    name: "Marina Topalović",
    rating: 5,
    text: "Proslavili smo dva rodjendana u Jabadabadoo i sve je bilo fantastično! Animatori su odlični – posvećeni, veseli i konstantno uključeni u igru sa decom. Čak nude i predstave deo rodjendanske proslave, deca su bila oduševljena. Sve preporuke!",
    monthsAgo: 6,
  },
  {
    name: "Jelena Grubac",
    rating: 5,
    text: "Jabadabadoo igraonica u Novom Sadu je visoko preporučena! Usluga je bila fantastična, prostor čist, prijatan i lepo dekorisan. Devojke koje tamo rade su izuzetno ljubazne, uslužne i posvećene deci – odličan posao!",
    monthsAgo: 3,
  },
  {
    name: "Milana Milosevic",
    rating: 5,
    text: "Pre neki dan smo proslavili rodjendan moje ćerke u ovoj igraonici i stvarno sam oduševljena. Nemam ništa osim pohvala za kompletnu organizaciju, posebno animatori i konobari koji su bili veoma ljubazni. Nemam zamerki. Jasna 10 od nas! 😊🎉",
    monthsAgo: 7,
  },
  {
    name: "Natasa Medjesi",
    rating: 5,
    text: "Preporučeno kao mesto za rodjendanske proslave ❤️ Svo osoblje je bilo iskreno, podržavajuće i posvećeno. Moj sin, koji obično ne učestvuje u igrama, je trčao, vikao i uživao više nego ikad. Sva deca su bila iscrpljena i presrećna. Prostor je renoviran, estetski, čist. Jabadabadoo, hvala vam na ovom divnom iskustvu 🥺",
    monthsAgo: 9,
  },
  {
    name: "Tanja Neskovic",
    rating: 5,
    text: "Novi vlasnici su divni, animatori su još divniji, posvećeni i puni igara. Deca su otišla kući presrećna, preumorna i puna utisaka. Svaka preporuka ako želite savršen rodjendan. Hvala vam 🌸🎀",
    monthsAgo: 11,
  },
  {
    name: "Sara Bjedov",
    rating: 5,
    text: "Novi vlasnici, novo osoblje i animatori! Veoma smo zadovoljni uslugom, deca su imala divno vreme na proslavi 🥳🥳🥳🥳🥳 Svaka preporuka!",
    monthsAgo: 11,
  },
] as const;

// FAQ
export const FAQ = [
  {
    question: "Koliko unapred treba rezervisati rođendan?",
    answer: "Najbolje je makar mesec dana ranije, ali što ranije rezervišete, to je veći izgled da će moći da rezervišete željeni termin. Ne možemo garantovati slobodne termine - pozovite nas za proveru dostupnosti. Vikendi se obično popune 3-4 nedelje ranije, pa preporučujemo da rezervišete rodjendan što pre.",
  },
  {
    question: "Koliko dece je minimum za rođendan?",
    answer: "Minimum koliko hoćete - ne plaća se manje ako ima manje dece. Cena je ista bez obzira na broj dece.",
  },
  {
    question: "Mogu li da izaberem temu za rođendan?",
    answer: "Da! Pozovite nas za teme ili pogledajte šta smo radili ranije na Instagramu. Možemo organizovati tematske rođendane prema želji vašeg deteta.",
  },
  {
    question: "Mogu li da donesem sopstvenu tortu?",
    answer: "Da, možete doneti sopstvenu tortu. Međutim, lakše je da preko nas uzmete tortu - mi sve rešimo i ne morate da mislite o tome.",
  },
  {
    question: "Da li roditelji moraju da budu prisutni?",
    answer: "Roditelji mogu biti prisutni, ali nisu obavezni. Imamo prostor za roditelje gde mogu da se opuste dok deca uživaju u proslavi.",
  },
  {
    question: "Imate li kafić?",
    answer: "Da! Imamo kafić za roditelje – dok deca igraju u igraonici, vi možete da popijete kafu, sok ili nešto slatko. Prostor je klimatizovan i udoban za porodice.",
  },
  {
    question: "Šta ako dete ima alergije?",
    answer: "Obavezno nas obavestite o svim alergijama (hrana, boje za crtanje, itd.) kako bismo preduzeli potrebne mere. Možemo prilagoditi meni i aktivnosti prema potrebama vašeg deteta.",
  },
  {
    question: "Šta ako treba da otkažem ili promenim termin?",
    answer: "Može se dogovoriti pomeranje u slučaju bolesti deteta i slično, ali nema vraćanja depozita. Kontaktirajte nas što pre ako treba da promenite termin.",
  },
  {
    question: "Kako funkcioniše plaćanje?",
    answer: "50% od ukupne cene paketa je depozit za rezervaciju, a ostatak se plaća 7 dana pre rodjendana. Plaćanje je moguće gotovinom, karticom ili bankovnim transferom.",
  },
  {
    question: "Mogu li da promenim paket nakon rezervacije?",
    answer: "Da, možete promeniti paket nakon rezervacije. Kontaktirajte nas da razgovaramo o detaljima i prilagodimo rezervaciju vašim potrebama.",
  },
  {
    question: "Da li dobijam fotografije i video?",
    answer: "Da – u svakom paketu je uključeno: Standard = osnovni set fotografija; Premium = premium set fotografija; All-Inclusive = premium fotografije + snimak proslave; Ultra = premium fotografije + premium video. Na kraju proslave sve podelimo sa vama, bez dodatne naplate.",
  },
  {
    question: "Imate li dodatne usluge?",
    answer: "Fotografije i video po paketu su već uključeni u cenu (vidi pitanje „Da li dobijam fotografije i video?“). Pored toga, možemo organizovati dodatne aktivnosti – npr. profesionalni fotograf sa produženom sesijom, balon artist – po dogovoru. Pozovite nas za ponudu.",
  },
  {
    question: "Gde se nalazite?",
    answer: "Naša adresa je Somborska 17, 21000 Novi Sad. Nalazimo se između Adice i Telepa, u blizini Minakve i Veternika, na produžetku Bulevara Evrope. Lako dostupni iz centra grada.",
  },
] as const;

// Gallery Images
export const GALLERY_IMAGES = [
  {
    src: "/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-deciji-rodjendan-03.png",
    alt: "Jabadabadoo rodjendaonica za decu u Novom Sadu - organizacija dečijih rodjendana sa animatorima i tematskim dekoracijama",
  },
  {
    src: "/images/rodjendaonica-igraonica-klimatizovano-animatori-za-decu-bebe-novi-sad-jabadabadoo-animatori.png",
    alt: "Klimatizovana rodjendaonica i igraonica za decu u Novom Sadu - profesionalni animatori i bezbedan prostor za rodjendane",
  },
  {
    src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg",
    alt: "Rodjendan za decu u Novom Sadu - personalizovana torta i tematske dekoracije u rodjendaonici Jabadabadoo",
  },
  {
    src: "/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-deciji-rodjendan-01.png",
    alt: "Tematski rodjendani za decu u Novom Sadu - rodjendaonica Jabadabadoo sa igraonicom i poligonom za organizaciju rođendana",
  },
  {
    src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png",
    alt: "Kafić i prostor za roditelje u rodjendaonici Jabadabadoo Novi Sad - klimatizovana igraonica sa kafićem gde roditelji mogu popiti kafu dok deca igraju",
  },
  {
    src: "/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-deciji-rodjendan-02.png",
    alt: "All-inclusive dečiji rodjendani u Novom Sadu - rodjendaonica Jabadabadoo sa kompletnom organizacijom rođendana za decu",
  },
] as const;

// Hero Carousel Images (for Hero section)
export const HERO_IMAGES = [
  {
    src: "/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-deciji-rodjendan-03.png",
    alt: "Jabadabadoo rodjendaonica za decu u Novom Sadu - organizacija dečijih rodjendana sa animatorima i tematskim dekoracijama",
  },
  {
    src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png",
    alt: "Prostor za roditelje u rodjendaonici Jabadabadoo Novi Sad - klimatizovan i udoban prostor za roditelje tokom dečijih rodjendana",
  },
  {
    src: "/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-deciji-rodjendan-02.png",
    alt: "All-inclusive dečiji rodjendani u Novom Sadu - rodjendaonica Jabadabadoo sa kompletnom organizacijom rođendana za decu",
  },
  {
    src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg",
    alt: "Rodjendan za decu u Novom Sadu - personalizovana torta i tematske dekoracije u rodjendaonici Jabadabadoo",
  },
  {
    src: "/images/rodjendaonica-igraonica-klimatizovano-animatori-za-decu-bebe-novi-sad-jabadabadoo-animatori.png",
    alt: "Klimatizovana rodjendaonica i igraonica za decu u Novom Sadu - profesionalni animatori i bezbedan prostor za rodjendane",
  },
  {
    src: "/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-deciji-rodjendan-01.png",
    alt: "Tematski rodjendani za decu u Novom Sadu - rodjendaonica Jabadabadoo sa igraonicom i poligonom za organizaciju rođendana",
  },
  {
    src: "/images/rodjendaonica-novi-sad-jabadabadoo-spolja.png",
    alt: "Jabadabadoo rodjendaonica u Novom Sadu - spoljašnji izgled rodjendaonice i igraonice za decu, Somborska 17",
  },
] as const;

