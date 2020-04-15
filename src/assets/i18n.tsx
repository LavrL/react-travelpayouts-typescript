import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './languages';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
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