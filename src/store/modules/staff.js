import staffList from '../../data/Staffs.json'
const state = {
  staffInfo: ''
}

const getters = {
  staffInfo: (state) => {
    return state.staffInfo
  }
}

const mutations = {
  LOAD_STAFF_INFO: (state, payload) => {
    state.staffInfo = payload
  }
}

const actions = {
  LOAD_STAFF_INFO ({ commit }, payload) {
    let staffs = staffList
    let staff = staffs.filter(function (el) {
      return el.id === payload
    })
    commit('LOAD_STAFF_INFO', staff[0])
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
