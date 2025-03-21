import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN_US from "./locales/en-US/translation.json";
import translationZH_CN from "./locales/zh-CN/translation.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  "zh-CN": {
    translation: translationZH_CN,
  },
  "en-US": {
    translation: translationEN_US,
  },
};

const defaultLanguage = "zh-CN";

const storedLanguage = localStorage.getItem("language");

/**
 * In Chrome's localStorage, strings stored using the native `localStorage.setItem` method
 * do not have additional quotation marks, whereas strings stored using ahook's `useLocalStorage`
 * include extra quotation marks. e.g. '"zh-CN"'
 *
 * To prevent i18n text flickering when the page refreshes and the language is reloaded,
 * it's necessary to use JSON.parse to standardize the format.
 */
const appLanguage = storedLanguage
  ? JSON.parse(storedLanguage) // '"zh-CN"' -> "zh-CN"
  : defaultLanguage;

if (!localStorage.getItem("language")) {
  localStorage.setItem("language", JSON.stringify(defaultLanguage));
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: appLanguage, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
