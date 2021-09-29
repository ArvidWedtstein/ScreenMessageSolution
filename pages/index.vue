<template>
  <section class="container">
    <li v-for="item in messagecontent" :key="item">
      {{ item }}
    </li>
     <div class= "mainUpper">
      <img class="logo" src="/appexLogoNy.png" alt="Logo">
      <h1 style="font-size: 3vw; margin-top: 5%;" class="infoLarge message"> “{{ `${messagecontent[0] != '' ? `${messagecontent[0]}` : ''}` }}”</h1>
      <h2 style="font-size: 2.3vw" class="authorMain infoSmall">{{ `${author[0] != '' ? `${author[0]}` : ''}` }}</h2>
      <h2 style="font-size: 2.3vw" class="time infoSmall">{{ `${time[0] != '' ? `${time[0]}` : ''}` }}</h2>

  </div>
    <div  style="right:0;" class = "Lower">
      <h3 style="font-size: 1.5vw" class="infoLarge message"> “{{ `${messagecontent[1] != '' ? `${messagecontent[1]}` : ''}` }}”</h3>
      <h2 style="font-size: 0.8vw" class="authorMain infoSmall">{{ `${author[1] != '' ? `${author[1]}` : ''}` }}</h2>
      <h2 style="font-size: 0.8vw" class="time infoSmall">{{ `${time[1] != '' ? `${time[1]}` : ''}` }}</h2>



    </div>
    <div style="left:0;" class = "Lower">
      <h1 style="font-size: 1.5vw" class="infoLarge message"> “{{ `${messagecontent[2] != '' ? `${messagecontent[2]}` : ''}` }}”</h1>
      <h2 style="font-size: 0.8vw" class="authorMain infoSmall">{{ `${author[2] != '' ? `${author[2]}` : ''}` }}</h2>
      <h2 style="font-size: 0.8vw" class="time infoSmall">{{ `${time[2] != '' ? `${time[2]}` : ''}` }}</h2>

    </div>
  </section>
</template>



<script>


import {createClient} from '~/plugins/contentful.js'

const client = createClient()

/*setInterval(function() {
  client.getContentTypes()
  .then(([message]) => {
          const author = [];
          const messagecontent = []
          const tid = [];
          console.log(message.items)
          for (let i = 0; i < message.items.length; i++) {
            messagecontent.push(message.items[0].fields.messagecontent)
          }
          if (message.items[0].fields.messagecontent && message.items[0].fields.date && message.items[0].fields.author) {
            messagecontent.push(message.items[0].fields.messagecontent)
            author.push(message.items[0].fields.author)
            var d = message.items[0].fields.date;
            var t = `${d.slice(8, 10)}.${d.slice(5, 7)}.${d.slice(2, 4)} - ${d.slice(11, 13)}:${d.slice(14, 16)}`
            tid.push(t)
          } else {
            messagecontent.push('d')
            author.push('d')
            tid.push('d')
          }
          if (message.items[1].fields.messagecontent) {
            messagecontent.push(message.items[1].fields.messagecontent && message.items[1].fields.date && message.items[1].fields.author)
            author.push(message.items[1].fields.author)
            var d2 = message.items[1].fields.date;
            var t2 = `${d2.slice(8, 10)}.${d2.slice(5, 7)}.${d2.slice(2, 4)} - ${d2.slice(11, 13)}:${d2.slice(14, 16)}`
            tid.push(t2)
          } else {
            messagecontent.push('d')
            author.push('d')
            tid.push('d')
          }
          if (message.items[2].fields.messagecontent && message.items[2].fields.date && message.items[2].fields.author) {
            messagecontent.push(message.items[2].fields.messagecontent)
            author.push(message.items[2].fields.author)
            var d3 = message.items[2].fields.date;
            var t3 = `${d3.slice(8, 10)}.${d3.slice(5, 7)}.${d.slice(2, 4)} - ${d3.slice(11, 13)}:${d3.slice(14, 16)}`
            tid.push(t3)
          } else {
            messagecontent.push('d')
            author.push('d')
            tid.push('d')
          }

          return {
            author: author,
            messagecontent: messagecontent,
            time: tid
          } 
  })
  .catch(console.error);
}, 5000);*/



export default {
    name: "ScreenMessageApplication",
    // `env` is available in the context object
    
    asyncData ({env}) {
      return Promise.all([

        // fetch all message posts sorted by creation date
        client.getEntries({
          'content_type': env.CTF_POST_TYPE_ID,
          order: '-sys.createdAt'
        }),

        ]).then(([message]) => {
          
          const author = [];
          const messagecontent = []
          const tid = [];

          for (let i = 0; i < message.items.length; i++) {
            messagecontent.push(message.items[i].fields.messagecontent)
            author.push(message.items[i].fields.author);
            var d = message.items[i].fields.date;
            var t = `${d.slice(8, 10)}.${d.slice(5, 7)}.${d.slice(2, 4)} - ${d.slice(11, 13)}:${d.slice(14, 16)}`
            tid.push(t)
          }
          /*console.log(tid)
          console.log(author)
          console.log(messagecontent)*/
          return {
            author: author,
            messagecontent: messagecontent,
            time: tid
          } 
          
      }).catch(console.error)
    }
}


</script>
<style>
  :root{
    --abbegscolor: #0073cf;
    --white: #ffffff;
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



  /* Main div structure (Top, lowLeft and lowRight)*/
  .mainUpper{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 67%;
    border: 0.5px solid #ffffff;

  }
  .Lower{
    position: absolute;
    bottom: 0;
    width: 50vw;
    height: 33%;
    border: 0.5px solid #ffffff;
  }





  .message{
    font-size: 2.7vw;
    padding: 4vw;
    text-align: center !important;
  }

  .infoSmall{
    
    /*width: 49%;*/
    text-align: center;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.85);
  }
  .authorMain{
    left: 0;
    bottom: 0 !important;
    padding: 1vw;
    position: absolute;
  }
  .time{
    right: 0;
    padding: 1vw;
    margin-top: 10%;
    bottom: 0;
    position: absolute;
  }





</style>




