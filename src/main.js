import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import App from './App.vue'
import router from './router'
import store from './store/index'

import moment from 'moment-timezone'
moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment} })

sync(store, router)

new Vue({
  data: {
    moment
  },
  router,
  store,
  el: '#app',
  render: h => h(App)
})
