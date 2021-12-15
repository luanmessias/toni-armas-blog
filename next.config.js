const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public'
  }
})

module.exports = {
  env: {
    notion_table_posts:
      'https://notion-api.splitbee.io/v1/table/83890134f1c042ff9cdf3500bfb3005e',
    notion_post_page: 'https://notion-api.splitbee.io/v1/page/',
    contentful_space: process.env.CONTENTFUL_SPACE_ID,
    contentful_acces_token: process.env.CONTENTFUL_ACCESS_KEY
  },
  images: {
    domains: ['localhost']
  }
}
