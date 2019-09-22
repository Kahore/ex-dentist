import practicesList from '../../data/Practices.json'
const state = {
  practices: [],
  selectedPractice: {}
}

const getters = {
  practices: (state) => {
    return state.practices
  },
  selectedPractice: (state) => {
    return state.selectedPractice
  }
}

const mutations = {
  LOAD_PRACTICES: (state, payload) => {
    state.practices = payload
  },
  LOAD_PRACTICE_INFO: (state, payload) => {
    state.selectedPractice = payload
  }
}

const actions = {
  LOAD_PRACTICES ({ commit }, payload) {
    let practices = practicesList
    // MEMO: This just a mock db select/ In real app this filter should be on server side
    let practicesByCurrentDentist = practices.filter(function (el) {
      return el.dentistId === payload
    })
    commit('LOAD_PRACTICES', practicesByCurrentDentist)
  },
  LOAD_PRACTICE_INFO ({ commit, state }, payload) {
    let practices = state.practices
    let practicesById = practices.filter(function (el) {
      return el.id === payload
    })
    commit('LOAD_PRACTICE_INFO', practicesById[0])
  },
  MUTATE_PRACTICE_INFO ({ commit }, payload) {
    commit('LOAD_PRACTICE_INFO', payload)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
