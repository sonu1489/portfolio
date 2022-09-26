module.exports = {
    i18n: {
      defaultLocale: "en",
      locales: ["en", "es", "fr"],
      // localePath: "./locales",
    },
    reloadOnPrerender: process.env.NODE_ENV === 'development'
  };