module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  react: {
    useSuspense: false, // Set to false to disable Suspense
  },
  detection: {
    // Optional: Automatically detect the language
    order: ['cookie', 'localStorage', 'querystring', 'navigator'],
  },
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  reloadOnPrerender: true, // Ensure that translations reload on prerender
  react: {
    useSuspense: false, // Disable suspense if you're not using it
  }
};