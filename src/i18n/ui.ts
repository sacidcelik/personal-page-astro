const en = {
  "meta.title": "sacid celik | software engineer",
  "meta.description":
    "sacid celik, a freelance software developer from munich, de. my favorite tools include angular, typescript, javascript, astro and nodejs",
  "meta.serviceDescription":
    "Freelance software development with a focus on Angular and TypeScript: frontend architecture, modernization and migrations, and fullstack web development.",
  "welcome.heading": "welcome",
  "welcome.text.intro": "hello and welcome! i’m",
  "welcome.text.rest":
    ", a software developer with a passion for crafting high-performance, delightful user experiences. i’m excited to connect with you!",
  "about.heading": "about",
  "about.p1":
    "i'm a software developer from germany and i love to build stuff. my career began in marketing at a FAANG company but my natural curiosity and love for problem-solving led me to dive into the exciting realm of web development.",
  "about.p2":
    "i am eager to branch out and learn new things and i choose my tools based on the customer's needs. however, my usual tools (so far) include:",
  "now.heading": "now",
  "now.status": "working as a freelance developer",
  "now.location": "located in munich, de",
  "now.open": "open to remote or hybrid projects",
  "contact.heading": "contact me",
  "contact.text.before": "let's collaborate! happy to receive your message at",
  "contact.text.after": "or on the socials.",
  "made.before": "made with 💚 using",
  "made.after": ". inspired by the 🌍.",
  "imprint.label": "legal notice",
  "services.heading": "services",
  "work.heading": "selected work",
  "work.references": "references and further details on request.",
} as const;

const de = {
  "meta.title": "sacid celik | software-entwickler",
  "meta.description":
    "sacid celik, freiberuflicher software-entwickler aus münchen. schwerpunkt angular & typescript, offen für freelance-projekte, remote oder hybrid",
  "meta.serviceDescription":
    "Freiberufliche Softwareentwicklung mit Schwerpunkt Angular und TypeScript: Frontend-Architektur, Modernisierung und Migrationen sowie Fullstack-Webentwicklung.",
  "welcome.heading": "willkommen",
  "welcome.text.intro": "hallo und willkommen! ich bin",
  "welcome.text.rest":
    ", software-entwickler mit einer leidenschaft für performante, durchdachte user experiences. schön, dass du hier bist!",
  "about.heading": "über mich",
  "about.p1":
    "ich bin software-entwickler aus deutschland und liebe es, dinge zu bauen. meine karriere begann im marketing bei einem FAANG-konzern, aber meine neugier und freude am problemlösen führten mich in die spannende welt der webentwicklung.",
  "about.p2":
    "ich lerne gerne neues dazu und wähle meine tools nach den anforderungen des kunden. meine üblichen werkzeuge (bisher) sind:",
  "now.heading": "aktuell",
  "now.status": "unterwegs als freelance-entwickler",
  "now.location": "zuhause in münchen",
  "now.open": "offen für remote- und hybrid-projekte",
  "contact.heading": "kontakt",
  "contact.text.before": "lass uns zusammenarbeiten! schreib mir gerne an",
  "contact.text.after": "oder auf den socials.",
  "made.before": "gemacht mit 💚 und",
  "made.after": ". inspiriert von der 🌍.",
  "imprint.label": "impressum",
  "services.heading": "leistungen",
  "work.heading": "ausgewählte projekte",
  "work.references": "referenzen und weitere details auf anfrage.",
} as const satisfies Record<keyof typeof en, string>;

export const ui = { en, de };

export type Lang = keyof typeof ui;
export type UiKey = keyof typeof en;

export function getLang(currentLocale: string | undefined): Lang {
  return currentLocale === "de" ? "de" : "en";
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key];
  };
}
