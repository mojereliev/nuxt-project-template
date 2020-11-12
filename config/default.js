module.exports = {
  axios: {
    baseURL: 'api/',
  },
  i18n: {
    defaultLocale: 'ru',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      fallbackLocale: 'en',
    },
    langDir: 'locales/',
    lazy: true,
    locales: [
      {
        code: 'en',
        file: 'en.yml',
      },
      {
        code: 'ru',
        file: 'ru.yml',
      },
    ],
    seo: false,
    silentTranslationWarn: true,
    vueI18n: {
      fallbackLocale: 'en',
    },
  },
  moment: {
    locales: ['en-gb', 'ru'],
    defaultLocale: 'en',
  },
  mq: {
    defaultBreakpoint: 'lg',
    breakpoints: {
      sm: 760,
      md: 960,
      lg: 1440,
      xl: Infinity,
    },
  },
};
