import dentistStats from '../../data/DentistStats.json'
const state = {
  stats: {}
}

const getters = {
  stats: (state) => {
    return state.stats
  }
}

const mutations = {
  LOAD_STATS: (state, payload) => {
    state.stats = payload
  }
}

const actions = {
  LOAD_STATS ({ commit }, payload) {
    let practices = dentistStats
    // MEMO: This just a mock db select. In real app this filter should be on server side
    let practicesByCurrentDentist = practices.filter(function (el) {
      return el.dentistId === payload
    })
    commit('LOAD_STATS', practicesByCurrentDentist[0])
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
