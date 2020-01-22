import i18n from 'i18next';
//import Backend from 'i18next-xhr-backend';
//import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import resources from './languages';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  //.use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    debug: true,
    keySeparator: '.',
    ns: ['translation'],
    defaultNS: 'translation',
    fallbackNS: [],

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;