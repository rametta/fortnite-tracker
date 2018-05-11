import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import VueAnalytics from 'vue-analytics'
import './filters'
import 'vuetify/dist/vuetify.min.css'

Vue.use(VueAnalytics, {
  id: 'UA-119038838-1',
  router,
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  }
})

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
