
require('dotenv').config();

module.exports = {


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
  // target: 'static',
  ssr: false,
  /*
  ** Build configuration
  */
  buildModules: [
    '@nuxtjs/dotenv'
  ],
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
      config.node = {
        fs: 'empty'
      }

    }
  }
}

