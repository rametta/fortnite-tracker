import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Player from '@/pages/Player'
import PlayerDaily from '@/pages/PlayerDaily'
import PlayerWeekly from '@/pages/PlayerWeekly'
import PlayerBests from '@/pages/PlayerBests'
import PlayerCharts from '@/pages/PlayerCharts'
import PlayerClips from '@/pages/PlayerClips'
import PlayerClip from '@/pages/PlayerClip'
import Feed from '@/pages/Feed'
import Weekly from '@/pages/Weekly'

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
      redirect: '/player/:id/daily', // daily tab is default
      children: [
        {
          path: 'daily',
          name: 'playerDaily',
          component: PlayerDaily
        },
        {
          path: 'weekly',
          name: 'playerWeekly',
          component: PlayerWeekly
        },
        {
          path: 'bests',
          name: 'playerBests',
          component: PlayerBests
        },
        {
          path: 'charts',
          name: 'playerCharts',
          component: PlayerCharts
        },
        {
          path: 'clips',
          name: 'playerClips',
          component: PlayerClips
        }
      ]
    },
    {
      path: '/weekly',
      name: 'weekly',
      component: Weekly
    },
    {
      path: '/feed',
      name: 'feed',
      component: Feed
    },
    {
      path: '/clip/:clipId/:playerId',
      name: 'playerClip',
      component: PlayerClip
    }
  ]
})
