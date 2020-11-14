import i18n from 'i18next';

i18n.init({
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },

  react: {
    wait: true,
  },
});

i18n.addResourceBundle('en', 'translation', require("./locales/en.json"));

export default i18n;
