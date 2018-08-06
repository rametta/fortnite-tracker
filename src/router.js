import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Player from '@/pages/Player'
import PlayerXbox from '@/pages/PlayerXbox'
import PlayerPC from '@/pages/PlayerPC'
import Feed from '@/pages/Feed'
import PC from '@/pages/PC'

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
      component: Player,
      redirect: { name: 'playerXbox' }, // default redirected tab
      children: [
        {
          path: 'xbox',
          name: 'playerXbox',
          component: PlayerXbox
        },
        {
          path: 'pc',
          name: 'playerPC',
          component: PlayerPC
        }
      ]
    },
    {
      path: '/pc',
      name: 'pc',
      component: PC
    },
    {
      path: '/feed',
      name: 'feed',
      component: Feed
    }
  ]
})
