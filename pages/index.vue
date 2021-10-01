<template>
  <section class="container">
    <img class="logo" src="/appexLogoNy.png" alt="Logo"/>
    <div class="messages">
      <div class="message" v-for="message in messages" :key="message.sys.id">
        <div class="message-container">
          <h1> “{{ message.fields.messagecontent }}”</h1>
          <div class="message-meta">
            <h2>{{ message.fields.author }}</h2>
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

export default {
    name: "ScreenMessageApplication",
    data() {
      return {
        messages: null
      }
    },

    asyncData ({env}) {
      return Promise.all([
        client.getEntries({
          'content_type': env.CTF_POST_TYPE_ID,
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
        setInterval(function() {
          client.getEntries({
            'content_type': 'melding',
            order: '-sys.updatedAt'
          }).then((response) => {
            console.log(response)
            this.messages = response.items.splice(0,3)
          }).catch(console.error)
        },1000);
      }
    },

    mounted() {
      this.refresh();
      this.timeFormat();
    }
}


</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  :root{
    --abbegscolor: #0073cf;
    --white: #ffffff;
  }
  body {
    font-family: 'poppins';
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
    background-color: var(--abbegscolor);
    width: 100vw;
    height: 100vh;
    color: rgb(255, 255, 255, 0.8);
  }
  .logo {
    position: absolute;
    top: 1vw;
    left: 40vw;
    width: 20vw;
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

  padding: 50px;
  flex-grow: 1;
  width: 50%;
  position: relative;
  height: 50vh;
  border: 1px #ffffff solid;
  h1 {
    position: absolute;
    top: 20%;
    transform: translate(-50%, -50%);
    left: 50%;
    font-size: 48px;
  }
  h2 {
    font-size: 30px;
  }
  &:first-child {
    width: 100%;

    h1 {
      font-size: 40px;
      margin-top: 150px;

    }
  }

}

.message-meta {
  position: absolute;
  bottom: 0;
  transform: translateX(-50%);
  left: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}


</style>




