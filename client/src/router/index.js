import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'

import Home from '@/components/Home'
import Basketball from '@/components/Basketball'
import Football from '@/components/Football'
import Hockey from '@/components/Hockey'
import Quiz from '@/components/Quiz'
import Rugby from '@/components/Rugby'
import Tennis from '@/components/Tennis'

import FootRes from '@/components/Results/FootRes'
import BasketRes from '@/components/Results/BasketRes'
import HockeyRes from '@/components/Results/HockeyRes'
import TennisRes from '@/components/Results/TennisRes'
import RugbyRes from '@/components/Results/RugbyRes'

import FootFix from '@/components/Fixtures/FootFix'
import BasketFix from '@/components/Fixtures/BasketFix'
import HockeyFix from '@/components/Fixtures/HockeyFix'
import TennisFix from '@/components/Fixtures/TennisFix'
import RugbyFix from '@/components/Fixtures/RugbyFix'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tennis',
      name: 'Tennis',
      component: Tennis
    },
    {
      path: '/basketball',
      name: 'Basketball',
      component: Basketball
    },
    {
      path: '/football',
      name: 'Football',
      component: Football
    },
    {
      path: '/hockey',
      name: 'Hockey',
      component: Hockey
    },
    {
      path: '/rugby',
      name: 'Rugby',
      component: Rugby
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz
    },
    {
      path: '/footres',
      name: 'FootRes',
      component: FootRes
    },
    {
      path: '/basketRes',
      name: 'BasketRes',
      component: BasketRes
    },
    {
      path: '/rugbyres',
      name: 'RugbyRes',
      component: RugbyRes
    },
    {
      path: '/tennisres',
      name: 'TennisRes',
      component: TennisRes
    },
    {
      path: '/hockeyres',
      name: 'HockeyRes',
      component: HockeyRes
    },
    {
      path: '/footfix',
      name: 'FootFix',
      component: FootFix
    },
    {
      path: '/basketfix',
      name: 'BasketFix',
      component: BasketFix
    },
    {
      path: '/hockeyfix',
      name: 'HockeyFix',
      component: HockeyFix
    },
    {
      path: '/rugbyfix',
      name: 'RugbyFix',
      component: RugbyFix
    },
    {
      path: '/tennisfix',
      name: 'TennisFix',
      component: TennisFix
    }
  ]
})
