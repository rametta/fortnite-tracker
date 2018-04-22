import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Player from '@/components/Player'
import Info from '@/components/Info'
import Weekly from '@/components/Weekly'

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
    },
    {
      path: '/weekly',
      name: 'weekly',
      component: Weekly
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }
  ]
})
