import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/words'

const state = {
  days: []
}

const mutations = {
  addDaysToState(state, payload) {
    state.days = payload
  }
}

const actions = {

}

const getters = {
  links: state => {
    return state.days;
  },
  getDay: (state) => (id) => {
    return state.days.find(day => index === id);
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
