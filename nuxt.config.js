
const config = require('./.contentful.json')

module.exports = {
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_POST_TYPE_ID: config.CTF_POST_TYPE_ID
  },

  mode: 'universal',
  generate: {
    routes: [
      '/pages/index.vue'
    ]
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Screen Message Solution',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Screen Message Application' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/appexico.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  target: 'static',
  ssr: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

