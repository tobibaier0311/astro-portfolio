export const languages = {
  en: "English",
  de: "Deutsch",
};

export const defaultLang = "en";

export const showDefaultLang = false;

export const routes = {
  de: {
    about: "about",
    projects: "projects",
  },
};

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "about.title": "about",
    "about.description":
      "My first professional work experience was from October 2022 - February 2023 as a Frontend Development Intern at a Data Science startup located in Salzburg, Austria.",
  },
  de: {
    "nav.home": "Home",
    "nav.about": "Über",
    "nav.projects": "Projekte",
    "about.title": "about",
    "about.description":
      "Meine erste berufliche Erfahrung war von Oktober 2022 bis Februar 2023 als Frontend-Entwicklungspraktikant in einem Data-Science-Startup in Salzburg, Österreich.",
  },
} as const;
