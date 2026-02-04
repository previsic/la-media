export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "outdoor-led",
    title: "Outdoor LED Oglašavanje",
    subtitle: "Dominantna prisutnost na ključnim lokacijama",
    description:
      "Zakup premium outdoor LED displaya na najprometnijim lokacijama u gradu. Vaša poruka vidljiva 24/7, u bilo kakvim vremenskim uvjetima.",
    deliverables: [
      "Strateški odabir lokacija",
      "Visoka rezolucija i svjetlina",
      "Fleksibilno trajanje kampanje",
      "Real-time promjena sadržaja",
      "Mjerenje dosega i impresija",
    ],
    idealFor: "Brandovi koji žele maksimalnu vidljivost i brand awareness",
    icon: "📺",
  },
  {
    id: "indoor-led",
    title: "Indoor LED Rješenja",
    subtitle: "Impresivni zasloni za zatvorene prostore",
    description:
      "LED zidovi i display rješenja za trgovačke centre, lobby prostore, sajmove i evente. Privucite pažnju posjetitelja premium vizualima.",
    deliverables: [
      "Custom dimenzije i konfiguracije",
      "Visoka gustoća piksela",
      "Integracija s postojećim sustavima",
      "Profesionalna instalacija",
      "Tehnička podrška",
    ],
    idealFor: "Trgovački centri, hoteli, korporativni prostori, event organizatori",
    icon: "🏢",
  },
  {
    id: "content-creation",
    title: "Kreacija Sadržaja",
    subtitle: "Vizuali optimizirani za LED",
    description:
      "Dizajniramo i produciramo sadržaj specifično prilagođen za LED display oglašavanje — dinamičan, uočljiv i prilagođen tehničkim specifikacijama.",
    deliverables: [
      "Motion grafika i animacije",
      "Video produkcija za LED",
      "Prilagodba postojećih materijala",
      "A/B testiranje kreativa",
      "Sezonske kampanje",
    ],
    idealFor: "Klijenti kojima treba kvalitetan sadržaj za svoje LED kampanje",
    icon: "🎨",
  },
  {
    id: "campaign-management",
    title: "Upravljanje Kampanjama",
    subtitle: "Od planiranja do izvršenja",
    description:
      "Kompletno upravljanje vašom LED oglašivačkom kampanjom — od strategije i planiranja medija do izvršenja i analize rezultata.",
    deliverables: [
      "Medijsko planiranje",
      "Scheduling i rotacija sadržaja",
      "Praćenje performansi",
      "Optimizacija u realnom vremenu",
      "Detaljni izvještaji",
    ],
    idealFor: "Agencije i brendovi koji žele hands-off pristup kampanjama",
    icon: "📊",
  },
  {
    id: "network-access",
    title: "Pristup LED Mreži",
    subtitle: "Široka pokrivenost, jedan kontakt",
    description:
      "Pristup našoj mreži LED displaya diljem Hrvatske. Jedna kampanja, više lokacija, maksimalan doseg — sve kroz jednu točku kontakta.",
    deliverables: [
      "Nacionalna pokrivenost",
      "Lokalno targetiranje",
      "Paketne ponude",
      "Centralizirano upravljanje",
      "Koordinirana isporuka",
    ],
    idealFor: "Nacionalne kampanje, retail lanci, franchise mreže",
    icon: "🗺️",
  },
  {
    id: "led-sales",
    title: "Prodaja LED Displaya",
    subtitle: "Premium oprema za vašu lokaciju",
    description:
      "Prodaja i instalacija LED displaya za poslovne prostore, maloprodaju i vanjsku upotrebu. Savjetovanje, dobava i postavljanje — sve na jednom mjestu.",
    deliverables: [
      "Konzultacije i savjetovanje",
      "Ponuda premium brendova",
      "Profesionalna instalacija",
      "Garancija i servis",
      "Obuka za korištenje",
    ],
    idealFor: "Tvrtke koje žele vlastiti LED display za trajnu upotrebu",
    icon: "🛒",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Konzultacija",
    description: "Analiziramo vaše ciljeve, ciljanu publiku i budžet.",
  },
  {
    number: "02",
    title: "Planiranje",
    description: "Predlažemo optimalne lokacije, formate i trajanje kampanje.",
  },
  {
    number: "03",
    title: "Kreacija",
    description: "Izrađujemo ili prilagođavamo sadržaj za LED display.",
  },
  {
    number: "04",
    title: "Lansiranje",
    description: "Aktiviramo kampanju i pratimo rezultate u realnom vremenu.",
  },
];

export const testimonials = [
  {
    quote:
      "LED kampanja s LA-MEDIA donijela nam je 40% više posjeta u trgovine. Lokacije su bile savršeno odabrane za našu ciljanu publiku.",
    author: "Tomislav Novak",
    role: "Marketing Manager",
    company: "SportMax",
  },
  {
    quote:
      "Profesionalan pristup od početka do kraja. Sadržaj koji su kreirali za naše displaye privlači pažnju i donosi rezultate.",
    author: "Petra Babić",
    role: "Direktorica marketinga",
    company: "Lux Nekretnine",
  },
  {
    quote:
      "Naša mreža poslovnica sada ima ujednačenu vizualnu komunikaciju zahvaljujući LED rješenjima koja nam je osigurala LA-MEDIA.",
    author: "Marko Vidović",
    role: "CEO",
    company: "FinanceHub",
  },
];

export const trustedBy = [
  "SportMax",
  "Lux Nekretnine",
  "FinanceHub",
  "AutoCentar",
  "MegaMall",
  "TechPro",
];

export const stats = [
  { value: "50+", label: "LED lokacija" },
  { value: "200+", label: "Uspješnih kampanja" },
  { value: "15M+", label: "Dnevnih impresija" },
  { value: "98%", label: "Zadovoljnih klijenata" },
];
