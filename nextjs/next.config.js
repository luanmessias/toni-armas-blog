const withReactSvg = require('next-react-svg')
const withPWA = require('next-pwa')

const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, './public/svg'),
  webpack(config, options) {
    return config
  }
});

module.exports = withPWA({
  pwa: {
    dest: 'public'
  }
});

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
};
