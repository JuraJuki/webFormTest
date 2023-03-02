import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationHR from "./locales/hr/translation.json";

const resources = {
  en: { translation: translationEN },
  hr: { translation: translationHR },
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
  });

// how to change language
//  const changeLanguage = (lng) => {
//   i18n.changeLanguage(lng);
// };

export default i18n;
