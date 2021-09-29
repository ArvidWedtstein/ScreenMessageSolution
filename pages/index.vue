<template>
  <section class="container">
  <div class= "mainUpper">
      <img class="logo" src="/appexLogoNy.png" alt="Logo">
      <h1 id="messageMain" class="infoLarge"> “Blandit nisl ac cursus nascetur aenean, platea feugiat euismod fames metus maecenas, vehicula eu himenaeos nunc. Eleifend posuere morbi fusce facilisis tellus iaculis tempus hendrerit, fermentum maximus dis quam id auctor conubia”</h1>
      <h2 id ="authorMain" class="infoSmall"> Hein Tore Tønnesen</h2>
      <h2 id ="timeMain" class="infoSmall">22.09.21 - 13:43</h2>

  </div>
  <div class = "firstLower">
    <h3 id="messageLow" class="infoLarge"> “Blandit nisl ac cursus nascetur aenean, platea feugiat euismod fames metus maecenas, vehicula eu himenaeos nunc. Eleifend posuere morbi fusce facilisis tellus iaculis tempus hendrerit, fermentum maximus dis quam id auctor conubia”</h3>
    <h2 id ="authorLow" class="infoSmall"> Hein Tore Tønnesen</h2>
    <h2 id ="timeLow" class="infoSmall">22.09.21 - 13:43</h2>



  </div>
  <div class = "secoundLower">
    <h3 id="messageLow" class="infoLarge"> “Blandit nisl ac cursus nascetur aenean, platea feugiat euismod fames metus maecenas, vehicula eu himenaeos nunc. Eleifend posuere morbi fusce facilisis tellus iaculis tempus hendrerit, fermentum maximus dis quam id auctor conubia”</h3>
    <h2 id ="authorLow" class="infoSmall">Hein Tore Tønnesen</h2>
    <h2 id ="timeLow" class="infoSmall">{{ message.fields.author }}</h2>

  </div>
    <div class="timeauthor">
      <div class="lblDateView">
        <h2 class="time">
          {{ time }}
        </h2>
      </div>
      <h3 class="author">
        {{ message.fields.author }}
      </h3>
    </div>
    <h1 class="subtitle">
      {{ message.fields.messagecontent }}
    </h1>

  </section>
</template>



<script>


import {createClient} from '~/plugins/contentful.js'

const client = createClient()

/*setInterval(function() {
  client.getContentTypes()
  .then(([message]) => {
    console.log(message.items)
    let tid = message.items[0].fields.date
    var d = tid;
    let time = `${d.slice(8, 10)}.${d.slice(5, 7)}.${d.slice(2, 4)} - ${d.slice(11, 13)}:${d.slice(14, 16)}`

    return {
      message: message.items,
      time: time
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
          let tid = message.items[0].fields.date
          var d = tid;
          let time = `${d.slice(8, 10)}.${d.slice(5, 7)}.${d.slice(2, 4)} - ${d.slice(11, 13)}:${d.slice(14, 16)}`

          return {
            message: message.items[0],
            time: time
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
  .timeauthor {
    position: absolute;
    top: 1vw;
    left: 1vw;
  }
  .logo {
    position: absolute;
    top: 1vw;
    left: 40vw;
    width: 20vw;
  }
  .lblDateView{
    
    font-weight: 400;
    }

  .title {
    font-family: 'Roboto';
    text-transform: uppercase;
    display: block;
    font-weight: 500;
    font-size: 100px;
    letter-spacing: 1px;
  }
  .author {
    vertical-align: top;
    text-align: left;
    font-weight: 10;
  }
  .subtitle {
    font-weight: 300;
    font-size: 42px;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  /* Main div structure (Top, lowLeft and lowRight)*/
  .mainUpper{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 66%;
    border: 0.5px solid #ffffff;
  }
  .firstLower{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50vw;
    height: 33%;
    border: 0.5px solid #ffffff;
  }
  .secoundLower{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50vw;
    height: 33%;
    border: 0.5px solid #ffffff;
  }



  .infoLarge{
    text-align: left;
    font-weight: 400;
    width: 70%;
    margin-top: 10%;
    margin-left: 15%;
  }
  #messageMain{
    font-size: 52px;
  }

  #messageLow{
    font-size: 25px;

  }
  #messageLow{
    font-size: 25px;



  }
  .infoSmall{
    position: absolute;
    width: 49%;
    text-align: center;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.85);
  }
  #authorMain{
    left: 0;
    margin-top: 5%;
    font-size: 45px;
  }
  #timeMain{
    right: 0;
    margin-top: 5%;
    font-size: 45px;
  }
  #authorlow{
    left: 0;
    margin-top: 15%;
    font-size: 15px;
  }
  #timeLow{
    right: 0;
    margin-top: 15%;
    font-size: 15px;
  }




</style>




