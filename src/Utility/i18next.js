import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../assets/languages/English/translation.json';
import arTranslation from '../assets/languages/Arabic/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (lng) => {
  document.body.setAttribute('lang', lng);
  document.body.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr');
});

export default i18n;