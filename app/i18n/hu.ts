import type { CvContent } from "~/types/cv";

export default {
  fullName: "Szenes Márton",
  meta: {
    title: "Szenes Márton - Szoftvermérnök és Webfejlesztő",
    description: "Minőségi projekteket készítek okos megoldásokkal és kreativitással",
    ogLocale: "hu_HU",
  },
  nav: {
    about: "rólam",
    experience: "tapasztalat",
    projects: "projektek",
    skills: "készségek",
    contact: "kapcsolat",
    menu: "Menü",
    language: "Nyelv",
  },
  hero: {
    title: [
      { highlight: "Szoftver-" },
      " és ",
      { highlight: "full-stack" },
      " webfejlesztő vagyok",
    ],
    description: "Minőségi projekteket készítek okos megoldásokkal és kreativitással",
    status: "Tanulj | Alkoss | Emelkedj ki",
    contactCta: "Lépj kapcsolatba =>",
    downloadCv: "Önéletrajz letöltése",
    photoAlt: "Szenes Márton portréja",
  },
  quote: {
    text: "Az időutazás nehéz. Akárcsak a CSS grid.",
    author: "Doctor Who",
  },
  about: {
    heading: "rólam",
    paragraphs: [
      "Elhivatott és logikusan gondolkodó informatikus hallgató vagyok, jelenleg a Budapesti Műszaki és Gazdaságtudományi Egyetem (BME) harmadéves hallgatója, ahol mérnökinformatikus BSc diplomáért tanulok.",
      "Szenvedélyesen vonzanak a bonyolult problémák, amikkel órákat el tudok tölteni megoldásukkal, melyek problémamegoldó képességem határait feszegetik. Bár ezek a feladatok mentálisan megterhelőek lehetnek, a precíz és tökéletes megoldás megtalálásának érzése nagyon jó tud lenni.",
      "Az egyetemi és kszk-s projektjeim során rengeteg tapasztalatot szereztem a szoftvertervezés, projektmenedzsment, valamint a frontend és backend webfejlesztés területén is. Hiszek a folyamatos tanulásban és abban, hogy lépést tartsak a legújabb technológiákkal és folyton fejlesszem a készségeimet.",
    ],
    stats: {
      yearsCoding: "Év Programozás",
      projectsCompleted: "Befejezett Projekt",
      technologies: "Technológia",
    },
    studying: { label: "Jelenleg tanulom", detail: "BME Mérnökinformatika" },
  },
  experience: {
    heading: "tapasztalat",
    items: [
      {
        period: "2025 - jelenleg",
        title: "Full-stack szoftvermérnök",
        place: "Evosoft Hungary Kft.",
        description:
          "Nagy, mikroszolgáltatás-alapú projekteken dolgozom full-stack fejlesztőként. Fő feladataim közé tartozik a C# .NET alapú backend szolgáltatások fejlesztése és karbantartása, új funkciók készítése, hibajavítás és a meglévő kód optimalizálása. Emellett a felhasználói felületek fejlesztésén is dolgozom, hogy jobb felhasználói élményt nyújtsunk webes alkalmazásainkban.",
        tags: ["Full-stack fejlesztés", "C# .NET", "Angular", "Scrum"],
      },
      {
        period: "2024 - jelenleg",
        title: "Fejlesztő csapattag és korábbi DevTeam vezető",
        place: "KSZK BME",
        description:
          "Korábbi Developer Team Leaderként a kollégiumi IT-szervezet belső szolgáltatásainak és közösségi platformjainak fejlesztési folyamatait koordináltam, beleértve a technikai architektúra-tervezést, a csapatmunkát és a projektmenedzsmentet. Jelenleg fejlesztő csapattagként dolgozom különböző projekteken, például a BecskasszaSCH 2 rendszeren, a BeléptetősCH frontendjén és a Levlista-service backendjén.",
        tags: ["Csapatvezetés", "Projektmenedzsment", "Python FastAPI", "React TS"],
      },
    ],
  },
  education: {
    heading: "tanulmányok",
    items: [
      {
        period: "2023 - Jelenleg",
        title: "Mérnökinformatikus BSc",
        place: "Budapesti Műszaki és Gazdaságtudományi Egyetem (BME)",
        description:
          "Jelenleg harmadéves, Mérnökinformatikus szakos hallgató vagyok, ahol újfajta szoftver technikák, tervezési folyamatok és full-stack webfejlesztés területére összpontosítva folyamatosan mélyítem tudásom.",
      },
    ],
  },
  projects: {
    heading: "projektek",
    items: {
      levlista: {
        name: "Levlista-service",
        description:
          "Python és FastAPI alapú backend szolgáltatás Google Group levelezőlisták kezelésére. Az AdminSCH mikroszolgáltatás-architektúrába illeszkedik, REST API végpontokat biztosít a listák, feliratkozások és adminisztrációs műveletek kezeléséhez. Több mint 16 000 felhasználó támaszkodik rá.",
      },
      belepteto: {
        name: "BeléptetősCH",
        description:
          "A BeléptetősCH beléptető rendszer frontend fejlesztése 2026-ban, ahol az átlátható felületekre, az egységes felhasználói élményre és a reszponzív kialakításra helyeztem a hangsúlyt.",
      },
      becskassza: {
        name: "BecskasszaSCH 2",
        description:
          "Komplex adminisztrációs és tranzakciókezelő rendszer, amelyet a KSZK BME számára fejlesztettem. Biztonságos felhasználói azonosítás, pénzügyi tranzakció-követés, adminisztrációs kezelőfelület és valós idejű jelentéskészítés jellemzi. Python Flask keretrendszerrel és PostgreSQL adatbázissal készült.",
      },
      sprinkle: {
        name: "Automatikus öntözőrendszer",
        description:
          "Innovatív IoT megoldás automatizált kerti öntözéshez. Valós idejű óraütemezés, TFT kijelzős kezelőfelület egyszerű beállításhoz, talajnedvesség-érzékelők okos öntözési döntésekhez, és időjárás-érzékeny vezérlés jellemzi.",
      },
      luxus: {
        name: "Luxusfinance",
        description:
          "Professzionális, reszponzív weboldal pénzügyi szakértő számára. Modern design elvek, zökkenőmentes felhasználói élmény, kapcsolatfelvételi űrlapok háttérfeldolgozással, és SEO optimalizálás jellemzi.",
      },
      basicLite: {
        name: "BASIC-lite Interpreter",
        description:
          "Programkód értelmező egyszerűsített BASIC programozási nyelvhez, C++-ban írva. Teljes CLI kezelőfelület, kifejezések kiértékelése, feltételes utasítások, ciklusok, változókezelés és fájl I/O jellemzi, hibakezeléssel és kiterjedt unit tesztekkel.",
      },
    },
    links: { live: "Élő =>", github: "Github =>", gitlab: "GitLab =>" },
  },
  skills: {
    heading: "készségek",
    categories: {
      languages: "Programozási Nyelvek",
      web: "Web Technológiák",
      frameworks: "Keretrendszerek és Eszközök",
      other: "Adatbázisok és Egyéb",
    },
    levels: { advanced: "Haladó", intermediate: "Közepes", beginner: "Kezdő" },
  },
  interests: {
    heading: "érdeklődés",
    items: [
      {
        title: "Problémamegoldás",
        description:
          "Szeretem az összetett és új ismeretet jelentő kihívásokat és azt, amikor elegáns, valamint precíz megoldásokat találhatok nehéz problémákra.",
      },
      {
        title: "Folyamatos tanulás",
        description:
          "Mindig új technológiákat, keretrendszereket és programozási módszereket fedezek fel, hogy naprakész maradjak a területen.",
      },
      {
        title: "Hardware projektek",
        description:
          "Szeretek Arduino és beágyazott rendszerekkel dolgozni, hogy praktikus IoT megoldásokat hozzak létre.",
      },
    ],
  },
  contact: {
    heading: "kapcsolat",
    title: "Dolgozzunk együtt",
    description:
      "Mindig nyitott vagyok új lehetőségekre és izgalmas projektekre. Ha felkeltette érdeklődését a munkám, kérem, nyugodtan keressen meg.",
    boxTitle: "Írjon nekem",
  },
  footer: {
    description: "Szoftvermérnök és full-stack webfejlesztő",
    links: "Linkek",
    copyright: (year) => `© Copyright ${year}. Készítette: Szenes Márton`,
  },
} satisfies CvContent;
