import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Player from '@/components/Player'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/player/:id',
      name: 'player',
      component: Player
    }
  ]
})
