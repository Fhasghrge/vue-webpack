const modules1 = {
  state: {
    name: 'Modules_Name_ZhaZha'
  },
  mutations: {
    chang_module (state, payload) {
      state.name += payload
    }
  },
  actions: {
    // use it the same as normal
  },
  getters: {
    fullname (state) {
      return state.name + ' ShuangAi'
    },
    fullname2 (state, getters) {
      return getters.fullname + ' 11111'
    },
    fullname3 (state, getters, rootState) { // transfer main state to son
      return getters.fullname2 + ' ' + rootState.counter
    }
  }
}
export default modules1
