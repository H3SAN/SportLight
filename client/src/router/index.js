import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'

import Home from '@/components/Home'

//  basketball section
import Basketball from '@/components/Basketball/Basketball'
import BTransfers from '@/components/Basketball/BTransfers'

//  football section
import Football from '@/components/Football/Football'
import FTransfers from '@/components/Football/FTransfers'
import FAFCON from '@/components/Football/Fixtures/FAFCON'
import FPremierLeague from '@/components/Football/Fixtures/FPremierLeague'
import FUEFA from '@/components/Football/Fixtures/FUEFA'
import FSerieA from '@/components/Football/Fixtures/FSerieA'
import FLaLiga from '@/components/Football/Fixtures/FLaLiga'
import RAFCON from '@/components/Football/Results/RAFCON'
import RPremierLeague from '@/components/Football/Results/RPremierLeague'
import RUEFA from '@/components/Football/Results/RUEFA'
import RSerieA from '@/components/Football/Results/RSerieA'
import RLaLiga from '@/components/Football/Results/RLaLiga'

//  hockey section
import Hockey from '@/components/Hockey/Hockey'

//  rugby section
import Rugby from '@/components/Rugby/Rugby'

//  tennis section
import Tennis from '@/components/Tennis/Tennis'

//  quiz section
import Quiz from '@/components/Quiz'

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
    //  basketball section
    {
      path: '/basketball',
      name: 'Basketball',
      component: Basketball
    },
    {
      path: '/btransfer',
      name: 'BTransfers',
      component: BTransfers
    },
    //  football section
    {
      path: '/football',
      name: 'Football',
      component: Football
    },
    {
      path: '/ftransfer',
      name: 'FTransfers',
      component: FTransfers
    },
    {
      path: '/flaliga',
      name: 'FLaLiga',
      component: FLaLiga
    },
    {
      path: '/fseriea',
      name: 'FSerieA',
      component: FSerieA
    },
    {
      path: '/fprleague',
      name: 'FPremierLeague',
      component: FPremierLeague
    },
    {
      path: '/fafcon',
      name: 'FAFCON',
      component: FAFCON
    },
    {
      path: '/fuefa',
      name: 'FUEFA',
      component: FUEFA
    },
    {
      path: '/rlaliga',
      name: 'RLaLiga',
      component: RLaLiga
    },
    {
      path: '/rseriea',
      name: 'RSerieA',
      component: RSerieA
    },
    {
      path: '/rprleague',
      name: 'RPremierLeague',
      component: RPremierLeague
    },
    {
      path: '/rafcon',
      name: 'RAFCON',
      component: RAFCON
    },
    {
      path: '/ruefa',
      name: 'RUEFA',
      component: RUEFA
    },
    //  hockey section
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
    }
  ]
})
