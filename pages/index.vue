<template>
  <section v-bind:class="{ dark: dark }" class="container">
    <img v-if="dark" class="logo" src="/appexLogoNy.png" alt="Logo"/>
    <img v-else class="logo" src="/appexLogoNyDark.png" alt="Logo"/>
    <div class="messages">
      <div class="message">
        <transition name="fade">
        <div  v-show="showMessage" class="message-container">
          <h1> “{{ messages[msgindex].fields.messagecontent }}“</h1>
          <div class="message-meta">
            <h2 class="authormessage">{{ messages[msgindex].fields.author }}</h2>
            <h2>{{ timeFormat(messages[msgindex].fields.date) }}</h2>
          </div>
        </div>
        </transition>
      </div>
    </div>

    <!--<div class="scene"></div>-->
  </section>
</template>



<script>
import moment from 'moment';
/*import appexii from '~/assets/appexii'*/
import { createClient } from '~/plugins/contentful.js'
const client = createClient()


var date = new Date().toString();
var currenthour = moment(String(date)).format('HH');
var currentmin = moment(String(date)).format('mm');
var currentday = moment(String(date)).format('DD-MM-YYYY');
var current = `${currenthour}${currentmin}`; 
export default {
    name: "ScreenMessageApplication",
    data() {
      return {
        messages: null,
        dark: false,
        showMessage: true,
        msgindex: 0
      }
    },

    asyncData () {
      return Promise.all([
        client.getEntries({
          'content_type': 'melding',
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
        return moment(String(time)).format("DD.MM.YYYY - HH:mm")
      },
      // auto update with new data regularly
      refresh() {
        setInterval(async () => {
          this.$nuxt.refresh();


          

          var https = require("https");
          var userName='ArvidWedtstein';
          var options = {
              host :"api.github.com",
              path: "/users/" +userName+ "/repos",
              method : 'GET',
              headers: {'User-Agent':'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)'}
          }

          var request = https.request(options, function(response){
              var body = '';
              response.on('data',function(chunk){
                  body+=chunk;
              });
              response.on('end',function(){

                  var json = JSON.parse(body);
                  var lastdeploymin = moment(String(json[8].pushed_at)).format('mm');
                  var lastdeployhour = moment(String(json[8].pushed_at)).format('HH');
                  var lastdeployday = moment(String(json[8].pushed_at)).format('DD-MM-YYYY');
                  var deploy = `${lastdeployhour}${lastdeploymin}`;
                  console.log(`${current} ${deploy}`)
                  if (lastdeployday == currentday && deploy != current) {
                    current = deploy;
                    date = new Date().toString();
                    currenthour = moment(String(date)).format('HH');
                    currentmin = moment(String(date)).format('mm');
                    currentday = moment(String(date)).format('DD-MM-YYYY');
                    console.log('reload!');
                    location.reload();
                    console.log(`${current} ${deploy}`)
                  }
              });

          });
          request.on('error', function(e) {
              console.error('and the error is '+e);
          });
          request.end();

          const time = new Date();
          if (time.getHours() >= 16) {
            this.dark = true;
          } else {
            this.dark = false;
          }
          //location.reload();

        }, 60 * 1000);
      },
      fadeMessage() {
        if (this.messages.length > 1) {
          setInterval(() => {
            this.showMessage = false;

            setTimeout( () => {
              if (this.msgindex >= this.messages.length - 1) {
                this.msgindex = 0;
              } else {
                this.msgindex++;
              }

              /*const firstmsg = this.messages[0];
              this.messages.shift();
              this.messages.push(firstmsg);*/

              setTimeout( () => {
                this.showMessage = true;
              }, 300)
            }, 300)


            console.log(this.messages[0])
          }, 30 * 1000)
        }
      },
    },

    mounted() {
      this.refresh();
      this.fadeMessage();
      /*
      let config = {
        container: '.scene',
        type: 'video',
        image: '',
        video: '/blob.mp4',
        // resolutionX: 400,
        // resolutionY: 400,
        // background: '#000',
        // foreground: '#FFF',
        invert: false,
        color: false
      }

      appexii(
        config
      )*/

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
  width: 100vw;
  height: 100vh;
  .scene {
    background-color: var(--light);
    color: var(--abbegsdark);
  }
}
.dark {
  .scene {
    background: var(--abbegsdark);
    color: var(--light);
  }
  .message {
    color: var(--light);
  }
}

.logo {
  position: absolute;
  top: 30px;
  left: 50vw;
  height: 100px;
  transform: translateX(-50%);
}

.authormessage {
  text-transform: capitalize;
}
.messages {
  display: flex;
  flex-wrap:wrap;
  width: 100%;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

}
.message-container {
  position: relative;
  height: 100%;
  width: 100%;
  animation: fade 12s linear infinite;
}
.message {
  display: flex;
  padding: 80px;
  flex-grow: 1;
  width: 50%;
  height: 40vh;
  position: relative;
  padding-top: 0;
  h1 {
    position: absolute;
    top: 30%;
    transform: translate(-50%, -50%);
    left: 50%;
    font-size: 25px;
    width: 100%;
    font-weight: 500;
  }
  h2 {
    font-size:20px;
    font-weight: 400;

  }
  &:first-child {
    width: 100%;
    height: 95vh;
    align-content: center;
    vertical-align: middle;
    h1 {
      font-size: 8vh;
      top: 52%;
      width: 100%;
      padding-top: 80px;
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



/*.scene {
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: -1;
  * {
    opacity: 0.8;
  }
}*/
.fade-enter-active, .fade-leave-active {
  transition: opacity 300ms ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>




