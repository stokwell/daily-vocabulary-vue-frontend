import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

import Translation from '../components/Translation'
import Day from '../components/Day'
import Login from '../pages/Login'
import Quotes from '../pages/Quotes'
import PageNotFound from '../pages/404'
import Dashboard from '../pages/Dashboard'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/quotes',
      name: 'quotes',
      component: Quotes
    },
    {
      path: '/dashboard',
      component: Dashboard,
      beforeEnter(to, from, next) {
        if(store.state.user.isLogged){
          next()
        } else {
          next('/')
        }
      },
      children: [
        {
          path: ':day',
          name: 'day-list',
          component: Day
        },
        {
          path: '/',
          component: Translation
        },
      ]
    },
    {
      path: '/*',
      name: 'pageNotFound',
      component: PageNotFound
    }
  ]
})
