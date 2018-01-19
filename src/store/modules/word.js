import axios from 'axios'

const YANDEX_DICTIONARY_API = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20171227T131943Z.b0b60611e36d7e6a.296e4b9f91bce940a11dad18a08a8df28009ab0b&lang=`

const BASE_URL = 'http://localhost:3000/api/words'
const PRODUCTION_BASE_URL  = 'https://nameless-bayou-47211.herokuapp.com/api/words'

const state = {
  currentTranslation: [],
  days: []
}

const mutations = {
  addCurrentTranslationToState(state, payload) {
    state.currentTranslation = payload
  },
  addDaysToState(state, payload) {
    state.days = payload
  },
}

const actions = {
  requestWords ({commit}) {
    axios.get(BASE_URL, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(response => {
      commit('addDaysToState', response.data)
    })
  },

  getTranslation ({ commit }, params ) {
    axios.get(YANDEX_DICTIONARY_API + params.from + '-' + params.to + '&text=' + params.text)
    .then((response)=> {
      const res = JSON.stringify(response.data.def)
      commit('addCurrentTranslationToState', JSON.parse(res))
    })
    .catch(err => {
      console.log(err)
    })
  },

  saveTranslation ({commit, dispatch}, { article, translation }) {
    let translations = translation.tr.map((translation) => translation.text).join(', ')
    axios
      ({
        url:  BASE_URL,
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        data: {
          word: {
            article: JSON.stringify(article),
            original: translation.text,
            transcription: translation.ts,
            translation: translations,
            from: 'EN',
            to: 'RU'
          }
        }
      })
      .then((response) => {
        dispatch('requestWords')
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

const getters = {
  links: state => {
    return state.days;
  },

}

export default {
  state,
  mutations,
  actions,
  getters
}
