import { createStore } from 'vuex'

export default createStore({
  state: {
    api_key: 'mxqiSXJxXRLQ9fmfH7UcvsJvdsbxSg',
    base_currency: 'RUB'
  },
  mutations: {
    SET_BASE: (state, payload) => {
      state.base_currency = payload
    }
  },
  getters: {
    API: state => {
      return state.api_key
    },
    BASE: state => {
      return state.base_currency
    }
  },
  actions: {
    SET_BASE: (injectee, payload) =>  {
      injectee.commit('SET_BASE', payload)
    }
  },
  modules: {
  }
})
