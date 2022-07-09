export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearTocken(state) {
    state.token = null;
  },
}

export const actions = {
  async login({commit}) {
    commit('setToken', 'truetoken')
  },
  async logout({commit}) {
    commit('clearTocken')
  },
}

export const getters = {
  hasToken: s => !!s.token
}