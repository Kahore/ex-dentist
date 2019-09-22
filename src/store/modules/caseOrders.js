import caseOrders from '../../data/CaseOrders.json'
const state = {
  caseOrders: [],
  treatmentsHistory: []
}

const getters = {
  // @caseOrders is a list of all case
  caseOrders: (state) => {
    return state.caseOrders
  },
  // @treatmentsHistory list of treatment by selected patient
  treatmentsHistory: (state) => {
    return state.treatmentsHistory
  }
}

const mutations = {
  LOAD_ORDERS: (state, payload) => {
    state.caseOrders = payload
  },
  LOAD_TREATMENTS: (state, payload) => {
    state.treatmentsHistory = payload
  }
}

const actions = {
  LOAD_ORDERS ({ commit }, payload) {
    let orders = caseOrders
    commit('LOAD_ORDERS', orders)
  },
  LOAD_TREATMENTS ({ commit }, payload) {
    let orders = caseOrders
    let treatments = orders.filter(function (el) {
      return el.patientId === payload
    })
    commit('LOAD_TREATMENTS', treatments)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
