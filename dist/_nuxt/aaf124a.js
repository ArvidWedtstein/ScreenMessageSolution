(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{174:function(t,e,r){var content=r(188);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("5db11919",content,!0,{sourceMap:!1})},186:function(t,e,r){var content=r(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("6759f5ab",content,!0,{sourceMap:!1})},187:function(t,e,r){"use strict";r(174)},188:function(t,e,r){var n=r(64)(!1);n.push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),t.exports=n},189:function(t,e,r){var n=r(190),o={space:"ehmsksems2za",accessToken:"tH1SJr15R5mKOg3g4CYRJCqRQjiPTKlPWzEQFtkMia4"};t.exports={createClient:function(){return n.createClient(o)}}},220:function(t,e){},222:function(t,e){},239:function(t,e,r){"use strict";r(186)},240:function(t,e,r){var n=r(64)(!1);n.push([t.i,'.container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=n},241:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(35),r(14),r(36),r(187),r(32)),l=(Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"VueToNuxtLogo"},[r("div",{staticClass:"Triangle Triangle--two"}),t._v(" "),r("div",{staticClass:"Triangle Triangle--one"}),t._v(" "),r("div",{staticClass:"Triangle Triangle--three"}),t._v(" "),r("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports,r(189)),c=Object(l.createClient)(),d={asyncData:function(t){var e=t.env;return Promise.all([c.getEntries({"sys.id":e.CTF_PERSON_ID}),c.getEntries({content_type:e.CTF_POST_TYPE_ID,order:"-sys.createdAt"})]).then((function(t){var e=Object(n.a)(t,2),r=e[0],o=e[1];return{person:r.items[0],posts:o.items}})).catch(console.error)}},f=(r(239),Object(o.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("div",[r("app-logo"),t._v(" "),r("h1",{staticClass:"title"},[t._v("\n      TEST\n    ")]),t._v(" "),r("h2",{staticClass:"subtitle"},[t._v("\n      Nuxt.js project\n    ")]),t._v(" "),t._m(0)],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"links"},[r("a",{staticClass:"button--green",attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[t._v("Documentation")]),t._v(" "),r("a",{staticClass:"button--grey",attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank"}},[t._v("GitHub")])])}],!1,null,null,null));e.default=f.exports}}]);