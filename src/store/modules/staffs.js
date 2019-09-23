import staffList from '../../data/Staffs.json'
const state = {
  staffs: ''
}

const getters = {
  staffs: (state) => {
    return state.staffs
  }
}

const mutations = {
  LOAD_STAFFS: (state, payload) => {
    state.staffs = payload
  }
}

const actions = {
  LOAD_STAFFS ({ commit }, payload) {
    payload = staffList
    commit('LOAD_STAFFS', payload)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
