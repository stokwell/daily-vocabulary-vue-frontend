import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import VueNotifications from 'vue-notifications'
import options from './lib/VueNotifications'
import App from './App.vue'
import router from './router'
import store from './store/index'


Vue.use(VueNotifications, options)

sync(store, router)

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
