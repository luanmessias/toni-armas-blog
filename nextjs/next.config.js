const withPWA = require('next-pwa')

module.exports = {
  env: {
    graphql_api_url: 'https://localhost:1337/graphql',
  }
}


module.exports = withPWA({
  pwa: {
    dest: 'public'
  }
});



module.exports = {
  images: {
    domains: ["localhost"],
  }
};
