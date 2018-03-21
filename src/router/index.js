import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Player from '@/components/Player'
import Info from '@/components/Info'
import Charts from '@/components/Charts'

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
      path: '/charts',
      name: 'charts',
      component: Charts
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }
  ]
})
