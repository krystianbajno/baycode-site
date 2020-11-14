import i18n from 'i18next';
import Backend from 'i18next-http-backend';

const path = process.env.GATSBY_LOCALES

i18n.use(Backend).init({
  backend: {
    loadPath: path
  },
  fallbackLng: 'en',
  debug: true,

  interpolation: {
    escapeValue: false,
  },

  react: {
    wait: true,
  },
});

export default i18n;
