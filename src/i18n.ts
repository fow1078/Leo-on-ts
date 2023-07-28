import { initReactI18next } from 'react-i18next';
import i18n, { Resource } from 'i18next';

import en from './translations/en.json';

// TODO: add language detection
const lng = 'en';

const resources = {
  en: {
    translation: en,
  },
} as Resource;

i18n.use(initReactI18next).init({
  resources,
  defaultNS: 'translation',
  lng,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

