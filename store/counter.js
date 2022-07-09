export const state = () => ({
  counter: 0
})

export const mutations = {
  transfusion(state, counter) {
    state.counter = counter;
  },
  increment(state) {
    state.counter++;
  }
}

export const actions = {
  async fetchCounter({commit}) {
    // make request
    const res = { data: 12 };
    const counter = res.data;
    commit('transfusion', counter)
  }
}

export const getters = {
  getCounter: s => s.counter
}