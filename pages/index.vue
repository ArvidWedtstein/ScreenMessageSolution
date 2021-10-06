<template>
  <section v-bind:class="{ dark: dark }" class="container">
    <img v-if="dark" class="logo" src="/appexLogoNy.png" alt="Logo"/>
    <img v-else class="logo" src="/appexLogoNyDark.png" alt="Logo"/>
    <div class="messages">
      <div class="message" v-for="message in messages" v-bind:key="message.sys.id">
        <div class="message-container">
          <h1> “{{ message.fields.messagecontent }}"</h1>
          <div class="message-meta">
            <h2 class="authormessage">{{ message.fields.author }}</h2>
            <h2>{{ timeFormat(message.fields.date) }}</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
import moment from 'moment';
import {createClient} from '~/plugins/contentful.js'
const client = createClient()
require('dotenv').config();


export default {
    name: "ScreenMessageApplication",
    data() {
      return {
        messages: [],
        dark: false
      }
    },

    asyncData () {
      return Promise.all([
        client.getEntries({
          'content_type': process.env.CTF_POST_TYPE_ID,
          order: '-sys.updatedAt'
        }),

        ]).then(([response]) => {
          return {
            messages: response.items.splice(0,3)
          }
      }).catch(console.error)
    },

    methods: {
      timeFormat(time) {
        return moment(String(time)).format("DD.MM.YYYY - hh:mm")
      },
      // auto update with new data regularly
      refresh() {
        setInterval(() => {
           const time = new Date();
          if (time.getHours() >= 16) {
            this.dark = true;
          } else {
            this.dark = false;
          }
          client.getEntries({
            'content_type': process.env.CTF_POST_TYPE_ID,
            order: '-sys.updatedAt'
          }).then((response) => {
            console.log(response.items.splice(0,3))
            this.messages = response.items.splice(0,3)
          
          }).catch(console.error)
          //location.reload();
          this.$nuxt.refresh();
        }, 60 * 1000);
      },
    },

    mounted() {
      this.refresh();
    }
}



</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
:root{
  --abbegscolor: #0073cf;
  --white: #ffffff;
  --abbegsdark: #221E20;
  --light: #D6D2CE;
  --green: #DDE78B;
}
body {
  font-family: 'poppins';
  overflow: hidden !important;
}
* {
  box-sizing: border-box;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--light);
  width: 100vw;
  height: 100vh;
  color: var(--abbegsdark);
}
.dark {
  background: var(--abbegsdark);
  color: var(--light);
}
.authormessage {
  text-transform: capitalize;
}
.logo {
  position: absolute;
  top: 0vh;
  left: 50vw;
  height: 150px;
  transform: translateX(-50%);
}

.messages {
  display: flex;
  flex-wrap:wrap;
  width: 100%;

}
.message-container {
  position: relative;
  height: 100%;
  width: 100%;

}
.message {
  display: flex;
  padding: 80px;
  flex-grow: 1;
  width: 50%;
  height: 40vh;
  position: relative;
  h1 {
    position: absolute;
    top: 40%;
    transform: translate(-50%, -50%);
    left: 50%;
    font-size: 2.2vh;
    width: 100%;
    font-weight: 500;
  }
  h2 {
    font-size: 20px;
    font-weight: 400;
  }
  &:first-child {
    width: 100%;
    height: 60vh;
    align-content: center;
    vertical-align: middle;
    h1 {
      font-size: 3.8vh;
      top: 52%;
      width: 100%;
    }
  }

}

.message-meta {
  position: absolute;
  bottom: -4%;
  transform: translateX(-50%);
  left: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}


</style>




