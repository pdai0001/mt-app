const state = () => ({ position: { city: '武汉市', province: '湖北省' } })
// const state = () => ({ position: {} })

const mutations = {
  setPosition (state, val) {
    state.position = val
  },
  setCity (state, val) {
    state.position.city = val
  }
}

const actions = {
  setPosition: ({ commit }, position) => {
    commit('setPosition', position)
  },
  setCity: ({ commit }, city) => {
    commit('setCity', city)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
