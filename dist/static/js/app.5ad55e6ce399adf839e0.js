webpackJsonp([1],{"7zck":function(t,e){},"85h7":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r=a("fZjL"),n=a.n(r),i=a("Dd8w"),l=a.n(i),o=a("NYxO"),u=a("Sazm"),c=a.n(u),v=c.a.initializeApp({apiKey:"AIzaSyBf2jmiNQyaG4Br9vq1CU3-VCBd2qMe-Yo",authDomain:"fortnite-ingest.firebaseapp.com",databaseURL:"https://fortnite-ingest.firebaseio.com",projectId:"fortnite-ingest",storageBucket:"fortnite-ingest.appspot.com",messagingSenderId:"11639620297"}).database(),d={name:"App",data:function(){return{e2:1,likes:0}},methods:l()({},Object(o.b)(["updateData","setLoading"]),{like:function(){this.likes++,v.ref("/meta/likes").set(this.likes)}}),computed:l()({},Object(o.c)({loading:function(t){return t.loading}}),{color:function(){switch(this.$route.name){case"charts":return"blue darken-4";case"info":return"teal darken-4";default:return"grey darken-4"}},avatarColor:function(){switch(this.$route.name){case"charts":return"blue darken-2";case"info":return"teal darken-2";default:return"grey darken-2"}},chipColor:function(){switch(this.$route.name){case"charts":return"blue darken-3";case"info":return"teal darken-3";default:return"grey darken-3"}}}),created:function(){var t=this;this.setLoading(!0),v.ref("/data").on("value",function(e){var a=e.val(),s=n()(a).map(function(t){return a[t]});t.updateData({data:s}),t.setLoading(!1)}),v.ref("/meta/likes").on("value",function(e){t.likes=e.val()})}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:""}},[a("v-toolbar",{attrs:{app:"",fixed:"",color:t.color}},[a("router-link",{staticClass:"home-link white--text",attrs:{to:{name:"home"},exact:""}},[a("v-toolbar-title",{staticClass:"ml-0"},[t._v("Victory Squad 🎉")])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-chip",{attrs:{color:t.chipColor,"text-color":"white"},on:{click:function(e){t.like()}}},[a("v-avatar",{class:t.avatarColor},[t._v(t._s(t.likes))]),t._v(" "),a("v-icon",[t._v("favorite")])],1)],1),t._v(" "),a("v-content",[a("v-container",[a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)],1),t._v(" "),a("v-card",[a("v-bottom-nav",{attrs:{app:"",fixed:"",shift:"",value:!0,active:t.e2,color:t.color},on:{"update:active":function(e){t.e2=e}}},[a("v-btn",{attrs:{dark:"",to:{name:"charts"},exact:""}},[a("span",[t._v("Charts")]),t._v(" "),a("v-icon",[t._v("insert_chart")])],1),t._v(" "),a("v-btn",{attrs:{dark:"",to:{name:"home"},exact:""}},[a("span",[t._v("Home")]),t._v(" "),a("v-icon",[t._v("home")])],1),t._v(" "),a("v-btn",{attrs:{dark:"",to:{name:"info"},exact:""}},[a("span",[t._v("Info")]),t._v(" "),a("v-icon",[t._v("info")])],1)],1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")(d,m,!1,function(t){a("n+sJ")},null,null).exports,x=a("/ocq"),g={name:"Home",data:function(){return{paginationLifetime:{sortBy:"Wins",descending:!0},paginationModes:{p2:{sortBy:"top1",descending:!0},p9:{sortBy:"top1",descending:!0},p10:{sortBy:"top1",descending:!0},curr_p2:{sortBy:"top1",descending:!0},curr_p9:{sortBy:"top1",descending:!0},curr_p10:{sortBy:"top1",descending:!0}}}},methods:{lifetimeSort:function(t,e,a){return e?"user"===e?a?t.sort(function(t,a){var s=t[e].toLowerCase(),r=a[e].toLowerCase();return r<s?-1:r>s?1:0}):t.sort(function(t,a){var s=t[e].toLowerCase(),r=a[e].toLowerCase();return s<r?-1:s>r?1:0}):a?t.sort(function(t,a){return a[e]-t[e]}):t.sort(function(t,a){return t[e]-a[e]}):t},modeSort:function(t,e,a){return e?"user"===e?a?t.sort(function(t,a){var s=t[e].displayValue.toLowerCase(),r=a[e].displayValue.toLowerCase();return r<s?-1:r>s?1:0}):t.sort(function(t,a){var s=t[e].displayValue.toLowerCase(),r=a[e].displayValue.toLowerCase();return s<r?-1:s>r?1:0}):a?t.sort(function(t,a){return void 0===t[e]||void 0===a[e]?0:void 0!==t[e].valueDec?a[e].valueDec-t[e].valueDec:void 0!==t[e].valueInt?a[e].valueInt-t[e].valueInt:a[e].value-t[e].value}):t.sort(function(t,a){return void 0===t[e]||void 0===a[e]?0:void 0!==t[e].valueDec?t[e].valueDec-a[e].valueDec:void 0!==t[e].valueInt?t[e].valueInt-a[e].valueInt:t[e].value-a[e].value}):t}},computed:l()({},Object(o.c)({modes:function(t){return t.modes},modeData:function(t){return t.modeData},lifetime:function(t){return t.lifetime},loading:function(t){return t.loading},error:function(t){return t.error}}))},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?a("v-layout",{attrs:{"justify-center":"","align-center":""}},[a("v-alert",{attrs:{type:"error",value:t.error}},[t._v("\n      There was an error trying to get your stats. Please wait 20 seconds and try again. If you don't wait 20 seconds - I will find you...\n    ")]),t._v(" "),t.error?t._e():a("v-progress-circular",{attrs:{indeterminate:"",size:70,width:7}})],1):t._e(),t._v(" "),t.loading?t._e():a("v-layout",{attrs:{column:""}},[a("v-flex",[a("h3",{staticClass:"pb-2"},[t._v("Lifetime")]),t._v(" "),a("v-data-table",{staticClass:"elevation-2",attrs:{headers:t.lifetime.fields,items:t.lifetime.data,"custom-sort":t.lifetimeSort,"must-sort":!0,pagination:t.paginationLifetime,"hide-actions":""},on:{"update:pagination":function(e){t.paginationLifetime=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[a("router-link",{attrs:{tag:"tr",to:{name:"player",params:{id:e.item.user}}}},t._l(t.lifetime.fields,function(s){return a("td",{key:s.value,attrs:{nowrap:""}},[t._v("\n              "+t._s(e.item[s.value]?e.item[s.value]:"-")+"\n            ")])}))]}}])})],1),t._v(" "),t._l(t.modes,function(e){return a("v-flex",{key:e.code,staticClass:"mt-3"},[a("h3",{staticClass:"pb-2"},[t._v(t._s(e.name))]),t._v(" "),a("v-data-table",{staticClass:"elevation-2",attrs:{headers:t.modeData[e.code].fields,items:t.modeData[e.code].data,"custom-sort":t.modeSort,"must-sort":!0,pagination:t.paginationModes[e.code],"hide-actions":""},on:{"update:pagination":function(a){t.$set(t.paginationModes,e.code,a)}},scopedSlots:t._u([{key:"items",fn:function(s){return[a("router-link",{attrs:{tag:"tr",to:{name:"player",params:{id:s.item.user.displayValue}}}},t._l(t.modeData[e.code].fields,function(e){return a("td",{key:e.value},[t._v("\n              "+t._s(s.item[e.value]?s.item[e.value].displayValue:"-")+"\n            ")])}))]}}])})],1)})],2)],1)},staticRenderFns:[]},f=a("VU/8")(g,h,!1,null,null,null).exports,_=a("UlOv"),j={extends:_.b,mixins:[_.c.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},y=a("VU/8")(j,null,!1,null,null,null).exports,k=c.a.database(),b={name:"player",components:{LineChart:y},data:function(){return{active:null,chartData:{},options:{responsive:!0,maintainAspectRatio:!1},groupMatchesDates:[],groupedMatches:{},groupedMatchesSummaries:{},bests:{},weeklyTableHeaders:[{text:"Week",value:"week"},{text:"Kills",value:"k",align:"right"},{text:"Kills/Match",value:"kpm",align:"right"},{text:"Matches",value:"mp",align:"right"},{text:"Win %",value:"wp",align:"right"},{text:"Score",value:"s",align:"right"},{text:"Wins",value:"t1",align:"right"},{text:"Top 3",value:"t3",align:"right"},{text:"Top 5",value:"t5",align:"right"},{text:"Top 6",value:"t6",align:"right"},{text:"Top 10",value:"t10",align:"right"},{text:"Top 12",value:"t12",align:"right"},{text:"Top 25",value:"t25",align:"right"},{text:"Regression",value:"r",align:"right"}],weekly:[],pagination:{sortBy:"week",descending:!0}}},created:function(){var t=this;k.ref("/bests/"+this.$route.params.id).once("value",function(e){t.bests=e.val()}),k.ref("/weeklySummary/"+this.$route.params.id).once("value",function(e){t.weekly=e.val()}),k.ref("/matches/"+this.$route.params.id).orderByChild("d").limitToLast(30).once("value",function(e){var a=e.val(),s=n()(a).map(function(t){return a[t]}).reverse();s.forEach(function(e){var a=new Date(e.d).toLocaleDateString().substring(0,10);void 0===t.groupedMatches[a]&&(t.groupMatchesDates.push(a),t.groupedMatches[a]=[]),t.groupedMatches[a].push(e)}),t.groupMatchesDates.forEach(function(e){var a={m:0,k:0,kpm:0,t1:0,t3:0,t6:0};t.groupedMatches[e].forEach(function(t){a.m++,a.k+=t.k?t.k:0,a.t1+=t.t1?t.t1:0,a.t3+=t.t3?t.t3:0,a.t6+=t.t6?t.t6:0}),a.kpm=t.getKPM(a.k,a.m),t.groupedMatchesSummaries[e]=a});var r=s.map(function(t){return new Date(t.d).toLocaleDateString()}).reverse(),i=[{label:"Kills",backgroundColor:"#2196F3",data:s.map(function(t){return t.k}).reverse()}];t.$set(t,"chartData",{labels:r,datasets:i})})},computed:l()({},Object(o.c)({modes:function(t){return t.modes},loading:function(t){return t.loading},error:function(t){return t.error}})),methods:{getMode:function(t){return t?this.modes.find(function(e){return e.code===t}).name:"-"},getDate:function(t){return new Date(t).toLocaleString()},cleanChange:function(t){return t.toFixed(1)},getKPM:function(t,e){return t?(t/(e||1)).toFixed(2):0},getItems:function(t){return n()(t).map(function(e){var a=t[e];return a.week=e,a})}},filters:{percent:function(t){return(100*t).toFixed(1)},toFix:function(t,e){return t?parseFloat(t).toFixed(e):""},number:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",[a("v-flex",[a("div",{staticClass:"player-code"},[t._v(t._s(t.$route.params.id))])])],1),t._v(" "),a("v-tabs",{attrs:{"slider-color":"yellow",grow:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("v-tab",{attrs:{ripple:""}},[t._v("Daily")]),t._v(" "),a("v-tab",{attrs:{ripple:""}},[t._v("Weekly")]),t._v(" "),a("v-tab",{attrs:{ripple:""}},[t._v("Bests")]),t._v(" "),a("v-tab",{attrs:{ripple:""}},[t._v("Chart")]),t._v(" "),a("v-tab-item",t._l(t.groupMatchesDates,function(e){return a("div",{key:e},[a("v-layout",[a("v-flex",{staticClass:"mt-3"},[a("h3",[t._v(t._s(e))]),t._v(" "),a("v-card",[a("v-card-title",[a("v-layout",{attrs:{row:"",wrap:"","justify-space-between":""}},[a("v-flex",{staticClass:"pa-1 text-xs-center",attrs:{xl2:"",lg2:"",md2:"",sm4:"",xs6:""}},[a("div",{staticClass:"big grey--text text--lighten-1"},[t._v("Matches")]),t._v(" "),a("div",{staticClass:"big-num"},[t._v(t._s(t.groupedMatchesSummaries[e].m))])]),t._v(" "),a("v-flex",{staticClass:"pa-1 text-xs-center",attrs:{xl2:"",lg2:"",md2:"",sm4:"",xs6:""}},[a("h4",{staticClass:"big grey--text text--lighten-1"},[t._v("Kills")]),t._v(" "),a("div",{staticClass:"big-num"},[t._v(t._s(t.groupedMatchesSummaries[e].k))])]),t._v(" "),a("v-flex",{staticClass:"pa-1 text-xs-center",attrs:{xl2:"",lg2:"",md2:"",sm4:"",xs6:""}},[a("h4",{staticClass:"big grey--text text--lighten-1"},[t._v("KPM")]),t._v(" "),a("div",{staticClass:"big-num"},[t._v(t._s(t.groupedMatchesSummaries[e].kpm))])]),t._v(" "),a("v-flex",{staticClass:"pa-1 text-xs-center",attrs:{xl2:"",lg2:"",md2:"",sm4:"",xs6:""}},[a("h4",{staticClass:"big grey--text text--lighten-1"},[t._v("Wins")]),t._v(" "),a("div",{staticClass:"big-num"},[t._v(t._s(t.groupedMatchesSummaries[e].t1))])]),t._v(" "),a("v-flex",{staticClass:"pa-1 text-xs-center",attrs:{xl2:"",lg2:"",md2:"",sm4:"",xs6:""}},[a("h4",{staticClass:"big grey--text text--lighten-1"},[t._v("Top 3")]),t._v(" "),a("div",{staticClass:"big-num"},[t._v(t._s(t.groupedMatchesSummaries[e].t3))])]),t._v(" "),a("v-flex",{staticClass:"pa-1 text-xs-center",attrs:{xl2:"",lg2:"",md2:"",sm4:"",xs6:""}},[a("h4",{staticClass:"big grey--text text--lighten-1"},[t._v("Top 6")]),t._v(" "),a("div",{staticClass:"big-num"},[t._v(t._s(t.groupedMatchesSummaries[e].t6))])])],1)],1)],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.groupedMatches[e],function(e){return a("v-flex",{key:e.id,staticClass:"pa-3",attrs:{xl3:"",lg4:"",md6:"",xs12:""}},[a("v-card",{attrs:{color:1===e.t1?"green":""}},[a("v-card-title",[a("v-flex",{attrs:{column:""}},[t._o(a("v-flex",{staticClass:"big",attrs:{"d-flex":"",row:""}},[a("div",[t._v(t._s(t.getMode(e.p))+" ")]),t._v(" "),a("div",{staticClass:"text-xs-right"},[e.c>0?a("v-icon",{attrs:{color:"green accent-3"}},[t._v("keyboard_arrow_up")]):t._e(),t._v(" "),e.c<0?a("v-icon",{attrs:{color:"red"}},[t._v("keyboard_arrow_down")]):t._e(),t._v("\n                      "+t._s(t.cleanChange(e.c))+"\n                    ")],1)]),0,e.id),t._v(" "),a("v-flex",{attrs:{"d-flex":"",row:""}},[a("div",[a("span",{class:{"red--text":!e.k}},[t._v(t._s(e.k)+" "+t._s(1===e.k?"kill":"kills"))]),t._v(" "),e.t1?t._e():a("span",[e.t3?a("small",{staticClass:"yellow--text ml-3"},[t._v("Top 3")]):t._e(),t._v(" "),e.t5?a("small",{staticClass:"yellow--text ml-3"},[t._v("Top 5")]):t._e(),t._v(" "),e.t6&&!e.t3?a("small",{staticClass:"yellow--text ml-3"},[t._v("Top 6")]):t._e(),t._v(" "),e.t10?a("small",{staticClass:"yellow--text ml-3"},[t._v("Top 10")]):t._e()])]),t._v(" "),a("div",{staticClass:"text-xs-right"},[t._v("+"+t._s(e.s)+" Score")])]),t._v(" "),t._o(a("small",{class:1===e.t1?"white--text":"grey--text"},[t._v(t._s(t.getDate(e.d)))]),1,e.id)],1)],1)],1)],1)}))],1)})),t._v(" "),a("v-tab-item",t._l(t.weekly,function(e,s){return a("div",{key:s,staticClass:"mt-3"},[a("h3",[t._v(t._s(s))]),t._v(" "),a("v-data-table",{staticClass:"elevation-2",attrs:{headers:t.weeklyTableHeaders,items:t.getItems(e),"item-key":"week","must-sort":!0,pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.week))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.k))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t._f("toFix")(e.item.kpm,2)))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.mp))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t._f("percent")(e.item.wp)))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t._f("number")(e.item.s)))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t1))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t3))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t5))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t6))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t10))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t12))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t25))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.lr.gradient))])]}}])})],1)})),t._v(" "),a("v-tab-item",[t.bests&&t.bests.kills?a("v-card",{staticClass:"my-3"},[a("v-card-title",[a("v-layout",{attrs:{"justify-space-between":""}},[a("h1",[t._v("Kills")]),t._v(" "),a("h1",[t._v(t._s(t.bests.kills.k))])])],1),t._v(" "),a("small",{staticClass:"grey--text pl-3"},[t._v(t._s(t.getDate(t.bests.kills.d)))])],1):t._e()],1),t._v(" "),a("v-tab-item",{attrs:{lazy:""}},[a("v-flex",{staticClass:"mt-3"},[a("v-card",[a("v-card-text",[a("h3",[t._v("Last 30 Matches")]),t._v(" "),a("line-chart",{attrs:{"chart-data":t.chartData,options:t.options}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var C=a("VU/8")(b,w,!1,function(t){a("85h7")},"data-v-f5c81362",null).exports,M={data:function(){return{emojis:["🍺","🍓","🥚","🥘","🍌","🍗","🍟","🍊","🥐","🥜","🍕","🍔","🍪","🥤","🍿","🥧","🍞","🍳","☕️","🍩","🍉"]}},computed:{getEmote:function(){return this.emojis[Math.floor(Math.random()*this.emojis.length)]}}},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mb-3 grey--text"},[t._v("To be played when exiting the bus...")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"mt-3 grey--text"},[t._v("Made with "+t._s(t.getEmote)+" by "),a("a",{attrs:{href:"http://rametta.org"}},[t._v("Jason")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("audio",{attrs:{controls:""}},[e("source",{attrs:{src:"static/freefallin.mp3",type:"audio/mpeg"}}),this._v("\n    Your browser does not support the audio element.\n  ")])}]};var T=a("VU/8")(M,S,!1,function(t){a("PWea")},"data-v-5c5bdd1c",null).exports,D={extends:_.a,mixins:[_.c.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},P=a("VU/8")(D,null,!1,null,null,null).exports,K=c.a.database(),z={components:{DoughnutChart:P},data:function(){return{chartData:{labels:[],datasets:[]},options:{responsive:!0,maintainAspectRatio:!1},colors:["#2196F3","#FF5722","#00E676","#1A237E","#F50057","#E1BEE7","#BBDEFB","#00B8D4","#4CAF50","#795548","#607D8B"]}},created:function(){var t=this;K.ref("/data").once("value",function(e){var a=e.val(),s=n()(a),r=s.map(function(t){var e=a[t].lifeTimeStats.find(function(t){return"Kills"===t.key});return e?e.value:0}),i={label:"Kills",backgroundColor:t.colors,data:r};t.chartData={labels:s,datasets:[i]}})}},R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-card-title",[a("h3",[t._v("Lifetime Kills")])]),t._v(" "),a("v-card-text",[a("v-flex",[a("doughnut-chart",{attrs:{"chart-data":t.chartData,options:t.options}})],1)],1)],1)],1)},staticRenderFns:[]},F=a("VU/8")(z,R,!1,null,null,null).exports;s.a.use(x.a);var L=new x.a({mode:"history",routes:[{path:"/",name:"home",component:f},{path:"/player/:id",name:"player",component:C},{path:"/charts",name:"charts",component:F},{path:"/info",name:"info",component:T}]});s.a.use(o.a);var E={updateData:function(t,e){var a=e.data;t.lifetime.data=a.map(function(t){t.lifeTimeStatsMap=t.lifeTimeStats.reduce(function(t,e){return t[e.key.replace(/\s/g,"")]=e.value,t},{});var e=new Date(t.fetchTime);return t.lifeTimeStatsMap.user=t.epicUserHandle,t.lifeTimeStatsMap.lastUpdate=e.toLocaleString(),t.lifeTimeStatsMap}),t.modes.forEach(function(e){t.modeData[e.code].data=a.filter(function(t){return void 0!==t.stats[e.code]}).map(function(t){return t.stats[e.code].user={displayValue:t.epicUserHandle},t.stats[e.code]})})},setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e}},W=new o.a.Store({state:{modes:[{name:"Squad",code:"p9"},{name:"Duo",code:"p10"},{name:"Solo",code:"p2"},{name:"Current Season Squad",code:"curr_p9"},{name:"Current Season Duo",code:"curr_p10"},{name:"Current Season Solo",code:"curr_p2"}],lifetime:{fields:[{text:"User",value:"user"},{text:"Matches",value:"MatchesPlayed"},{text:"Wins",value:"Wins"},{text:"Win %",value:"Win%"},{text:"Top 3",value:"Top3s"},{text:"Top 5",value:"Top5s"},{text:"Top 6",value:"Top6s"},{text:"Top 12",value:"Top12s"},{text:"Top 25",value:"Top25s"},{text:"Kills",value:"Kills"},{text:"KD",value:"K/d"},{text:"Kills/Min",value:"KillsPerMin"},{text:"Score",value:"Score"},{text:"Avg. Survival",value:"AvgSurvivalTime"},{text:"Updated",value:"lastUpdate"}],data:[]},modeData:{p9:{fields:[{text:"User",value:"user"},{text:"Matches",value:"matches"},{text:"Wins",value:"top1"},{text:"Win %",value:"winRatio"},{text:"Top 3",value:"top3"},{text:"Top 6",value:"top6"},{text:"Kills",value:"kills"},{text:"KD",value:"kd"},{text:"Kills/Min",value:"kpm"},{text:"Kills/Game",value:"kpg"},{text:"Score/Min",value:"scorePerMin"},{text:"Score/Game",value:"scorePerMatch"},{text:"Score",value:"score"},{text:"Mins. Played",value:"minutesPlayed"},{text:"Avg. Time Played",value:"avgTimePlayed"},{text:"TRN Rating",value:"trnRating"}],data:[]},p10:{fields:[{text:"User",value:"user"},{text:"Matches",value:"matches"},{text:"Wins",value:"top1"},{text:"Win %",value:"winRatio"},{text:"Top 5",value:"top5"},{text:"Top 12",value:"top12"},{text:"Kills",value:"kills"},{text:"KD",value:"kd"},{text:"Kills/Min",value:"kpm"},{text:"Kills/Game",value:"kpg"},{text:"Score/Min",value:"scorePerMin"},{text:"Score/Game",value:"scorePerMatch"},{text:"Score",value:"score"},{text:"Mins. Played",value:"minutesPlayed"},{text:"Avg. Time Played",value:"avgTimePlayed"},{text:"TRN Rating",value:"trnRating"}],data:[]},p2:{fields:[{text:"User",value:"user"},{text:"Matches",value:"matches"},{text:"Wins",value:"top1"},{text:"Win %",value:"winRatio"},{text:"Top 10",value:"top10"},{text:"Top 25",value:"top25"},{text:"Kills",value:"kills"},{text:"KD",value:"kd"},{text:"Kills/Min",value:"kpm"},{text:"Kills/Game",value:"kpg"},{text:"Score/Min",value:"scorePerMin"},{text:"Score/Game",value:"scorePerMatch"},{text:"Score",value:"score"},{text:"Mins. Played",value:"minutesPlayed"},{text:"Avg. Time Played",value:"avgTimePlayed"},{text:"TRN Rating",value:"trnRating"}],data:[]},curr_p9:{fields:[{text:"User",value:"user"},{text:"Matches",value:"matches"},{text:"Wins",value:"top1"},{text:"Win %",value:"winRatio"},{text:"Top 3",value:"top3"},{text:"Top 6",value:"top6"},{text:"Kills",value:"kills"},{text:"KD",value:"kd"},{text:"Kills/Min",value:"kpm"},{text:"Kills/Game",value:"kpg"},{text:"Score/Min",value:"scorePerMin"},{text:"Score/Game",value:"scorePerMatch"},{text:"Score",value:"score"},{text:"Mins. Played",value:"minutesPlayed"},{text:"Avg. Time Played",value:"avgTimePlayed"},{text:"TRN Rating",value:"trnRating"}],data:[]},curr_p10:{fields:[{text:"User",value:"user"},{text:"Matches",value:"matches"},{text:"Wins",value:"top1"},{text:"Win %",value:"winRatio"},{text:"Top 5",value:"top5"},{text:"Top 12",value:"top12"},{text:"Kills",value:"kills"},{text:"KD",value:"kd"},{text:"Kills/Min",value:"kpm"},{text:"Kills/Game",value:"kpg"},{text:"Score/Min",value:"scorePerMin"},{text:"Score/Game",value:"scorePerMatch"},{text:"Score",value:"score"},{text:"Mins. Played",value:"minutesPlayed"},{text:"Avg. Time Played",value:"avgTimePlayed"},{text:"TRN Rating",value:"trnRating"}],data:[]},curr_p2:{fields:[{text:"User",value:"user"},{text:"Matches",value:"matches"},{text:"Wins",value:"top1"},{text:"Win %",value:"winRatio"},{text:"Top 10",value:"top10"},{text:"Top 25",value:"top25"},{text:"Kills",value:"kills"},{text:"KD",value:"kd"},{text:"Kills/Min",value:"kpm"},{text:"Kills/Game",value:"kpg"},{text:"Score/Min",value:"scorePerMin"},{text:"Score/Game",value:"scorePerMatch"},{text:"Score",value:"score"},{text:"Mins. Played",value:"minutesPlayed"},{text:"Avg. Time Played",value:"avgTimePlayed"},{text:"TRN Rating",value:"trnRating"}],data:[]}},loading:!1,error:!1},mutations:E}),U=a("3EgV"),B=a.n(U);a("7zck");s.a.use(B.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:L,store:W,components:{App:p},template:"<App/>"})},PWea:function(t,e){},"n+sJ":function(t,e){},uslO:function(t,e,a){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(t){return a(n(t))}function n(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(s)},r.resolve=n,t.exports=r,r.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.5ad55e6ce399adf839e0.js.map