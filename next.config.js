const withPWA = require('next-pwa')


module.exports = withPWA({
  pwa: {
    dest: 'public'
  }
});


module.exports = {
  env: {
    notion_table_posts: 'https://notion-api.splitbee.io/v1/table/56e15fc6a74f4ca7b44bae84601996f9',
    notion_post_page: ''

  },
  images: {
    domains: ["localhost"],
  }
};

