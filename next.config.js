/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',

    locales: ['en', 'fr',],
  },

  images: {
    domains: ["https://afex-frontend-technical-challenge-api.onrender.com"],
  },
};

module.exports = nextConfig;
