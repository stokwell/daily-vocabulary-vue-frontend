import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import word from './modules/word'
import day from './modules/day'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    word,
    day
  }
})

export default store;
