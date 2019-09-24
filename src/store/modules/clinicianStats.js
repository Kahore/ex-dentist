import clinicianStats from '../../data/ClinicianStats.json'
const state = {
  clinicianStats: {}
}

const getters = {
  clinicianStats: (state) => {
    return state.clinicianStats
  }
}

const mutations = {
  LOAD_CLINICIAN_STATS: (state, payload) => {
    state.clinicianStats = payload
  }
}

const actions = {
  LOAD_CLINICIAN_STATS ({ commit }, payload) {
    let stats = clinicianStats
    // MEMO: This just a mock db select. In real app this filter should be on server side
    let statsByCurrentClinician = stats.filter(function (el) {
      return el.clinicianId === payload
    })
    commit('LOAD_CLINICIAN_STATS', statsByCurrentClinician[0])
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
