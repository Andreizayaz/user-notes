import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEn from './locales/en/en_translation.json';

const resources = {
  en: {
    translation: translationEn
  }
};

const setI18nextConfig = async () => {
  await i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources,
      supportedLngs: ['en'],
      fallbackLng: 'en',
      detection: {
        order: ['localStorage', 'htmlTag', 'path', 'subdomain'],
        caches: ['localStorage']
      },
      react: {
        useSuspense: false
      }
    });
};

void setI18nextConfig();

export default i18n;
