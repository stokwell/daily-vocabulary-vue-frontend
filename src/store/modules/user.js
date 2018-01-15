import axios from 'axios'

const BASE_URL = "http://localhost:3000/api"

const state = {
  isLogged: !!localStorage.getItem('token')
}

const mutations = {
  LOGIN_USER (state) {
      state.isLogged = true
  },

  LOGOUT_USER (state) {
      state.isLogged = false
  }
}

const actions = {
  login({ commit }, { email, password }) {
    axios
      .post(`${BASE_URL}/user_token`, { auth: { email, password } })
      .then(response => {
        localStorage.setItem('token', response.data.jwt)
        commit('LOGIN_USER');
      })
      .catch(err => {
        console.log(err)
      })
  },
  logout({ commit }){
    localStorage.removeItem('token')
    commit('LOGOUT_USER')
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
