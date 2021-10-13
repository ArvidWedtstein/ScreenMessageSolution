// ./plugins/contentful.js
//require('dotenv').config();


const contentful = require('contentful');
//const config2 = require('env.json')
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: 'ehmsksems2za',
  accessToken: 'CTF_CDA_ACCESS_TOKEN=tH1SJr15R5mKOg3g4CYRJCqRQjiPTKlPWzEQFtkMia4'
}

// export `createClient` to use it in page components
module.exports = {
  createClient () {
    return contentful.createClient(config);
    
  }
}