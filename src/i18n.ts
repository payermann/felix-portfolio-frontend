import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        brand: "Felix Portfolio",
        ecommerce: "E-commerce",
        contact: "Contact me",
      },
      home: {
        heroTitle: "Hi! My name is Felix",
        heroDescription:
          "I'm a web developer. I love to create web applications. I have a passion for learning new technologies and improving my skills. I am currently looking for a job as a web developer. If you are interested in my work, please feel free to contact me.",
        heroButton: "Contact me",
        skillsTitle: "My Skills",
        contactTitle: "Contact me",
        contactIntro:
          "If you would like to contact me, please feel free to contact me by e-mail. Also here you will find links to my social profiles. I am always open for new opportunities and cooperation.",
        emailLabel: "My e-mail",
        emailAddress: "felix.job2025@outlook.de",
        emailPlaceholder: "your@email.com",
        emailHint: "Enter valid email address",
        send: "Send",
        heroImageAlt: "Felix photo",
      },
      footer: {
        social: "Social",
      },
      ecommerce: {
        title: "E-commerce",
      },
    },
  },
  de: {
    translation: {
      nav: {
        brand: "Felix Portfolio",
        ecommerce: "E-Commerce",
        contact: "Kontakt",
      },
      home: {
        heroTitle: "Hallo! Ich bin Felix",
        heroDescription:
          "Ich bin Webentwickler und liebe es, Webanwendungen zu erstellen. Neue Technologien zu lernen und meine Fähigkeiten zu verbessern begeistert mich. Zurzeit suche ich eine Stelle als Webentwickler. Wenn dir meine Arbeit interessiert, kontaktiere mich gerne.",
        heroButton: "Kontakt",
        skillsTitle: "Meine Fähigkeiten",
        contactTitle: "Kontakt",
        contactIntro:
          "Wenn du mit mir Kontakt aufnehmen möchtest, erreichst du mich am besten per E-Mail. Hier findest du außerdem Links zu meinen sozialen Profilen. Ich bin immer offen für neue Möglichkeiten und Zusammenarbeit.",
        emailLabel: "Meine E-Mail",
        emailAddress: "felix.job2025@outlook.de",
        emailPlaceholder: "deine@email.de",
        emailHint: "Gib eine gültige E-Mail-Adresse ein",
        send: "Senden",
        heroImageAlt: "Foto von Felix",
      },
      footer: {
        social: "Soziale Netzwerke",
      },
      ecommerce: {
        title: "E-Commerce",
      },
    },
  },
};

const storageKey = "language";
const fallbackLng = "en";
const storedLanguage =
  typeof window !== "undefined" ? localStorage.getItem(storageKey) : null;

i18n.use(initReactI18next).init({
  resources,
  lng: storedLanguage ?? fallbackLng,
  fallbackLng,
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(storageKey, lng);
  }
});

export default i18n;
