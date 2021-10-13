// ./plugins/contentful.js
//require('dotenv').config();


const contentful = require('contentful');
const config2 = require('~/env.json')
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: config2.ctf_space_id,
  accessToken: config2.ctf_cda_access_token
}

// export `createClient` to use it in page components
module.exports = {
  createClient () {
    return contentful.createClient(config);

  }
}
