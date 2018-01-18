import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import word from './modules/word'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    word,
  }
})

export default store;
