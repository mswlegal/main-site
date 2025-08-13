const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        pathname: '**',
      },
    ],
  },
};