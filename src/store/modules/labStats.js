import labStats from '../../data/LabStats.json'
const state = {
  labStats: {}
}

const getters = {
  labStats: (state) => {
    return state.labStats
  }
}

const mutations = {
  LOAD_LAB_STATS: (state, payload) => {
    state.labStats = payload
  }
}

const actions = {
  LOAD_LAB_STATS ({ commit }, payload) {
    let stats = labStats
    // MEMO: This just a mock db select. In real app this filter should be on server side
    let practicesByCurrentLab = stats.filter(function (el) {
      return el.labId === payload
    })
    commit('LOAD_LAB_STATS', practicesByCurrentLab[0])
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
