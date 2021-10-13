
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
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

  privateRuntimeConfig: {
    ctf_access_token: process.env.CTF_ACCESS_TOKEN,
    contentful_org_id: process.env.CONTENTFUL_ORG_ID,
    ctf_space_id: process.env.CTF_SPACE_ID,
    ctf_person_id: process.env.CTF_PERSON_ID,
    ctf_cda_access_token: process.env.CTF_CDA_ACCESS_TOKEN,
    
  }

})