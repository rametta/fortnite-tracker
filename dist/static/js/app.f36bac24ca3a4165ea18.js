webpackJsonp([1],{"0BC3":function(t,e){},"2Be+":function(t,e){},"7f/M":function(t,e){},"7zck":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("fZjL"),n=a.n(i),r=a("Dd8w"),l=a.n(r),o=a("NYxO"),u=a("Sazm"),c=a.n(u),v=c.a.initializeApp({apiKey:"AIzaSyBf2jmiNQyaG4Br9vq1CU3-VCBd2qMe-Yo",authDomain:"fortnite-ingest.firebaseapp.com",databaseURL:"https://fortnite-ingest.firebaseio.com",projectId:"fortnite-ingest",storageBucket:"fortnite-ingest.appspot.com",messagingSenderId:"11639620297"}).database(),d={name:"App",data:function(){return{e2:1,likes:0,ip:"",online:0}},methods:l()({},Object(o.b)(["updateData","setLoading"]),{like:function(){this.likes++,v.ref("/meta/likes").set(this.likes)},setFalse:function(){return v.ref("/ip/"+this.ip).set(!1),null}}),computed:l()({},Object(o.c)({loading:function(t){return t.loading}}),{color:function(){switch(this.$route.name){case"weekly":return"blue darken-4";case"feed":return"teal darken-4";default:return"grey darken-4"}},avatarColor:function(){switch(this.$route.name){case"weekly":return"blue darken-2";case"feed":return"teal darken-2";default:return"grey darken-2"}},chipColor:function(){switch(this.$route.name){case"weekly":return"blue darken-3";case"feed":return"teal darken-3";default:return"grey darken-3"}}}),created:function(){var t=this;window.onbeforeunload=this.setFalse,this.setLoading(!0),v.ref("/data").on("value",function(e){var a=e.val(),s=n()(a).map(function(t){return a[t]});t.updateData({data:s}),t.setLoading(!1)}),v.ref("/meta/likes").on("value",function(e){t.likes=e.val()}),v.ref("/ip").on("value",function(e){var a=e.val(),s=n()(a);t.online=s.filter(function(t){return a[t]}).length}),fetch("https://api.ipify.org/?format=json").then(function(t){return t.json()}).then(function(t){return t.ip.replace(/\./g,"-")}).then(function(e){t.ip=e,v.ref("/ip/"+e).set(!0)})},beforeDestroy:function(){this.setFalse()},destroyed:function(){this.setFalse()}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:""}},[a("v-toolbar",{attrs:{app:"",fixed:"",color:t.color}},[a("router-link",{staticClass:"home-link white--text",attrs:{to:{name:"home"},exact:""}},[a("v-toolbar-title",{staticClass:"ml-0"},[t._v("Victory Squad 🎉")])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-chip",{attrs:{color:t.chipColor,"text-color":"white"},on:{click:function(e){t.like()}}},[a("v-avatar",{class:t.avatarColor},[t._v(t._s(t.likes))]),t._v(" "),a("v-icon",[t._v("favorite")])],1)],1),t._v(" "),a("v-content",[a("v-container",[a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)],1),t._v(" "),a("v-card",[a("v-bottom-nav",{attrs:{app:"",fixed:"",value:!0,active:t.e2,color:t.color},on:{"update:active":function(e){t.e2=e}}},[a("v-btn",{attrs:{dark:"",to:{name:"weekly"},exact:""}},[a("span",[t._v("Weekly")]),t._v(" "),a("v-icon",[t._v("insert_chart")])],1),t._v(" "),a("v-btn",{attrs:{dark:"",to:{name:"home"},exact:""}},[a("span",[t._v("Home")]),t._v(" "),a("v-icon",[t._v("home")])],1),t._v(" "),a("v-btn",{attrs:{dark:"",to:{name:"feed"},exact:""}},[a("span",[t._v("Feed")]),t._v(" "),a("v-icon",[t._v("flash_on")])],1)],1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")(d,m,!1,function(t){a("0BC3")},null,null).exports,x=a("/ocq"),g={name:"Home",data:function(){return{paginationLifetime:{sortBy:"Wins",descending:!0},paginationModes:{p2:{sortBy:"top1",descending:!0},p9:{sortBy:"top1",descending:!0},p10:{sortBy:"top1",descending:!0},curr_p2:{sortBy:"top1",descending:!0},curr_p9:{sortBy:"top1",descending:!0},curr_p10:{sortBy:"top1",descending:!0}}}},methods:{lifetimeSort:function(t,e,a){return e?"user"===e?a?t.sort(function(t,a){var s=t[e].toLowerCase(),i=a[e].toLowerCase();return i<s?-1:i>s?1:0}):t.sort(function(t,a){var s=t[e].toLowerCase(),i=a[e].toLowerCase();return s<i?-1:s>i?1:0}):a?t.sort(function(t,a){return a[e]-t[e]}):t.sort(function(t,a){return t[e]-a[e]}):t},modeSort:function(t,e,a){return e?"user"===e?a?t.sort(function(t,a){var s=t[e].displayValue.toLowerCase(),i=a[e].displayValue.toLowerCase();return i<s?-1:i>s?1:0}):t.sort(function(t,a){var s=t[e].displayValue.toLowerCase(),i=a[e].displayValue.toLowerCase();return s<i?-1:s>i?1:0}):a?t.sort(function(t,a){return void 0===t[e]||void 0===a[e]?0:void 0!==t[e].valueDec?a[e].valueDec-t[e].valueDec:void 0!==t[e].valueInt?a[e].valueInt-t[e].valueInt:a[e].value-t[e].value}):t.sort(function(t,a){return void 0===t[e]||void 0===a[e]?0:void 0!==t[e].valueDec?t[e].valueDec-a[e].valueDec:void 0!==t[e].valueInt?t[e].valueInt-a[e].valueInt:t[e].value-a[e].value}):t}},computed:l()({},Object(o.c)({modes:function(t){return t.modes},modeData:function(t){return t.modeData},lifetime:function(t){return t.lifetime},loading:function(t){return t.loading},error:function(t){return t.error}}))},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?a("v-layout",{attrs:{"justify-center":"","align-center":""}},[a("v-alert",{attrs:{type:"error",value:t.error}},[t._v("\n      There was an error trying to get your stats. Please wait 20 seconds and try again. If you don't wait 20 seconds - I will find you...\n    ")]),t._v(" "),t.error?t._e():a("v-progress-circular",{attrs:{indeterminate:"",size:70,width:7}})],1):t._e(),t._v(" "),t.loading?t._e():a("v-layout",{attrs:{column:""}},[a("v-flex",[a("h3",{staticClass:"pb-2"},[t._v("Lifetime")]),t._v(" "),a("v-data-table",{staticClass:"elevation-2",attrs:{headers:t.lifetime.fields,items:t.lifetime.data,"custom-sort":t.lifetimeSort,"must-sort":!0,pagination:t.paginationLifetime,"hide-actions":""},on:{"update:pagination":function(e){t.paginationLifetime=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[a("router-link",{attrs:{tag:"tr",to:{name:"player",params:{id:e.item.user}}}},t._l(t.lifetime.fields,function(s){return a("td",{key:s.value,attrs:{nowrap:""}},[t._v("\n              "+t._s(e.item[s.value]?e.item[s.value]:"-")+"\n            ")])}))]}}])})],1),t._v(" "),t._l(t.modes,function(e){return a("v-flex",{key:e.code,staticClass:"mt-3"},[a("h3",{staticClass:"pb-2"},[t._v(t._s(e.name))]),t._v(" "),a("v-data-table",{staticClass:"elevation-2",attrs:{headers:t.modeData[e.code].fields,items:t.modeData[e.code].data,"custom-sort":t.modeSort,"must-sort":!0,pagination:t.paginationModes[e.code],"hide-actions":""},on:{"update:pagination":function(a){t.$set(t.paginationModes,e.code,a)}},scopedSlots:t._u([{key:"items",fn:function(s){return[a("router-link",{attrs:{tag:"tr",to:{name:"player",params:{id:s.item.user.displayValue}}}},t._l(t.modeData[e.code].fields,function(e){return a("td",{key:e.value},[t._v("\n              "+t._s(s.item[e.value]?s.item[e.value].displayValue:"-")+"\n            ")])}))]}}])})],1)})],2)],1)},staticRenderFns:[]},_=a("VU/8")(g,f,!1,null,null,null).exports,h=a("Gu7T"),k=a.n(h),y=a("UlOv"),j={extends:y.a,mixins:[y.b.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},w=a("VU/8")(j,null,!1,null,null,null).exports,C=c.a.database(),b={name:"player",components:{LineChart:w},data:function(){return{dropdowns:{daily:"Daily",weekly:"Weekly",bests:"Bests",charts:"Charts"},active:"Daily",chartData:{},weekChartData:{},options:{responsive:!0,maintainAspectRatio:!1},groupMatchesDates:[],groupedMatches:{},groupedMatchesSummaries:{},bests:{},weeklyTableHeaders:[{text:"Week",value:"week"},{text:"Kills",value:"k",align:"right"},{text:"Kills/Match",value:"kpm",align:"right"},{text:"Matches",value:"mp",align:"right"},{text:"Win %",value:"wp",align:"right"},{text:"Score",value:"s",align:"right"},{text:"Wins",value:"t1",align:"right"},{text:"Top 3",value:"t3",align:"right"},{text:"Top 5",value:"t5",align:"right"},{text:"Top 6",value:"t6",align:"right"},{text:"Top 10",value:"t10",align:"right"},{text:"Top 12",value:"t12",align:"right"},{text:"Top 25",value:"t25",align:"right"},{text:"Regression",value:"r",align:"right"}],weekly:[],pagination:{sortBy:"week",descending:!0}}},created:function(){var t=this;C.ref("/bests/"+this.$route.params.id).once("value",function(e){t.bests=e.val()}),C.ref("/weeklySummary/"+this.$route.params.id).once("value",function(e){var a,s,i=e.val();t.weekly=i;var r=n()(i),l=r.map(function(t){return{year:t,weeks:n()(i[t])}}),o=(a=[]).concat.apply(a,k()(l.map(function(t){return t.weeks.map(function(e){return t.year+"."+e})}))),u=[{label:"Win %",backgroundColor:"#f4424e",data:(s=[]).concat.apply(s,k()(r.map(function(t){return n()(i[t]).map(function(e){return parseFloat(100*i[t][e].wp).toFixed(2)})})))}];t.$set(t,"weekChartData",{labels:o,datasets:u})}),C.ref("/matches/"+this.$route.params.id).orderByChild("d").limitToLast(30).once("value",function(e){var a=e.val(),s=n()(a).map(function(t){return a[t]}).reverse();s.forEach(function(e){var a=new Date(e.d).toLocaleDateString().substring(0,10);void 0===t.groupedMatches[a]&&(t.groupMatchesDates.push(a),t.groupedMatches[a]=[]),t.groupedMatches[a].push(e)}),t.groupMatchesDates.forEach(function(e){var a={m:0,k:0,kpm:0,t1:0,t3:0,t6:0};t.groupedMatches[e].forEach(function(t){a.m++,a.k+=t.k?t.k:0,a.t1+=t.t1?t.t1:0,a.t3+=t.t3?t.t3:0,a.t6+=t.t6?t.t6:0}),a.kpm=t.getKPM(a.k,a.m),t.groupedMatchesSummaries[e]=a});var i=s.map(function(t){return new Date(t.d).toLocaleDateString()}).reverse(),r=[{label:"Kills",backgroundColor:"#2196F3",data:s.map(function(t){return t.k}).reverse()}];t.$set(t,"chartData",{labels:i,datasets:r})})},computed:l()({},Object(o.c)({modes:function(t){return t.modes},loading:function(t){return t.loading},error:function(t){return t.error}})),methods:{getMode:function(t){return t?this.modes.find(function(e){return e.code===t}).name:"-"},getDate:function(t){return new Date(t).toLocaleString()},cleanChange:function(t){return t.toFixed(1)},getKPM:function(t,e){return t?(t/(e||1)).toFixed(2):0},getItems:function(t){return n()(t).map(function(e){var a=t[e];return a.week=e,a})}}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{staticClass:"mx-3",attrs:{"justify-space-between":"",row:""}},[a("div",{staticClass:"player-code"},[t._v(t._s(t.$route.params.id))]),t._v(" "),a("v-menu",{attrs:{"offset-y":""}},[a("v-btn",{attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v(t._s(t.active)+" "),a("v-icon",{attrs:{right:""}},[t._v("arrow_drop_down")])],1),t._v(" "),a("v-list",t._l(t.dropdowns,function(e,s){return a("v-list-tile",{key:s,on:{click:function(a){t.active=e}}},[a("v-list-tile-title",[t._v(t._s(e))])],1)}))],1)],1),t._v(" "),t.active===t.dropdowns.daily?a("div",t._l(t.groupMatchesDates,function(e){return a("div",{key:e},[a("v-layout",[a("v-flex",{staticClass:"ma-3"},[a("h3",[t._v(t._s(e))]),t._v(" "),a("v-card",[a("v-card-title",[a("v-layout",{attrs:{row:"",wrap:"","justify-space-between":""}},[a("v-flex",{staticClass:"pa-1 text-xs-center",attrs:{xl2:"",lg2:"",md2:"",sm4:"",xs6:""}},[a("div",{staticClass:"big grey--text text--lighten-1"},[t._v("Matches")]),t._v(" "),a("div",{staticClass:"big-num"},[t._v(t._s(t.groupedMatchesSummaries[e].m))])]),t._v(" "),a("v-flex",{staticClass:"pa-1 text-xs-center",attrs:{xl2:"",lg2:"",md2:"",sm4:"",xs6:""}},[a("h4",{staticClass:"big grey--text text--lighten-1"},[t._v("Kills")]),t._v(" "),a("div",{staticClass:"big-num"},[t._v(t._s(t.groupedMatchesSummaries[e].k))])]),t._v(" "),a("v-flex",{staticClass:"pa-1 text-xs-center",attrs:{xl2:"",lg2:"",md2:"",sm4:"",xs6:""}},[a("h4",{staticClass:"big grey--text text--lighten-1"},[t._v("KPM")]),t._v(" "),a("div",{staticClass:"big-num"},[t._v(t._s(t.groupedMatchesSummaries[e].kpm))])]),t._v(" "),a("v-flex",{staticClass:"pa-1 text-xs-center",attrs:{xl2:"",lg2:"",md2:"",sm4:"",xs6:""}},[a("h4",{staticClass:"big grey--text text--lighten-1"},[t._v("Wins")]),t._v(" "),a("div",{staticClass:"big-num"},[t._v(t._s(t.groupedMatchesSummaries[e].t1))])]),t._v(" "),a("v-flex",{staticClass:"pa-1 text-xs-center",attrs:{xl2:"",lg2:"",md2:"",sm4:"",xs6:""}},[a("h4",{staticClass:"big grey--text text--lighten-1"},[t._v("Top 3")]),t._v(" "),a("div",{staticClass:"big-num"},[t._v(t._s(t.groupedMatchesSummaries[e].t3))])]),t._v(" "),a("v-flex",{staticClass:"pa-1 text-xs-center",attrs:{xl2:"",lg2:"",md2:"",sm4:"",xs6:""}},[a("h4",{staticClass:"big grey--text text--lighten-1"},[t._v("Top 6")]),t._v(" "),a("div",{staticClass:"big-num"},[t._v(t._s(t.groupedMatchesSummaries[e].t6))])])],1)],1)],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.groupedMatches[e],function(e){return a("v-flex",{key:e.id,staticClass:"pa-3",attrs:{xl3:"",lg4:"",md6:"",xs12:""}},[a("v-card",{attrs:{color:1===e.t1?"green":""}},[a("v-card-title",[a("v-flex",{attrs:{column:""}},[t._o(a("v-flex",{staticClass:"big",attrs:{"d-flex":"",row:""}},[a("div",[t._v(t._s(t.getMode(e.p))+" ")]),t._v(" "),a("div",{staticClass:"text-xs-right"},[e.c>0?a("v-icon",{attrs:{color:"green accent-3"}},[t._v("keyboard_arrow_up")]):t._e(),t._v(" "),e.c<0?a("v-icon",{attrs:{color:"red"}},[t._v("keyboard_arrow_down")]):t._e(),t._v("\n                    "+t._s(t.cleanChange(e.c))+"\n                  ")],1)]),0,e.id),t._v(" "),a("v-flex",{attrs:{"d-flex":"",row:""}},[a("div",[a("span",{class:{"red--text":!e.k}},[t._v(t._s(e.k)+" "+t._s(1===e.k?"kill":"kills"))]),t._v(" "),e.t1?t._e():a("span",[e.t3?a("small",{staticClass:"yellow--text ml-3"},[t._v("Top 3")]):t._e(),t._v(" "),e.t5?a("small",{staticClass:"yellow--text ml-3"},[t._v("Top 5")]):t._e(),t._v(" "),e.t6&&!e.t3?a("small",{staticClass:"yellow--text ml-3"},[t._v("Top 6")]):t._e(),t._v(" "),e.t10?a("small",{staticClass:"yellow--text ml-3"},[t._v("Top 10")]):t._e()])]),t._v(" "),a("div",{staticClass:"text-xs-right"},[t._v("+"+t._s(e.s)+" Score")])]),t._v(" "),t._o(a("small",{class:1===e.t1?"white--text":"grey--text"},[t._v(t._s(t.getDate(e.d)))]),1,e.id)],1)],1)],1)],1)}))],1)})):t._e(),t._v(" "),t.active===t.dropdowns.weekly?a("div",t._l(t.weekly,function(e,s){return a("div",{key:s,staticClass:"ma-3"},[a("h3",[t._v(t._s(s))]),t._v(" "),a("v-data-table",{staticClass:"elevation-2",attrs:{headers:t.weeklyTableHeaders,items:t.getItems(e),"item-key":"week","must-sort":!0,pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.week))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.k))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t._f("toFix")(e.item.kpm,2)))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.mp))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t._f("percent")(e.item.wp)))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t._f("number")(e.item.s)))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t1))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t3))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t5))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t6))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t10))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t12))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t25))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.lr.gradient))])]}}])})],1)})):t._e(),t._v(" "),t.active===t.dropdowns.bests?a("div",[t.bests&&t.bests.kills?a("v-card",{staticClass:"ma-3"},[a("v-card-title",[a("v-layout",{attrs:{"justify-space-between":""}},[a("h1",[t._v("Kills")]),t._v(" "),a("h1",[t._v(t._s(t.bests.kills.k))])])],1),t._v(" "),a("small",{staticClass:"grey--text pl-3"},[t._v(t._s(t.getDate(t.bests.kills.d)))])],1):t._e()],1):t._e(),t._v(" "),t.active===t.dropdowns.charts?a("div",[a("v-flex",{staticClass:"ma-3"},[a("v-card",[a("v-card-text",[a("h3",[t._v("Last 30 Matches")]),t._v(" "),a("line-chart",{attrs:{"chart-data":t.chartData,options:t.options}})],1)],1)],1),t._v(" "),a("v-flex",{staticClass:"ma-3"},[a("v-card",[a("v-card-text",[a("h3",[t._v("Win % by week")]),t._v(" "),a("line-chart",{attrs:{"chart-data":t.weekChartData,options:t.options}})],1)],1)],1)],1):t._e()],1)},staticRenderFns:[]};var T=a("VU/8")(b,M,!1,function(t){a("2Be+")},"data-v-7cc5c6a4",null).exports,S=a("PJh5"),D=a.n(S),P=c.a.database(),K={p10:"duo",p9:"squad",p2:"solo"},R={data:function(){return{feed:[]}},created:function(){var t=this;P.ref("/data").once("value",function(e){var a=e.val(),s=n()(a).map(function(t){return a[t].recentMatches.map(function(e){return e.user=t,e.fromNow=D.a.utc(e.dateCollected).fromNow(),e.unix=D()(e.dateCollected).unix(),e.mode=K[e.playlist],e})}),i=[].concat.apply([],s).sort(function(t,e){return e.unix-t.unix});t.feed=i})}},z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{attrs:{column:""}},[a("h2",{staticClass:"mb-3"},[t._v("Feed")]),t._v(" "),a("v-flex",t._l(t.feed,function(e){return a("v-card",{key:e.id,staticClass:"mb-3"},[a("v-card-title",[a("v-layout",{attrs:{column:""}},[a("div",[t._v("\n              "+t._s(e.user)+" "+t._s(e.top1?"won":"played")+" a "+t._s(e.mode)+" match with "),a("span",{class:{"red--text":!e.kills}},[t._v(t._s(e.kills))]),t._v(" "+t._s(1!==e.kills?"kills":"kill")+" "+t._s(e.top1?"! 🎉":"")+"\n            ")]),t._v(" "),a("div",[a("small",{staticClass:"grey--text"},[t._v("\n                "+t._s(e.fromNow)+"\n              ")])])])],1)],1)}))],1)],1)},staticRenderFns:[]};var W=a("VU/8")(R,z,!1,function(t){a("7f/M")},"data-v-fb23327e",null).exports,F=c.a.database(),L={data:function(){return{pagination:{sortBy:"k",descending:!0},headers:[{text:"User",value:"user"},{text:"Kills",value:"k",align:"right"},{text:"Kills/Match",value:"kpm",align:"right"},{text:"Matches",value:"mp",align:"right"},{text:"Win %",value:"wp",align:"right"},{text:"Score",value:"s",align:"right"},{text:"Wins",value:"t1",align:"right"},{text:"Top 3",value:"t3",align:"right"},{text:"Top 5",value:"t5",align:"right"},{text:"Top 6",value:"t6",align:"right"},{text:"Top 10",value:"t10",align:"right"},{text:"Top 12",value:"t12",align:"right"},{text:"Top 25",value:"t25",align:"right"},{text:"Regression",value:"r",align:"right"}],items:[],startWeekDate:S().startOf("week").format("ll"),endWeekDate:S().endOf("week").format("ll")}},created:function(){var t=this,e=S().week(),a=S().year();F.ref("/weeklySummary").once("value",function(s){var i=s.val(),r=n()(i).filter(function(t){return i[t][a][e]}).map(function(t){var s=i[t][a][e];return s.user=t,s});t.items=r})}},U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Week of "+t._s(t.startWeekDate)+" to "+t._s(t.endWeekDate))]),t._v(" "),a("v-data-table",{staticClass:"elevation-2",attrs:{headers:t.headers,items:t.items,"item-key":"user","must-sort":!0,pagination:t.pagination,"no-data-text":"No data for this week"},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[a("router-link",{attrs:{tag:"tr",to:{name:"player",params:{id:e.item.user}}}},[a("td",[t._v(t._s(e.item.user))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.k))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t._f("toFix")(e.item.kpm,2)))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.mp))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t._f("percent")(e.item.wp)))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t._f("number")(e.item.s)))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t1))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t3))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t5))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t6))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t10))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t12))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.t25))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.lr.gradient))])])]}}])})],1)},staticRenderFns:[]},B=a("VU/8")(L,U,!1,null,null,null).exports;s.a.use(x.a);var N=new x.a({mode:"history",routes:[{path:"/",name:"home",component:_},{path:"/player/:id",name:"player",component:T},{path:"/weekly",name:"weekly",component:B},{path:"/feed",name:"feed",component:W}]});s.a.use(o.a);var E={updateData:function(t,e){var a=e.data;t.lifetime.data=a.map(function(t){t.lifeTimeStatsMap=t.lifeTimeStats.reduce(function(t,e){return t[e.key.replace(/\s/g,"")]=e.value,t},{});var e=new Date(t.fetchTime);return t.lifeTimeStatsMap.user=t.epicUserHandle,t.lifeTimeStatsMap.lastUpdate=e.toLocaleString(),t.lifeTimeStatsMap}),t.modes.forEach(function(e){t.modeData[e.code].data=a.filter(function(t){return void 0!==t.stats[e.code]}).map(function(t){return t.stats[e.code].user={displayValue:t.epicUserHandle},t.stats[e.code]})})},setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e}},V=new o.a.Store({state:{modes:[{name:"Squad",code:"p9"},{name:"Duo",code:"p10"},{name:"Solo",code:"p2"},{name:"Current Season Squad",code:"curr_p9"},{name:"Current Season Duo",code:"curr_p10"},{name:"Current Season Solo",code:"curr_p2"}],lifetime:{fields:[{text:"User",value:"user"},{text:"Matches",value:"MatchesPlayed"},{text:"Wins",value:"Wins"},{text:"Win %",value:"Win%"},{text:"Top 3",value:"Top3s"},{text:"Top 5",value:"Top5s"},{text:"Top 6",value:"Top6s"},{text:"Top 12",value:"Top12s"},{text:"Top 25",value:"Top25s"},{text:"Kills",value:"Kills"},{text:"KD",value:"K/d"},{text:"Kills/Min",value:"KillsPerMin"},{text:"Score",value:"Score"},{text:"Avg. Survival",value:"AvgSurvivalTime"},{text:"Updated",value:"lastUpdate"}],data:[]},modeData:{p9:{fields:[{text:"User",value:"user"},{text:"Matches",value:"matches"},{text:"Wins",value:"top1"},{text:"Win %",value:"winRatio"},{text:"Top 3",value:"top3"},{text:"Top 6",value:"top6"},{text:"Kills",value:"kills"},{text:"KD",value:"kd"},{text:"Kills/Min",value:"kpm"},{text:"Kills/Game",value:"kpg"},{text:"Score/Min",value:"scorePerMin"},{text:"Score/Game",value:"scorePerMatch"},{text:"Score",value:"score"},{text:"Mins. Played",value:"minutesPlayed"},{text:"Avg. Time Played",value:"avgTimePlayed"},{text:"TRN Rating",value:"trnRating"}],data:[]},p10:{fields:[{text:"User",value:"user"},{text:"Matches",value:"matches"},{text:"Wins",value:"top1"},{text:"Win %",value:"winRatio"},{text:"Top 5",value:"top5"},{text:"Top 12",value:"top12"},{text:"Kills",value:"kills"},{text:"KD",value:"kd"},{text:"Kills/Min",value:"kpm"},{text:"Kills/Game",value:"kpg"},{text:"Score/Min",value:"scorePerMin"},{text:"Score/Game",value:"scorePerMatch"},{text:"Score",value:"score"},{text:"Mins. Played",value:"minutesPlayed"},{text:"Avg. Time Played",value:"avgTimePlayed"},{text:"TRN Rating",value:"trnRating"}],data:[]},p2:{fields:[{text:"User",value:"user"},{text:"Matches",value:"matches"},{text:"Wins",value:"top1"},{text:"Win %",value:"winRatio"},{text:"Top 10",value:"top10"},{text:"Top 25",value:"top25"},{text:"Kills",value:"kills"},{text:"KD",value:"kd"},{text:"Kills/Min",value:"kpm"},{text:"Kills/Game",value:"kpg"},{text:"Score/Min",value:"scorePerMin"},{text:"Score/Game",value:"scorePerMatch"},{text:"Score",value:"score"},{text:"Mins. Played",value:"minutesPlayed"},{text:"Avg. Time Played",value:"avgTimePlayed"},{text:"TRN Rating",value:"trnRating"}],data:[]},curr_p9:{fields:[{text:"User",value:"user"},{text:"Matches",value:"matches"},{text:"Wins",value:"top1"},{text:"Win %",value:"winRatio"},{text:"Top 3",value:"top3"},{text:"Top 6",value:"top6"},{text:"Kills",value:"kills"},{text:"KD",value:"kd"},{text:"Kills/Min",value:"kpm"},{text:"Kills/Game",value:"kpg"},{text:"Score/Min",value:"scorePerMin"},{text:"Score/Game",value:"scorePerMatch"},{text:"Score",value:"score"},{text:"Mins. Played",value:"minutesPlayed"},{text:"Avg. Time Played",value:"avgTimePlayed"},{text:"TRN Rating",value:"trnRating"}],data:[]},curr_p10:{fields:[{text:"User",value:"user"},{text:"Matches",value:"matches"},{text:"Wins",value:"top1"},{text:"Win %",value:"winRatio"},{text:"Top 5",value:"top5"},{text:"Top 12",value:"top12"},{text:"Kills",value:"kills"},{text:"KD",value:"kd"},{text:"Kills/Min",value:"kpm"},{text:"Kills/Game",value:"kpg"},{text:"Score/Min",value:"scorePerMin"},{text:"Score/Game",value:"scorePerMatch"},{text:"Score",value:"score"},{text:"Mins. Played",value:"minutesPlayed"},{text:"Avg. Time Played",value:"avgTimePlayed"},{text:"TRN Rating",value:"trnRating"}],data:[]},curr_p2:{fields:[{text:"User",value:"user"},{text:"Matches",value:"matches"},{text:"Wins",value:"top1"},{text:"Win %",value:"winRatio"},{text:"Top 10",value:"top10"},{text:"Top 25",value:"top25"},{text:"Kills",value:"kills"},{text:"KD",value:"kd"},{text:"Kills/Min",value:"kpm"},{text:"Kills/Game",value:"kpg"},{text:"Score/Min",value:"scorePerMin"},{text:"Score/Game",value:"scorePerMatch"},{text:"Score",value:"score"},{text:"Mins. Played",value:"minutesPlayed"},{text:"Avg. Time Played",value:"avgTimePlayed"},{text:"TRN Rating",value:"trnRating"}],data:[]}},loading:!1,error:!1},mutations:E}),q=a("3EgV"),O=a.n(q),H=a("AYPi"),G=a.n(H);s.a.filter("percent",function(t,e){return(100*t).toFixed(e||1)}),s.a.filter("toFix",function(t,e){return t?parseFloat(t).toFixed(e||1):""}),s.a.filter("number",function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")});a("7zck");s.a.use(G.a,{id:"UA-119038838-1",router:N,debug:{sendHitTask:!0}}),s.a.use(O.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:N,store:V,components:{App:p},template:"<App/>"})},uslO:function(t,e,a){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function i(t){return a(n(t))}function n(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(s)},i.resolve=n,t.exports=i,i.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.f36bac24ca3a4165ea18.js.map