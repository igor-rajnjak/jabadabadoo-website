/**
 * Konkurentske stranice – poređenje sa Jabadabadoo
 * Format naslova: "[Konkurent] ili Jabadabadoo – šta izabrati za rođendan?"
 */

export interface VsComparisonRow {
  criterion: string;
  competitor: string;
  jabadabadoo: string;
}

export interface VsFAQ {
  question: string;
  answer: string;
}

export interface VsCompetitor {
  slug: string;
  name: string;
  /** Format: "[Name] ili Jabadabadoo – šta izabrati za rođendan?" */
  title: string;
  metaDescription: string;
  keywords: string[];
  /** Direct answer 40–60 reči – odmah ispod H1 */
  directAnswer: string;
  /** Pain-point uvod */
  intro: string;
  /** Tabela poređenja */
  comparisonTable: VsComparisonRow[];
  /** Prednosti Jabadabadoo – 3–5 stavki */
  jabadabadooAdvantages: string[];
  /** FAQ za stranicu */
  faq: VsFAQ[];
  /** Slike Jabadabadoo – putanje */
  images?: {
    src: string;
    alt: string;
  }[];
}

export const VS_COMPETITORS: VsCompetitor[] = [
  {
    slug: "dum-pa-dum-ili-jabadabadoo",
    name: "Dum pa dum",
    title: "Dum pa dum ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Dum pa dum i Jabadabadoo rodjendaonice u Novom Sadu. Lokacija, paketi, all-inclusive opcija, roditelji besplatno – saznajte šta vam najviše odgovara.",
    keywords: [
      "dum pa dum rodjendaonica",
      "dum pa dum vs jabadabadoo",
      "dum pa dum igraonica novi sad",
      "rodjendaonice novi sad poređenje",
      "jabadabadoo dum pa dum",
    ],
    directAnswer:
      "Ako upoređujete Dum pa dum i Jabadabadoo: obe nude rodjendane i igraonicu u Novom Sadu. Dum pa dum je na Veselina Masleše/Dučića; Jabadabadoo je na Somborska 17 u centru. Jabadabadoo je specijalizovana rodjendaonica sa 4 jasna paketa (15.990–45.990 RSD), all-inclusive opcijom i roditeljima besplatno. Za transparentne cene i sve uključeno – Jabadabadoo je često bolji izbor.",
    intro:
      "Tražite rodjendaonicu u Novom Sadu i razmatrate Dum pa dum? Oba objekta nude rodjendane – ali način organizacije i šta je uključeno u cenu može biti različit. Evo kako da uporedite i izaberete ono što najbolje odgovara vašoj porodici.",
    comparisonTable: [
      {
        criterion: "Lokacija",
        competitor: "Veselina Masleše 38 / Bulevar Jovana Dučića",
        jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope",
      },
      {
        criterion: "Fokus",
        competitor: "Igraonica + rodjendani + radionice + boravak dece",
        jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga",
      },
      {
        criterion: "Paketi / cene",
        competitor: "Proveriti na sajtu – nema javnog cenovnika",
        jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu",
      },
      {
        criterion: "Šta je uključeno",
        competitor: "Igraonica, lavirint, tobogan, animatori – detalji proveriti",
        jabadabadoo:
          "Animatori, dekoracije, pinjata, interaktivni zid, maskenbal/crtanje, sokovi, escajg, poklon kartice; torta i hrana u All-Inclusive i Ultra – po paketu",
      },
      {
        criterion: "Hrana",
        competitor: "Proveriti – BYO ili uključeno",
        jabadabadoo: "All-inclusive paket: torta, mini pizza, slatki sto – sve u ceni",
      },
      {
        criterion: "Roditelji",
        competitor: "Kafić za roditelje",
        jabadabadoo: "Ne plaćaju ulaz; kafić za roditelje – besplatno",
      },
      {
        criterion: "Kapacitet",
        competitor: "Proveriti",
        jabadabadoo: "Do 30 dece, 36 roditelja",
      },
    ],
    jabadabadooAdvantages: [
      "Lokacija centar – Somborska 17, blizu Bulevara Evrope; za one iz centra, Jabadabadoo je lako dostupan.",
      "Transparentnost – 4 paketa sa jasnim cenama na sajtu; znate tačno šta plaćate.",
      "All-inclusive – kompletna hrana u paketu; bez skrivenih troškova.",
      "Roditelji besplatno – nema naplate ulaza za odrasle; kafić za roditelje uključen.",
      "Specijalizacija – rodjendani su primarna usluga, sve je prilagođeno organizaciji proslave.",
    ],
    faq: [
      {
        question: "Da li Dum pa dum i Jabadabadoo imaju kafić za roditelje?",
        answer:
          "Oba imaju prostor za roditelje. Jabadabadoo ne naplaćuje ulaz roditeljima – možete sedeti u kafiću dok deca igraju, bez dodatnih troškova.",
      },
      {
        question: "Koja je razlika između Dum pa dum i Jabadabadoo?",
        answer:
          "Dum pa dum je igraonica koja organizuje i rodjendane; Jabadabadoo je specijalizovana rodjendaonica sa 4 jasna paketa i all-inclusive opcijom. Lokacije su različite – Dum pa dum na Masleše/Dučića, Jabadabadoo na Somborska 17 u centru.",
      },
      {
        question: "Da li Jabadabadoo ima all-inclusive paket?",
        answer:
          "Da. All-inclusive paket (33.490 RSD) uključuje tortu, mini pizze, slatki sto, dekoracije – sve u ceni.",
      },
    ],
    images: [
      {
        src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg",
        alt: "Jabadabadoo rodjendaonica Novi Sad – personalizovana torta i tematske dekoracije za dečiji rođendan",
      },
      {
        src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png",
        alt: "Prostor za roditelje u Jabadabadoo – kafić gde roditelji mogu da se opuste dok deca uživaju u rođendanu",
      },
    ],
  },
  {
    slug: "loompa-land-ili-jabadabadoo",
    name: "Loompa Land",
    title: "Loompa Land ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Loompa Land i Jabadabadoo rodjendaonice u Novom Sadu. Sopoćanska vs Somborska 17, transparentni paketi, all-inclusive opcija – saznajte šta vam odgovara.",
    keywords: [
      "loompa land rodjendaonica",
      "loompa land vs jabadabadoo",
      "loompa land igraonica novi sad",
      "igraonica novisad",
      "jabadabadoo loompa land",
    ],
    directAnswer:
      "Loompa Land i Jabadabadoo nude rodjendane u Novom Sadu. Loompa Land je na Sopoćanska 50; Jabadabadoo na Somborska 17 u centru. Jabadabadoo ima 4 jasna paketa (15.990–45.990 RSD), all-inclusive sa kompletnom hranom i roditeljima besplatno. Za transparentnost i sve uključeno – Jabadabadoo je često bolji izbor.",
    intro:
      "Razmatrate Loompa Land za rodjendan vašeg deteta? Oba objekta nude rodjendane i igraonicu – ali šta je tačno uključeno u cenu i gde vam više odgovara? Evo kako da uporedite.",
    comparisonTable: [
      {
        criterion: "Lokacija",
        competitor: "Sopoćanska 50, Novi Sad",
        jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope",
      },
      {
        criterion: "Fokus",
        competitor: "Igraonica (otvoreno + zatvoreno) + rodjendani",
        jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga",
      },
      {
        criterion: "Paketi / cene",
        competitor: "Proveriti na sajtu",
        jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu",
      },
      {
        criterion: "Šta je uključeno",
        competitor: "Kafić za odrasle (45 mesta), klimatizacija, osmišljene igre – detalji proveriti",
        jabadabadoo:
          "Animatori, dekoracije, pinjata, interaktivni zid, maskenbal/crtanje, sokovi, escajg, poklon kartice; torta i hrana u All-Inclusive – po paketu",
      },
      {
        criterion: "Roditelji",
        competitor: "Kafić za odrasle (45 mesta)",
        jabadabadoo: "Ne plaćaju ulaz; kafić za roditelje – besplatno",
      },
      {
        criterion: "Kapacitet",
        competitor: "Proveriti",
        jabadabadoo: "Do 30 dece, 36 roditelja",
      },
    ],
    jabadabadooAdvantages: [
      "4 jasna paketa – od Standard do Ultra – znate tačno šta dobijate.",
      "All-inclusive uključuje kompletnu hranu – torta, mini pizza, slatki sto u ceni.",
      "Transparentan cenovnik na sajtu – bez skrivenih troškova.",
      "Roditelji besplatno – nema naplate ulaza za odrasle.",
      "Lokacija centar – Somborska 17, lako dostupno iz centra grada.",
    ],
    faq: [
      {
        question: "Da li Loompa Land i Jabadabadoo imaju kafić za roditelje?",
        answer:
          "Oba imaju prostor za roditelje. Loompa Land ima kafić sa 45 mesta; Jabadabadoo ne naplaćuje ulaz roditeljima – možete sedeti u kafiću dok deca igraju, besplatno.",
      },
      {
        question: "Koja je razlika između Loompa Land i Jabadabadoo?",
        answer:
          "Loompa Land je igraonica sa rodjendanima na Sopoćanska 50; Jabadabadoo je specijalizovana rodjendaonica na Somborska 17 sa 4 jasna paketa i all-inclusive opcijom. Oba nude rodjendane – Jabadabadoo ima transparentniji cenovnik.",
      },
      {
        question: "Da li Jabadabadoo ima all-inclusive paket?",
        answer:
          "Da. All-inclusive paket (33.490 RSD) uključuje tortu, mini pizze, slatki sto, dekoracije – sve u ceni.",
      },
    ],
    images: [
      {
        src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg",
        alt: "Jabadabadoo rodjendaonica – torta i dekoracije za dečiji rođendan",
      },
      {
        src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png",
        alt: "Prostor za roditelje u Jabadabadoo – kafić besplatno",
      },
    ],
  },
  {
    slug: "cosmoplay-ili-jabadabadoo",
    name: "Cosmoplay",
    title: "Cosmoplay ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Cosmoplay/Cosmoland i Jabadabadoo rodjendaonice u Novom Sadu. TC Big/Spens vs posvećen prostor na Somborska 17 – saznajte šta vam više odgovara.",
    keywords: [
      "cosmoplay rodjendaonica",
      "cosmoland vs jabadabadoo",
      "cosmoplay igraonica novi sad",
      "cosmoland big spens",
      "jabadabadoo cosmoplay",
    ],
    directAnswer:
      "Cosmoplay (Cosmoland) i Jabadabadoo nude rodjendane u Novom Sadu. Cosmoplay je u TC Big ili Spens; Jabadabadoo je posvećen prostor na Somborska 17 – ne u tržnom centru. Jabadabadoo ima 4 jasna paketa, all-inclusive i roditelje besplatno. Za privatnost i fokus na proslavu – Jabadabadoo je često bolji izbor.",
    intro:
      "Razmatrate Cosmoplay ili Cosmoland za rodjendan? Oba objekta nude igraonicu i rodjendane – ali lokacija (TC vs posvećen prostor) i šta je uključeno mogu biti različiti. Evo kako da uporedite.",
    comparisonTable: [
      {
        criterion: "Lokacija",
        competitor: "TC Big (Senandrejski put 11), Spens (Sutjeska 1) – u tržnim centrima",
        jabadabadoo: "Somborska 17 – posvećen prostor, ne u TC",
      },
      {
        criterion: "Fokus",
        competitor: "Igraonica 1–12 god u TC + rodjendani",
        jabadabadoo: "Specijalizovana rodjendaonica – prostor samo za rodjendane",
      },
      {
        criterion: "Prostor",
        competitor: "U tržnom centru – deli sa kupcima/prolaznicima",
        jabadabadoo: "Posvećen prostor – privatnost, fokus na vašu proslavu",
      },
      {
        criterion: "Paketi / cene",
        competitor: "Proveriti na sajtu",
        jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu",
      },
      {
        criterion: "Šta je uključeno",
        competitor: "Lavirint, tobogan, PlayStation, diskoteka – detalji po lokaciji",
        jabadabadoo:
          "Animatori, torta, dekoracije, pinjata, interaktivni zid, maskenbal/crtanje; all-inclusive sa hranom",
      },
      {
        criterion: "Roditelji",
        competitor: "Proveriti",
        jabadabadoo: "Ne plaćaju ulaz; kafić za roditelje – besplatno",
      },
    ],
    jabadabadooAdvantages: [
      "Posvećen prostor – niste u tržnom centru sa prolaznicima; privatnost za proslavu.",
      "Fokus na rodjendane – sve je prilagođeno organizaciji proslave.",
      "4 jasna paketa sa transparentnim cenama – bez skrivenih troškova.",
      "Roditelji besplatno – kafić uključen, nema naplate ulaza.",
      "All-inclusive opcija – torta, mini pizza, slatki sto u ceni.",
    ],
    faq: [
      {
        question: "Da li Cosmoplay i Jabadabadoo imaju iste usluge?",
        answer:
          "Cosmoplay je igraonica u TC Big/Spens koja organizuje i rodjendane; Jabadabadoo je specijalizovana rodjendaonica na Somborska 17 – posvećen prostor samo za rodjendane, bez prolaznika iz tržnog centra.",
      },
      {
        question: "Gde je Jabadabadoo u odnosu na Cosmoplay?",
        answer:
          "Jabadabadoo je na Somborska 17 u centru grada, blizu Bulevara Evrope. Cosmoplay je u TC Big (Senandrejski put) ili Spens (Sutjeska). Za one koji preferiraju prostor van tržnog centra – Jabadabadoo je bolji izbor.",
      },
      {
        question: "Da li Jabadabadoo ima all-inclusive paket?",
        answer:
          "Da. All-inclusive paket (33.490 RSD) uključuje tortu, mini pizze, slatki sto, dekoracije – sve u ceni.",
      },
    ],
    images: [
      {
        src: "/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-deciji-rodjendan-01.png",
        alt: "Jabadabadoo – posvećen prostor za rodjendane, privatnost",
      },
      {
        src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png",
        alt: "Prostor za roditelje u Jabadabadoo",
      },
    ],
  },
  // TIER 1 – Fantazija, Nexusplay, Playroom
  {
    slug: "fantazija-ili-jabadabadoo",
    name: "Fantazija",
    title: "Fantazija ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Fantazija i Jabadabadoo rodjendaonice u Novom Sadu. Petrovaradin vs centar, transparentni paketi od 15.990 RSD – saznajte šta vam odgovara.",
    keywords: [
      "fantazija igraonica",
      "fantazija rodjendaonica",
      "fantazija vs jabadabadoo",
      "fantazija petrovaradin",
      "jabadabadoo fantazija",
    ],
    directAnswer:
      "Ako upoređujete Fantazija i Jabadabadoo: obe nude rodjendane u Novom Sadu. Fantazija je u Petrovaradinu; Jabadabadoo na Somborska 17 u centru. Jabadabadoo ima 4 jasna paketa od 15.990 RSD, all-inclusive opciju i roditelje besplatno. Za roditelje koji traže centar i transparentne cene – Jabadabadoo je često bolji izbor.",
    intro:
      "Tražite rodjendaonicu i razmatrate Fantazija? Oba objekta nude rodjendane – ali lokacija (Petrovaradin vs centar) i šta je uključeno u cenu mogu biti različiti. Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Petrovaradin – proveriti adresu", jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope" },
      { criterion: "Fokus", competitor: "Igraonica + rodjendani – proveriti", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti na sajtu", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "Animatori, dekoracije, pinjata, interaktivni zid, maskenbal/crtanje, sokovi, escajg; torta u All-Inclusive" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić za roditelje – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "Lokacija centar – Somborska 17; za one iz centra, ne morate do Petrovaradina.",
      "4 jasna paketa od 15.990 RSD – transparentan cenovnik na sajtu.",
      "All-inclusive opcija – kompletna hrana u paketu.",
      "Roditelji besplatno – nema naplate ulaza.",
      "Specijalizacija za rodjendane – sve prilagođeno proslavi.",
    ],
    faq: [
      { question: "Gde je Fantazija u odnosu na Jabadabadoo?", answer: "Fantazija je u Petrovaradinu; Jabadabadoo na Somborska 17 u centru Novog Sada, blizu Bulevara Evrope. Za one koji preferiraju centar – Jabadabadoo je lakše dostupan." },
      { question: "Da li Jabadabadoo ima jasne cene?", answer: "Da. 4 paketa sa cenama na sajtu: Standard 15.990, Premium 21.990, All-Inclusive 33.490, Ultra 45.990 RSD." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo rodjendaonica – torta i dekoracije" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje u Jabadabadoo" },
    ],
  },
  {
    slug: "nexusplay-ili-jabadabadoo",
    name: "Nexusplay",
    title: "Nexusplay ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Nexusplay i Jabadabadoo rodjendaonice. Marije Bursać/Futog vs Somborska 17 Novi Sad, transparentni paketi – saznajte šta vam odgovara.",
    keywords: [
      "nexusplay rodjendaonica",
      "nexusplay novi sad",
      "nexusplay vs jabadabadoo",
      "nexusplay marije bursać",
      "jabadabadoo nexusplay",
    ],
    directAnswer:
      "Nexusplay i Jabadabadoo nude rodjendane – Nexusplay u Futogu (Marije Bursać), Jabadabadoo na Somborska 17 u Novom Sadu. Jabadabadoo ima transparentan cenovnik na sajtu sa 4 paketa (15.990–45.990 RSD), all-inclusive opciju i roditelje besplatno. Za one u Novom Sadu – Jabadabadoo je lako dostupan sa jasnim cenama.",
    intro:
      "Razmatrate Nexusplay za rodjendan? Oba objekta nude rodjendane – ali lokacija (Futog vs Novi Sad centar) i dostupnost informacija mogu biti različiti. Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Marije Bursać, Futog (blizu Novog Sada)", jabadabadoo: "Somborska 17, Novi Sad – centar" },
      { criterion: "Fokus", competitor: "Proveriti – rodjendani", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti – ograničene javne informacije", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "Animatori, dekoracije, pinjata, interaktivni zid, maskenbal/crtanje, sokovi, escajg; torta u All-Inclusive" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić za roditelje – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "Transparentni paketi i cenovnik na sajtu – lako planirate bez obzira na lokaciju.",
      "Lokacija Novi Sad centar – Somborska 17, ne morate do Futoga.",
      "4 jasna paketa – znate tačno šta plaćate.",
      "All-inclusive opcija – kompletna hrana u ceni.",
      "Roditelji besplatno – nema skrivenih troškova.",
    ],
    faq: [
      { question: "Gde je Nexusplay u odnosu na Jabadabadoo?", answer: "Nexusplay je u Futogu (Marije Bursać); Jabadabadoo na Somborska 17 u centru Novog Sada. Za stanovníke Novog Sada – Jabadabadoo je obično bliže." },
      { question: "Da li Jabadabadoo ima cenovnik na sajtu?", answer: "Da. Kompletni cenovnik sa 4 paketa i svim uslugama dostupan je na sajtu." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo rodjendaonica" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  {
    slug: "playroom-ili-jabadabadoo",
    name: "Playroom",
    title: "Playroom ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Playroom Rumenacka i Jabadabadoo rodjendaonice u Novom Sadu. Rumenka vs centar Somborska 17, transparentni paketi – saznajte šta vam odgovara.",
    keywords: [
      "playroom rodjendaonica",
      "playroom rumenacka",
      "playroom vs jabadabadoo",
      "playroom novi sad",
      "jabadabadoo playroom",
    ],
    directAnswer:
      "Playroom i Jabadabadoo nude rodjendane u Novom Sadu. Playroom je u Rumenci; Jabadabadoo na Somborska 17 u centru. Jabadabadoo ima kompletan cenovnik na sajtu – 4 paketa (15.990–45.990 RSD), all-inclusive i roditelje besplatno. Za centar i transparentnost – Jabadabadoo je često bolji izbor.",
    intro:
      "Tražite rodjendaonicu i razmatrate Playroom? Oba objekta nude rodjendane – ali lokacija (Rumenka vs centar) i dostupnost informacija mogu biti različiti. Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Rumenacka/Rumenka – proveriti adresu", jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope" },
      { criterion: "Fokus", competitor: "Igraonica + rodjendani – proveriti", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti na sajtu", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "Animatori, dekoracije, pinjata, interaktivni zid, maskenbal/crtanje, sokovi, escajg; torta u All-Inclusive" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić za roditelje – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "Somborska 17 – lako dostupno iz centra, ne morate do Rumenke.",
      "Kompletan cenovnik i paketi na sajtu – znate tačno šta plaćate.",
      "All-inclusive opcija – torta, mini pizza, slatki sto u ceni.",
      "Roditelji besplatno – nema skrivenih troškova.",
      "Specijalizacija za rodjendane – sve prilagođeno proslavi.",
    ],
    faq: [
      { question: "Gde je Playroom u odnosu na Jabadabadoo?", answer: "Playroom je u Rumenci (Rumenacka); Jabadabadoo na Somborska 17 u centru Novog Sada. Za one koji preferiraju centar – Jabadabadoo je lakše dostupan." },
      { question: "Da li Jabadabadoo ima sve informacije na sajtu?", answer: "Da. Cenovnik, paketi, usluge, kontakt – sve je dostupno na sajtu." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo rodjendaonica" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  // TIER 2 – Starli, Bambino, Dva zamka, Sky club, Hakuna matata, Zmajko
  {
    slug: "starli-ili-jabadabadoo",
    name: "Starli",
    title: "Starli ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Zabavni park Starli i Jabadabadoo rodjendaonice. Novo Naselje vs centar Somborska 17, transparentni paketi – saznajte šta vam odgovara.",
    keywords: [
      "starli rodjendaonica",
      "starli novi sad",
      "starli vs jabadabadoo",
      "zabavni park starli",
      "jabadabadoo starli",
    ],
    directAnswer:
      "Starli i Jabadabadoo nude rodjendane u Novom Sadu. Starli je u Novo Naselju (Bulevar Vojvode Stepe 56); Jabadabadoo na Somborska 17 u centru. Jabadabadoo ima 4 jasna paketa, all-inclusive i roditelje besplatno. Za one koji žive ili dolaze iz centra – Jabadabadoo je bliže i ne morate do Novo Naselja.",
    intro:
      "Razmatrate Starli za rodjendan? Zabavni park Starli i Jabadabadoo nude rodjendane – ali lokacija (Novo Naselje vs centar) i šta je uključeno mogu biti različiti. Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Bulevar Vojvode Stepe 56, Novo Naselje", jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope" },
      { criterion: "Fokus", competitor: "Zabavni park (2.500 m²) + igraonica + rodjendaonica", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "2h – termini na sajtu, cene proveriti", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Lavirint, tobogani, bazeni, kreativni programi – detalji na starli.rs", jabadabadoo: "Animatori, dekoracije, pinjata, interaktivni zid, maskenbal/crtanje, sokovi; torta u All-Inclusive" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić za roditelje – besplatno" },
      { criterion: "Kapacitet", competitor: "Veliki prostor (1.000 m² zatvoreno + 1.500 m² otvoreno)", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "Za one u centru – Jabadabadoo na Somborska 17, ne morate do Novo Naselja.",
      "4 jasna paketa sa transparentnim cenama – znate tačno šta plaćate.",
      "All-inclusive opcija – kompletna hrana u ceni.",
      "Roditelji besplatno – nema naplate ulaza.",
      "Posvećen prostor samo za rodjendane – fokus na vašu proslavu.",
    ],
    faq: [
      { question: "Gde je Starli u odnosu na Jabadabadoo?", answer: "Starli je u Novo Naselju (Bulevar Vojvode Stepe 56); Jabadabadoo na Somborska 17 u centru. Za one koji preferiraju centar – Jabadabadoo je bliže." },
      { question: "Da li Jabadabadoo ima all-inclusive?", answer: "Da. All-inclusive paket (33.490 RSD) uključuje tortu, mini pizze, slatki sto – sve u ceni." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo rodjendaonica" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  {
    slug: "bambino-ili-jabadabadoo",
    name: "Bambino",
    title: "Bambino ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Bambino igraonicu i Jabadabadoo rodjendaonicu u Novom Sadu. Cankareva vs Somborska 17, transparentni paketi – saznajte šta vam odgovara.",
    keywords: [
      "bambino igraonica",
      "bambino rodjendaonica",
      "bambino vs jabadabadoo",
      "bambino cankareva novi sad",
      "jabadabadoo bambino",
    ],
    directAnswer:
      "Bambino i Jabadabadoo nude rodjendane u Novom Sadu. Bambino je na Cankareva; Jabadabadoo na Somborska 17 u centru. Jabadabadoo ima transparentan cenovnik sa 4 paketa (15.990–45.990 RSD), all-inclusive opciju i roditelje besplatno. Za transparentnost i fokus na rodjendane – Jabadabadoo je često bolji izbor.",
    intro:
      "Tražite rodjendaonicu i razmatrate Bambino? Oba objekta nude rodjendane – ali šta je tačno uključeno u cenu i gde vam više odgovara? Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Cankareva, Novi Sad – proveriti", jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope" },
      { criterion: "Fokus", competitor: "Igraonica + rodjendani – proveriti", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti na sajtu", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "Animatori, dekoracije, pinjata, interaktivni zid, maskenbal/crtanje, sokovi, escajg; torta u All-Inclusive" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić za roditelje – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "Transparentan cenovnik i 4 paketa – bez skrivenih troškova.",
      "Fokus na organizaciju rodjendana – sve prilagođeno proslavi.",
      "All-inclusive opcija – torta, mini pizza, slatki sto u ceni.",
      "Roditelji besplatno – nema naplate ulaza.",
      "Lokacija centar – Somborska 17, lako dostupno.",
    ],
    faq: [
      { question: "Da li Bambino i Jabadabadoo imaju slične usluge?", answer: "Oba nude rodjendane. Jabadabadoo je specijalizovana rodjendaonica sa 4 jasna paketa i cenovnikom na sajtu. Detalje za Bambino preporučujemo da proverite direktno." },
      { question: "Da li Jabadabadoo ima all-inclusive?", answer: "Da. All-inclusive paket (33.490 RSD) uključuje kompletnu hranu – torta, mini pizze, slatki sto." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo rodjendaonica" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  {
    slug: "dva-zamka-ili-jabadabadoo",
    name: "Dva zamka",
    title: "Dva zamka ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Dva zamka i Jabadabadoo rodjendaonice u Novom Sadu. All-inclusive paketi sa kompletnom hranom – saznajte šta vam odgovara.",
    keywords: [
      "dva zamka rodjendaonica",
      "dva zamka novi sad",
      "dva zamka vs jabadabadoo",
      "jabadabadoo dva zamka",
    ],
    directAnswer:
      "Dva zamka i Jabadabadoo nude rodjendane u Novom Sadu. Jabadabadoo ima all-inclusive pakete sa kompletnom hranom – torta, pizza, slatki sto uključeni – na Somborska 17 u centru. 4 jasna paketa (15.990–45.990 RSD), roditelji besplatno. Za transparentnost i sve uključeno – Jabadabadoo je često bolji izbor.",
    intro:
      "Razmatrate Dva zamka za rodjendan? Oba objekta nude igraonicu i rodjendane – ali šta je tačno uključeno u cenu? Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Novi Sad – proveriti adresu", jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope" },
      { criterion: "Fokus", competitor: "Igraonica + rodjendaonica – proveriti", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti na sajtu", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "All-inclusive: torta, mini pizza, slatki sto, animatori, dekoracije, pinjata – sve u ceni" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić za roditelje – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "All-inclusive paketi sa kompletnom hranom – torta, pizza, slatki sto uključeni.",
      "Lokacija centar – Somborska 17, lako dostupno.",
      "4 jasna paketa sa transparentnim cenama – znate šta plaćate.",
      "Roditelji besplatno – nema skrivenih troškova.",
      "Specijalizacija za rodjendane – sve prilagođeno proslavi.",
    ],
    faq: [
      { question: "Da li Jabadabadoo ima all-inclusive paket?", answer: "Da. All-inclusive paket (33.490 RSD) uključuje tortu, mini pizze, slatki sto, dekoracije – sve u ceni." },
      { question: "Gde je Jabadabadoo?", answer: "Somborska 17 u centru Novog Sada, blizu Bulevara Evrope." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo – all-inclusive torta i dekoracije" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  {
    slug: "sky-club-ili-jabadabadoo",
    name: "Sky club",
    title: "Sky club ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite SkyClub i Jabadabadoo rodjendaonice. SkyClub je gaming centar 9+; Jabadabadoo za decu 2–10 god – saznajte šta vam odgovara.",
    keywords: [
      "sky club rodjendaonica",
      "skyclub novi sad",
      "sky club vs jabadabadoo",
      "rodjendaonica za tinejdžere",
      "jabadabadoo sky club",
    ],
    directAnswer:
      "SkyClub i Jabadabadoo nude rodjendane – ali za različite uzraste. SkyClub je gaming centar za decu 9+ (PC, konzole, bilijar); Jabadabadoo je klasična rodjendaonica za decu 2–10 god sa animatorima, igrama i tortom. Ako tražite rodjendan za mlađu decu – Jabadabadoo je bolji izbor.",
    intro:
      "Razmatrate SkyClub za rodjendan? SkyClub je gaming centar za stariju decu; Jabadabadoo je klasična rodjendaonica za predškolarce i mlađe školare. Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Uzrast", competitor: "Deca 9+ godina – gaming, konzole", jabadabadoo: "Deca 2–10 godina – klasična rodjendaonica" },
      { criterion: "Lokacija", competitor: "Bulevar Patrijarha Pavla 121", jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope" },
      { criterion: "Tip", competitor: "Gaming centar – PC, PlayStation, bilijar, karaoke", jabadabadoo: "Rodjendaonica – animatori, igre, torta, pinjata, maskenbal" },
      { criterion: "Paketi / cene", competitor: "Proveriti na sajtu", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Gaming, 3D animacije, kviz – detalji proveriti", jabadabadoo: "Animatori, torta, dekoracije, pinjata, interaktivni zid, maskenbal/crtanje; all-inclusive sa hranom" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić za roditelje – besplatno" },
    ],
    jabadabadooAdvantages: [
      "Ako tražite klasičnu rodjendaonicu za mlađu decu (2–10 god) – Jabadabadoo je specijalizovan za taj uzrast.",
      "Animatori, igre, torta, pinjata – tradicionalna dečija rođendanska zabava.",
      "4 jasna paketa sa transparentnim cenama.",
      "All-inclusive opcija – kompletna hrana u ceni.",
      "Roditelji besplatno – kafić uključen.",
    ],
    faq: [
      { question: "Za koji uzrast je SkyClub, a za koji Jabadabadoo?", answer: "SkyClub je gaming centar za decu 9+ godina (konzole, PC). Jabadabadoo je rodjendaonica za decu 2–10 godina – animatori, igre, torta, pinjata." },
      { question: "Da li Jabadabadoo ima gaming?", answer: "Jabadabadoo nudi klasičnu rodjendansku zabavu – animatori, interaktivni zid (projekcija), maskenbal, crtanje po licu, pinjata. Za gaming – SkyClub je bolji izbor za stariju decu." },
    ],
    images: [
      { src: "/images/rodjendaonica-igraonica-klimatizovano-animatori-za-decu-bebe-novi-sad-jabadabadoo-animatori.png", alt: "Jabadabadoo – animatori i igre za mlađu decu" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  {
    slug: "hakuna-matata-ili-jabadabadoo",
    name: "Hakuna matata",
    title: "Hakuna matata ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Hakuna matata i Jabadabadoo rodjendaonice u Novom Sadu. Specijalizacija za rodjendane, transparentni paketi – saznajte šta vam odgovara.",
    keywords: [
      "hakuna matata rodjendaonica",
      "hakuna matata novi sad",
      "hakuna matata vs jabadabadoo",
      "jabadabadoo hakuna matata",
    ],
    directAnswer:
      "Hakuna matata i Jabadabadoo nude rodjendane u Novom Sadu. Jabadabadoo je specijalizovana rodjendaonica sa 4 jasna paketa (15.990–45.990 RSD), all-inclusive opcijom, animatorima i roditeljima besplatno. Za transparentnost i fokus na rodjendane – Jabadabadoo je često bolji izbor.",
    intro:
      "Razmatrate Hakuna matata za rodjendan? Oba objekta nude rodjendane – ali šta je tačno uključeno u cenu i gde vam više odgovara? Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Novi Sad – proveriti", jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope" },
      { criterion: "Fokus", competitor: "Igraonica + rodjendani – proveriti", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti na sajtu", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "Animatori, torta, dekoracije, pinjata, interaktivni zid, maskenbal/crtanje; all-inclusive sa hranom" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić za roditelje – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "Jabadabadoo u Novom Sadu sa specijalizacijom za rodjendane – animatori, torta, dekoracije.",
      "4 jasna paketa sa transparentnim cenama – znate šta plaćate.",
      "All-inclusive opcija – kompletna hrana u ceni.",
      "Roditelji besplatno – nema skrivenih troškova.",
      "Lokacija centar – Somborska 17, lako dostupno.",
    ],
    faq: [
      { question: "Gde je Jabadabadoo?", answer: "Somborska 17 u centru Novog Sada, blizu Bulevara Evrope." },
      { question: "Da li Jabadabadoo ima all-inclusive?", answer: "Da. All-inclusive paket (33.490 RSD) uključuje tortu, mini pizze, slatki sto – sve u ceni." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo rodjendaonica" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  {
    slug: "zmajko-ili-jabadabadoo",
    name: "Zmajko",
    title: "Zmajko ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Rodjendaonica Zmajko i Jabadabadoo u Novom Sadu. Transparentni paketi 15.990–45.990 RSD – saznajte šta vam odgovara.",
    keywords: [
      "zmajko rodjendaonica",
      "rodjendaonica zmajko",
      "zmajko vs jabadabadoo",
      "jabadabadoo zmajko",
    ],
    directAnswer:
      "Zmajko i Jabadabadoo nude rodjendane u Novom Sadu. Jabadabadoo ima jasne pakete od 15.990 do 45.990 RSD – znate tačno šta plaćate. All-inclusive opcija, roditelji besplatno, lokacija Somborska 17 u centru. Za transparentnost – Jabadabadoo je često bolji izbor.",
    intro:
      "Tražite rodjendaonicu i razmatrate Zmajko? Oba objekta nude rodjendane – ali šta je uključeno u cenu i gde vam više odgovara? Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Novi Sad – proveriti adresu", jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope" },
      { criterion: "Fokus", competitor: "Rodjendaonica – proveriti", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti na sajtu", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "Animatori, dekoracije, pinjata, interaktivni zid, maskenbal/crtanje, sokovi; torta u All-Inclusive" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić za roditelje – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "Jasni paketi od 15.990 do 45.990 RSD – znate tačno šta plaćate.",
      "Transparentan cenovnik na sajtu – bez skrivenih troškova.",
      "All-inclusive opcija – torta, mini pizza, slatki sto u ceni.",
      "Roditelji besplatno – nema naplate ulaza.",
      "Lokacija centar – Somborska 17, lako dostupno.",
    ],
    faq: [
      { question: "Da li Jabadabadoo ima cenovnik na sajtu?", answer: "Da. 4 paketa sa cenama: Standard 15.990, Premium 21.990, All-Inclusive 33.490, Ultra 45.990 RSD." },
      { question: "Šta uključuje All-inclusive paket?", answer: "Tortu, mini pizze, slatki sto, dekoracije, animatore, pinjatu – sve u ceni." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo rodjendaonica" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  // TIER 3 – Zlatna bubica, Mastaonica, Trka frka, Extreme, Oblačak, Izzy, Castello, Three little monsters, Studio rodjendaonica, Divan dan
  {
    slug: "zlatna-bubica-ili-jabadabadoo",
    name: "Zlatna bubica",
    title: "Zlatna bubica ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Zlatna bubica i Jabadabadoo rodjendaonice u Novom Sadu. Somborska 17 centar, all-inclusive paket – saznajte šta vam odgovara.",
    keywords: [
      "zlatna bubica rodjendaonica",
      "zlatna bubica igraonica",
      "zlatna bubica vs jabadabadoo",
      "jabadabadoo zlatna bubica",
    ],
    directAnswer:
      "Zlatna bubica i Jabadabadoo nude rodjendane u Novom Sadu. Jabadabadoo je na Somborska 17 u centru sa all-inclusive paketom koji uključuje sve bez dodatnih troškova. 4 jasna paketa (15.990–45.990 RSD), roditelji besplatno. Za centar i transparentnost – Jabadabadoo je često bolji izbor.",
    intro:
      "Razmatrate Zlatna bubica za rodjendan? Oba objekta nude igraonicu i rodjendane – ali šta je uključeno u cenu? Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Novi Sad – proveriti", jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope" },
      { criterion: "Fokus", competitor: "Igraonica + rodjendaonica – proveriti", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti na sajtu", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "All-inclusive: torta, mini pizza, slatki sto, animatori, dekoracije – sve u ceni" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "Somborska 17, centar – all-inclusive paket uključuje sve bez dodatnih troškova.",
      "4 jasna paketa sa transparentnim cenama.",
      "Roditelji besplatno – nema skrivenih troškova.",
      "Specijalizacija za rodjendane – sve prilagođeno proslavi.",
      "Lokacija centar – lako dostupno.",
    ],
    faq: [
      { question: "Da li Jabadabadoo ima all-inclusive?", answer: "Da. All-inclusive paket (33.490 RSD) uključuje tortu, mini pizze, slatki sto – sve u ceni." },
      { question: "Gde je Jabadabadoo?", answer: "Somborska 17 u centru Novog Sada." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo rodjendaonica" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  {
    slug: "mastaonica-ili-jabadabadoo",
    name: "Mastaonica",
    title: "Mastaonica ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Mastaonica Petrovaradin i Jabadabadoo rodjendaonice. Centar vs Petrovaradin, transparentni paketi – saznajte šta vam odgovara.",
    keywords: [
      "mastaonica igraonica",
      "mastaonica petrovaradin",
      "mastaonica vs jabadabadoo",
      "jabadabadoo mastaonica",
    ],
    directAnswer:
      "Mastaonica i Jabadabadoo nude rodjendane – Mastaonica u Petrovaradinu, Jabadabadoo na Somborska 17 u centru Novog Sada. Ako vam odgovara centar – Jabadabadoo je lako dostupan sa 4 jasna paketa (15.990–45.990 RSD), all-inclusive opcijom i roditeljima besplatno.",
    intro:
      "Razmatrate Mastaonica za rodjendan? Mastaonica je u Petrovaradinu; Jabadabadoo u centru Novog Sada. Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Petrovaradin", jabadabadoo: "Somborska 17 – centar Novog Sada" },
      { criterion: "Fokus", competitor: "Igraonica + rodjendani – proveriti", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "Animatori, dekoracije, pinjata, torta u All-Inclusive; roditelji besplatno" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "Ako vam odgovara centar Novog Sada – Jabadabadoo je lako dostupan.",
      "4 jasna paketa sa transparentnim cenama.",
      "All-inclusive opcija – kompletna hrana u ceni.",
      "Roditelji besplatno – nema skrivenih troškova.",
      "Specijalizacija za rodjendane – sve prilagođeno proslavi.",
    ],
    faq: [
      { question: "Gde je Jabadabadoo u odnosu na Mastaonicu?", answer: "Jabadabadoo je na Somborska 17 u centru Novog Sada; Mastaonica u Petrovaradinu. Za one koji preferiraju centar – Jabadabadoo je bliže." },
      { question: "Da li Jabadabadoo ima all-inclusive?", answer: "Da. All-inclusive paket (33.490 RSD) uključuje tortu, mini pizze, slatki sto – sve u ceni." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo rodjendaonica" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  {
    slug: "trka-frka-ili-jabadabadoo",
    name: "Trka frka",
    title: "Trka frka ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Trka frka igraonicu i Jabadabadoo rodjendaonicu u Novom Sadu. 4 paketa od Standard do Ultra – saznajte šta vam odgovara.",
    keywords: [
      "trka frka igraonica",
      "trka frka novi sad",
      "trka frka vs jabadabadoo",
      "jabadabadoo trka frka",
    ],
    directAnswer:
      "Trka frka i Jabadabadoo nude rodjendane u Novom Sadu. Jabadabadoo ima 4 paketa sa jasnim cenama – od Standard do Ultra sa mađioničarem. All-inclusive opcija, roditelji besplatno, Somborska 17 u centru. Za transparentnost – Jabadabadoo je često bolji izbor.",
    intro:
      "Razmatrate Trka frka za rodjendan? Oba objekta nude igraonicu i rodjendane – ali šta je uključeno u cenu? Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Novi Sad – proveriti", jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope" },
      { criterion: "Fokus", competitor: "Igraonica + rodjendani – proveriti", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – od Standard do Ultra sa mađioničarem" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "Animatori, dekoracije, pinjata, torta u All-Inclusive; Ultra ima mađioničara ili maskotu" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "4 paketa sa jasnim cenama – od Standard do Ultra sa mađioničarem.",
      "All-inclusive opcija – torta, mini pizza, slatki sto u ceni.",
      "Roditelji besplatno – nema skrivenih troškova.",
      "Lokacija centar – Somborska 17, lako dostupno.",
      "Specijalizacija za rodjendane – sve prilagođeno proslavi.",
    ],
    faq: [
      { question: "Šta uključuje Ultra paket?", answer: "Ultra paket (45.990 RSD) uključuje mađioničarsku predstavu ili maskotu, 3h zabave, kompletnu hranu i premium poklon." },
      { question: "Da li Jabadabadoo ima all-inclusive?", answer: "Da. All-inclusive paket (33.490 RSD) uključuje tortu, mini pizze, slatki sto – sve u ceni." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo rodjendaonica" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  {
    slug: "extreme-ili-jabadabadoo",
    name: "Extreme",
    title: "Extreme ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Extreme igraonicu i Jabadabadoo rodjendaonicu u Novom Sadu. Rodjendani za decu 2–10 god – saznajte šta vam odgovara.",
    keywords: [
      "extreme igraonica novi sad",
      "extreme rodjendaonica",
      "extreme vs jabadabadoo",
      "jabadabadoo extreme",
    ],
    directAnswer:
      "Extreme i Jabadabadoo nude rodjendane u Novom Sadu. Jabadabadoo je specijalizovan za dečije rodjendane 2–10 god – animatori, teme, torta, pinjata. 4 jasna paketa (15.990–45.990 RSD), all-inclusive opcija, roditelji besplatno. Za rodjendansku specijalizaciju – Jabadabadoo je često bolji izbor.",
    intro:
      "Razmatrate Extreme za rodjendan? Oba objekta nude rodjendane – ali tip zabave (adrenalin vs klasičan rodjendan) i šta je uključeno mogu biti različiti. Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Novi Sad – proveriti", jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope" },
      { criterion: "Fokus", competitor: "Igraonica/adrenalin + rodjendani – proveriti", jabadabadoo: "Specijalizacija za dečije rodjendane 2–10 god" },
      { criterion: "Paketi / cene", competitor: "Proveriti", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "Animatori, teme, torta, dekoracije, pinjata, maskenbal/crtanje; all-inclusive sa hranom" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "Specijalizacija za dečije rodjendane 2–10 god – animatori, teme, torta.",
      "4 jasna paketa sa transparentnim cenama.",
      "All-inclusive opcija – kompletna hrana u ceni.",
      "Roditelji besplatno – nema skrivenih troškova.",
      "Klasična rodjendanska zabava – pinjata, maskenbal, igre.",
    ],
    faq: [
      { question: "Za koji uzrast je Jabadabadoo?", answer: "Jabadabadoo je za decu 2–10 godina – animatori, igre prilagođene uzrastu, torta, pinjata." },
      { question: "Da li Jabadabadoo ima all-inclusive?", answer: "Da. All-inclusive paket (33.490 RSD) uključuje tortu, mini pizze, slatki sto – sve u ceni." },
    ],
    images: [
      { src: "/images/rodjendaonica-igraonica-klimatizovano-animatori-za-decu-bebe-novi-sad-jabadabadoo-animatori.png", alt: "Jabadabadoo – animatori za dečije rodjendane" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  {
    slug: "oblacak-ili-jabadabadoo",
    name: "Oblačak",
    title: "Oblačak ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Oblačak igraonicu i Jabadabadoo rodjendaonicu u Novom Sadu. Transparentan cenovnik, all-inclusive – saznajte šta vam odgovara.",
    keywords: [
      "oblacak igraonica",
      "igraonica oblacak",
      "oblacak vs jabadabadoo",
      "jabadabadoo oblacak",
    ],
    directAnswer:
      "Oblačak i Jabadabadoo nude rodjendane u Novom Sadu. Jabadabadoo ima transparentan cenovnik sa 4 paketa (15.990–45.990 RSD) i all-inclusive opcijom – bez skrivenih troškova. Roditelji besplatno, Somborska 17 u centru. Za transparentnost – Jabadabadoo je često bolji izbor.",
    intro:
      "Razmatrate Oblačak za rodjendan? Oba objekta nude igraonicu i rodjendane – ali šta je uključeno u cenu? Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Novi Sad – proveriti", jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope" },
      { criterion: "Fokus", competitor: "Igraonica + rodjendani – proveriti", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – transparentan cenovnik" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "All-inclusive opcija – torta, mini pizza, slatki sto, animatori; bez skrivenih troškova" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "Transparentan cenovnik – all-inclusive opcija, bez skrivenih troškova.",
      "4 jasna paketa sa cenama na sajtu.",
      "Roditelji besplatno – nema naplate ulaza.",
      "All-inclusive – torta, mini pizza, slatki sto u ceni.",
      "Lokacija centar – Somborska 17, lako dostupno.",
    ],
    faq: [
      { question: "Da li Jabadabadoo ima transparentne cene?", answer: "Da. Kompletni cenovnik sa 4 paketa dostupan je na sajtu – Standard 15.990, Premium 21.990, All-Inclusive 33.490, Ultra 45.990 RSD." },
      { question: "Šta uključuje all-inclusive?", answer: "Tortu, mini pizze, slatki sto, dekoracije, animatore – sve u ceni, bez dodatnih troškova." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo rodjendaonica" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  {
    slug: "izzy-ili-jabadabadoo",
    name: "Izzy",
    title: "Izzy ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Izzy igraonicu i Jabadabadoo rodjendaonicu. TC Big vs posvećen prostor Somborska 17 – saznajte šta vam odgovara.",
    keywords: [
      "izzy igraonica",
      "izzy igraonica big",
      "izzy vs jabadabadoo",
      "jabadabadoo izzy",
    ],
    directAnswer:
      "Izzy i Jabadabadoo nude rodjendane – Izzy u TC Big, Jabadabadoo na Somborska 17 u posvećenom prostoru samo za rodjendane. Ne delite prostor sa kupcima u tržnom centru. Jabadabadoo ima 4 jasna paketa, all-inclusive i roditelje besplatno. Za privatnost – Jabadabadoo je često bolji izbor.",
    intro:
      "Razmatrate Izzy za rodjendan? Izzy je u TC Big; Jabadabadoo je posvećen prostor samo za rodjendane. Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "TC Big – u tržnom centru", jabadabadoo: "Somborska 17 – posvećen prostor, ne u TC" },
      { criterion: "Prostor", competitor: "U tržnom centru – deli sa kupcima", jabadabadoo: "Prostor samo za rodjendane – privatnost" },
      { criterion: "Fokus", competitor: "Igraonica + rodjendani – proveriti", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "Animatori, torta, dekoracije, pinjata; all-inclusive sa hranom" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić – besplatno" },
    ],
    jabadabadooAdvantages: [
      "Prostor samo za rodjendane – ne delite ga sa kupcima u tržnom centru.",
      "4 jasna paketa sa transparentnim cenama.",
      "All-inclusive opcija – kompletna hrana u ceni.",
      "Roditelji besplatno – nema skrivenih troškova.",
      "Privatnost – fokus na vašu proslavu.",
    ],
    faq: [
      { question: "Gde je Jabadabadoo u odnosu na Izzy?", answer: "Jabadabadoo je na Somborska 17 – posvećen prostor van tržnog centra. Izzy je u TC Big. Za one koji preferiraju prostor van TC – Jabadabadoo je bolji izbor." },
      { question: "Da li Jabadabadoo ima all-inclusive?", answer: "Da. All-inclusive paket (33.490 RSD) uključuje tortu, mini pizze, slatki sto – sve u ceni." },
    ],
    images: [
      { src: "/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-deciji-rodjendan-01.png", alt: "Jabadabadoo – posvećen prostor" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  {
    slug: "castello-ili-jabadabadoo",
    name: "Castello",
    title: "Castello ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Castello igraonicu i Jabadabadoo rodjendaonicu u Novom Sadu. Somborska 17, 4 paketa – saznajte šta vam odgovara.",
    keywords: [
      "castello igraonica",
      "castello rodjendaonica novi sad",
      "castello vs jabadabadoo",
      "jabadabadoo castello",
    ],
    directAnswer:
      "Castello i Jabadabadoo nude rodjendane u Novom Sadu. Jabadabadoo je na Somborska 17 u centru sa 4 paketa (15.990–45.990 RSD) i jasnim cenama. All-inclusive opcija, roditelji besplatno. Za transparentnost i lokaciju – Jabadabadoo je često bolji izbor.",
    intro:
      "Razmatrate Castello za rodjendan? Oba objekta nude igraonicu i rodjendane – ali šta je uključeno u cenu? Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Novi Sad – proveriti", jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope" },
      { criterion: "Fokus", competitor: "Igraonica + rodjendaonica – proveriti", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "Animatori, dekoracije, pinjata, torta u All-Inclusive; roditelji besplatno" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "Somborska 17 – 4 paketa sa jasnim cenama i sadržajem.",
      "Transparentan cenovnik na sajtu.",
      "All-inclusive opcija – torta, mini pizza, slatki sto u ceni.",
      "Roditelji besplatno – nema skrivenih troškova.",
      "Specijalizacija za rodjendane – sve prilagođeno proslavi.",
    ],
    faq: [
      { question: "Gde je Jabadabadoo?", answer: "Somborska 17 u centru Novog Sada, blizu Bulevara Evrope." },
      { question: "Da li Jabadabadoo ima cenovnik?", answer: "Da. 4 paketa: Standard 15.990, Premium 21.990, All-Inclusive 33.490, Ultra 45.990 RSD." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo rodjendaonica" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  {
    slug: "three-little-monsters-ili-jabadabadoo",
    name: "Three little monsters",
    title: "Three little monsters ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Three little monsters i Jabadabadoo rodjendaonice u Novom Sadu. All-inclusive – sve uključeno – saznajte šta vam odgovara.",
    keywords: [
      "three little monsters rodjendaonica",
      "three little monsters novi sad",
      "three little monsters vs jabadabadoo",
      "jabadabadoo three little monsters",
    ],
    directAnswer:
      "Three little monsters i Jabadabadoo nude rodjendane u Novom Sadu. Jabadabadoo ima all-inclusive paket – sve uključeno, vi samo dođete i uživate. 4 jasna paketa (15.990–45.990 RSD), roditelji besplatno, Somborska 17 u centru. Za kompletnu organizaciju – Jabadabadoo je često bolji izbor.",
    intro:
      "Razmatrate Three little monsters za rodjendan? Oba objekta nude rodjendane – ali šta je uključeno u cenu? Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Bulevar Jovana Dučića 35 – proveriti", jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope" },
      { criterion: "Fokus", competitor: "Igraonica + rodjendaonica – proveriti", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "All-inclusive – sve uključeno; vi samo dođete i uživate" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "All-inclusive paket – sve uključeno, vi samo dođete i uživate.",
      "4 jasna paketa sa transparentnim cenama.",
      "Roditelji besplatno – nema skrivenih troškova.",
      "Lokacija centar – Somborska 17, lako dostupno.",
      "Kompletna organizacija – animatori, torta, dekoracije, pinjata.",
    ],
    faq: [
      { question: "Šta znači all-inclusive kod Jabadabadoo?", answer: "Sve je uključeno – torta, mini pizze, slatki sto, animatori, dekoracije, pinjata. Vi samo dođete i uživate." },
      { question: "Da li roditelji plaćaju ulaz?", answer: "Ne. Roditelji ne plaćaju ulaz – kafić je uključen, besplatno." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo – all-inclusive" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  {
    slug: "studio-rodjendaonica-ili-jabadabadoo",
    name: "Studio rodjendaonica",
    title: "Studio rodjendaonica ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Studio rodjendaonicu i Jabadabadoo u Novom Sadu. Jabadabadoo – jedan brend, jedna lokacija, transparentne cene.",
    keywords: [
      "studio rodjendaonica",
      "studio rodjendaonica novi sad",
      "studio vs jabadabadoo",
      "jabadabadoo studio",
    ],
    directAnswer:
      "Studio rodjendaonica i Jabadabadoo nude rodjendane u Novom Sadu. Jabadabadoo je jedan brend, jedna lokacija (Somborska 17) sa transparentnim cenama. 4 jasna paketa (15.990–45.990 RSD), all-inclusive opcija, roditelji besplatno. Za jasnu brend identifikaciju – Jabadabadoo je često bolji izbor.",
    intro:
      "Tražite rodjendaonicu i vidite više opcija pod imenom Studio? Jabadabadoo je jasno definisan brend na Somborska 17 sa kompletnim cenovnikom. Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Novi Sad – proveriti koji objekat", jabadabadoo: "Somborska 17 – jedna lokacija, centar" },
      { criterion: "Brend", competitor: "Generički naziv – moguće više objekata", jabadabadoo: "Jabadabadoo – jedan brend, jedna lokacija" },
      { criterion: "Paketi / cene", competitor: "Proveriti", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "Animatori, dekoracije, pinjata, torta u All-Inclusive; roditelji besplatno" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "Jabadabadoo – jedan brend, jedna lokacija, transparentne cene.",
      "4 jasna paketa sa cenama na sajtu.",
      "All-inclusive opcija – kompletna hrana u ceni.",
      "Roditelji besplatno – nema skrivenih troškova.",
      "Lokacija centar – Somborska 17, lako dostupno.",
    ],
    faq: [
      { question: "Gde je Jabadabadoo?", answer: "Somborska 17 u centru Novog Sada – jedan prostor, jedna lokacija." },
      { question: "Da li Jabadabadoo ima jasne cene?", answer: "Da. 4 paketa: Standard 15.990, Premium 21.990, All-Inclusive 33.490, Ultra 45.990 RSD – sve na sajtu." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo rodjendaonica" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  {
    slug: "divan-dan-ili-jabadabadoo",
    name: "Divan dan",
    title: "Divan dan ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Divan dan Sremska Mitrovica i Jabadabadoo Novi Sad. U Novom Sadu – Somborska 17 – bez putovanja do okolnih gradova.",
    keywords: [
      "divan dan rodjendaonica",
      "divan dan sremska mitrovica",
      "divan dan vs jabadabadoo",
      "jabadabadoo divan dan",
    ],
    directAnswer:
      "Divan dan je u Sremskoj Mitrovici; Jabadabadoo u Novom Sadu na Somborska 17. Ako tražite rodjendaonicu u Novom Sadu – Jabadabadoo je u gradu, bez putovanja do okolnih gradova. 4 jasna paketa (15.990–45.990 RSD), all-inclusive, roditelji besplatno.",
    intro:
      "Razmatrate Divan dan za rodjendan? Divan dan je u Sremskoj Mitrovici; Jabadabadoo u Novom Sadu. Ako vam odgovara Novi Sad – evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Sremska Mitrovica", jabadabadoo: "Novi Sad – Somborska 17, centar" },
      { criterion: "Grad", competitor: "Okolina – Sremska Mitrovica", jabadabadoo: "U Novom Sadu – bez putovanja do okolnih gradova" },
      { criterion: "Fokus", competitor: "Igraonica + rodjendaonica – proveriti", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "Animatori, torta, dekoracije, pinjata; all-inclusive; roditelji besplatno" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić – besplatno" },
    ],
    jabadabadooAdvantages: [
      "U Novom Sadu – Somborska 17 – bez putovanja do okolnih gradova.",
      "4 jasna paketa sa transparentnim cenama.",
      "All-inclusive opcija – kompletna hrana u ceni.",
      "Roditelji besplatno – nema skrivenih troškova.",
      "Lokacija centar – lako dostupno iz celog grada.",
    ],
    faq: [
      { question: "Gde je Jabadabadoo u odnosu na Divan dan?", answer: "Jabadabadoo je u Novom Sadu (Somborska 17); Divan dan u Sremskoj Mitrovici. Za stanovníke Novog Sada – Jabadabadoo je u gradu." },
      { question: "Da li Jabadabadoo ima all-inclusive?", answer: "Da. All-inclusive paket (33.490 RSD) uključuje tortu, mini pizze, slatki sto – sve u ceni." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo rodjendaonica Novi Sad" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  // Iz Search terms – Twins (1 konverzija), Kids co, Boho, Zabac, Krug
  {
    slug: "twins-ili-jabadabadoo",
    name: "Twins",
    title: "Twins ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Twins igraonicu i Jabadabadoo rodjendaonicu u Novom Sadu. 4 paketa, all-inclusive, roditelji besplatno – saznajte šta vam odgovara.",
    keywords: [
      "twins igraonica",
      "twins rodjendaonica",
      "twins vs jabadabadoo",
      "jabadabadoo twins",
    ],
    directAnswer:
      "Twins i Jabadabadoo nude rodjendane u Novom Sadu. Jabadabadoo je specijalizovana rodjendaonica na Somborska 17 sa 4 jasna paketa (15.990–45.990 RSD), all-inclusive opcijom i roditeljima besplatno. Za transparentnost i sve uključeno – Jabadabadoo je često bolji izbor.",
    intro:
      "Razmatrate Twins za rodjendan? Oba objekta nude rodjendane – ali šta je tačno uključeno u cenu i gde vam više odgovara? Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Novi Sad – proveriti", jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope" },
      { criterion: "Fokus", competitor: "Igraonica + rodjendani – proveriti", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "Animatori, dekoracije, pinjata, torta u All-Inclusive; roditelji besplatno" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "4 jasna paketa sa transparentnim cenama na sajtu.",
      "All-inclusive opcija – torta, mini pizza, slatki sto u ceni.",
      "Roditelji besplatno – nema skrivenih troškova.",
      "Lokacija centar – Somborska 17, lako dostupno.",
      "Specijalizacija za rodjendane – sve prilagođeno proslavi.",
    ],
    faq: [
      { question: "Gde je Jabadabadoo?", answer: "Somborska 17 u centru Novog Sada, blizu Bulevara Evrope." },
      { question: "Da li Jabadabadoo ima all-inclusive?", answer: "Da. All-inclusive paket (33.490 RSD) uključuje tortu, mini pizze, slatki sto – sve u ceni." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo rodjendaonica" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  {
    slug: "kids-co-ili-jabadabadoo",
    name: "Kids co",
    title: "Kids co ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Kids co igraonicu i Jabadabadoo rodjendaonicu u Novom Sadu. Somborska 17, transparentni paketi – saznajte šta vam odgovara.",
    keywords: [
      "kids co igraonica",
      "kidsco igraonica novi sad",
      "kids co vs jabadabadoo",
      "jabadabadoo kids co",
    ],
    directAnswer:
      "Kids co i Jabadabadoo nude rodjendane u Novom Sadu. Jabadabadoo je specijalizovana rodjendaonica na Somborska 17 sa 4 jasna paketa (15.990–45.990 RSD), all-inclusive opcijom i roditeljima besplatno. Za transparentnost i sve uključeno – Jabadabadoo je često bolji izbor.",
    intro:
      "Razmatrate Kids co za rodjendan? Oba objekta nude igraonicu i rodjendane – ali šta je uključeno u cenu? Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Novi Sad – proveriti", jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope" },
      { criterion: "Fokus", competitor: "Igraonica + rodjendani – proveriti", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "Animatori, dekoracije, pinjata, torta u All-Inclusive; roditelji besplatno" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "4 jasna paketa sa transparentnim cenama.",
      "All-inclusive opcija – kompletna hrana u ceni.",
      "Roditelji besplatno – nema skrivenih troškova.",
      "Lokacija centar – Somborska 17, lako dostupno.",
      "Specijalizacija za rodjendane – sve prilagođeno proslavi.",
    ],
    faq: [
      { question: "Gde je Jabadabadoo?", answer: "Somborska 17 u centru Novog Sada, blizu Bulevara Evrope." },
      { question: "Da li Jabadabadoo ima cenovnik na sajtu?", answer: "Da. 4 paketa: Standard 15.990, Premium 21.990, All-Inclusive 33.490, Ultra 45.990 RSD." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo rodjendaonica" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  {
    slug: "boho-ili-jabadabadoo",
    name: "Boho",
    title: "Boho ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Boho igraonicu i Jabadabadoo rodjendaonicu u Novom Sadu. Somborska 17, 4 paketa – saznajte šta vam odgovara.",
    keywords: [
      "boho igraonica novi sad",
      "boho rodjendaonica",
      "boho vs jabadabadoo",
      "jabadabadoo boho",
    ],
    directAnswer:
      "Boho i Jabadabadoo nude rodjendane u Novom Sadu. Jabadabadoo je specijalizovana rodjendaonica na Somborska 17 sa 4 jasna paketa (15.990–45.990 RSD), all-inclusive opcijom i roditeljima besplatno. Za transparentnost i lokaciju centar – Jabadabadoo je često bolji izbor.",
    intro:
      "Razmatrate Boho za rodjendan? Oba objekta nude igraonicu i rodjendane – ali šta je uključeno u cenu? Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Novi Sad – proveriti", jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope" },
      { criterion: "Fokus", competitor: "Igraonica + rodjendani – proveriti", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "Animatori, dekoracije, pinjata, torta u All-Inclusive; roditelji besplatno" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "4 jasna paketa sa transparentnim cenama.",
      "All-inclusive opcija – kompletna hrana u ceni.",
      "Roditelji besplatno – nema skrivenih troškova.",
      "Lokacija centar – Somborska 17, lako dostupno.",
      "Specijalizacija za rodjendane – sve prilagođeno proslavi.",
    ],
    faq: [
      { question: "Gde je Jabadabadoo?", answer: "Somborska 17 u centru Novog Sada, blizu Bulevara Evrope." },
      { question: "Da li Jabadabadoo ima all-inclusive?", answer: "Da. All-inclusive paket (33.490 RSD) uključuje tortu, mini pizze, slatki sto – sve u ceni." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo rodjendaonica" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  {
    slug: "zabac-ili-jabadabadoo",
    name: "Zabac",
    title: "Zabac ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Zabac igraonicu i Jabadabadoo rodjendaonicu u Novom Sadu. Somborska 17, transparentni paketi – saznajte šta vam odgovara.",
    keywords: [
      "zabac igraonica novi sad",
      "igraonica zabac",
      "zabac vs jabadabadoo",
      "jabadabadoo zabac",
    ],
    directAnswer:
      "Zabac i Jabadabadoo nude rodjendane u Novom Sadu. Jabadabadoo je specijalizovana rodjendaonica na Somborska 17 sa 4 jasna paketa (15.990–45.990 RSD), all-inclusive opcijom i roditeljima besplatno. Za transparentnost i lokaciju centar – Jabadabadoo je često bolji izbor.",
    intro:
      "Razmatrate Zabac za rodjendan? Oba objekta nude igraonicu i rodjendane – ali šta je uključeno u cenu? Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Novi Sad – proveriti (Zabac)", jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope" },
      { criterion: "Fokus", competitor: "Igraonica + rodjendani – proveriti", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "Animatori, dekoracije, pinjata, torta u All-Inclusive; roditelji besplatno" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "4 jasna paketa sa transparentnim cenama.",
      "All-inclusive opcija – kompletna hrana u ceni.",
      "Roditelji besplatno – nema skrivenih troškova.",
      "Lokacija centar – Somborska 17, lako dostupno.",
      "Specijalizacija za rodjendane – sve prilagođeno proslavi.",
    ],
    faq: [
      { question: "Gde je Jabadabadoo?", answer: "Somborska 17 u centru Novog Sada, blizu Bulevara Evrope." },
      { question: "Da li Jabadabadoo ima all-inclusive?", answer: "Da. All-inclusive paket (33.490 RSD) uključuje tortu, mini pizze, slatki sto – sve u ceni." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo rodjendaonica" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
  {
    slug: "krug-ili-jabadabadoo",
    name: "Krug",
    title: "Krug ili Jabadabadoo – šta izabrati za rođendan?",
    metaDescription:
      "Uporedite Krug igraonicu i Jabadabadoo rodjendaonicu u Novom Sadu. Somborska 17, 4 paketa – saznajte šta vam odgovara.",
    keywords: [
      "krug igraonica novi sad",
      "krug rodjendaonica",
      "krug vs jabadabadoo",
      "jabadabadoo krug",
    ],
    directAnswer:
      "Krug i Jabadabadoo nude rodjendane u Novom Sadu. Jabadabadoo je specijalizovana rodjendaonica na Somborska 17 sa 4 jasna paketa (15.990–45.990 RSD), all-inclusive opcijom i roditeljima besplatno. Za transparentnost i lokaciju centar – Jabadabadoo je često bolji izbor.",
    intro:
      "Razmatrate Krug za rodjendan? Oba objekta nude igraonicu i rodjendane – ali šta je uključeno u cenu? Evo kako da uporedite.",
    comparisonTable: [
      { criterion: "Lokacija", competitor: "Novi Sad – proveriti", jabadabadoo: "Somborska 17 – centar, blizu Bulevara Evrope" },
      { criterion: "Fokus", competitor: "Igraonica + rodjendani – proveriti", jabadabadoo: "Specijalizovana rodjendaonica – primarna usluga" },
      { criterion: "Paketi / cene", competitor: "Proveriti", jabadabadoo: "4 paketa: 15.990, 21.990, 33.490, 45.990 RSD – sve na sajtu" },
      { criterion: "Šta je uključeno", competitor: "Proveriti", jabadabadoo: "Animatori, dekoracije, pinjata, torta u All-Inclusive; roditelji besplatno" },
      { criterion: "Roditelji", competitor: "Proveriti", jabadabadoo: "Ne plaćaju ulaz; kafić – besplatno" },
      { criterion: "Kapacitet", competitor: "Proveriti", jabadabadoo: "Do 30 dece, 36 roditelja" },
    ],
    jabadabadooAdvantages: [
      "4 jasna paketa sa transparentnim cenama.",
      "All-inclusive opcija – kompletna hrana u ceni.",
      "Roditelji besplatno – nema skrivenih troškova.",
      "Lokacija centar – Somborska 17, lako dostupno.",
      "Specijalizacija za rodjendane – sve prilagođeno proslavi.",
    ],
    faq: [
      { question: "Gde je Jabadabadoo?", answer: "Somborska 17 u centru Novog Sada, blizu Bulevara Evrope." },
      { question: "Da li Jabadabadoo ima cenovnik na sajtu?", answer: "Da. 4 paketa: Standard 15.990, Premium 21.990, All-Inclusive 33.490, Ultra 45.990 RSD." },
    ],
    images: [
      { src: "/images/rodjendaonica-torta-rodjendan-novi-sad-jabadabadoo.jpeg", alt: "Jabadabadoo rodjendaonica" },
      { src: "/images/prostor-za-roditelje-06-rodjendan-rodjendaonica-novi-sad-jabadabadoo-square.png", alt: "Prostor za roditelje" },
    ],
  },
];
