// ./plugins/contentful.js
//require('dotenv').config();


const contentful = require('contentful')
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: 'ehmsksems2za',
  accessToken: 'tH1SJr15R5mKOg3g4CYRJCqRQjiPTKlPWzEQFtkMia4'
}

// export `createClient` to use it in page components
module.exports = {
  createClient () {
    return contentful.createClient(config);
    
  }
}