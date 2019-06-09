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
    }
  ]
})
