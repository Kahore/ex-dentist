import caseOrders from '../../data/CaseOrders.json'
const state = {
  caseOrder: {}
}

const getters = {
  caseOrder: (state) => {
    return state.caseOrder
  }
}

const mutations = {
  LOAD_ORDER: (state, payload) => {
    state.caseOrder = payload
  }
}

const actions = {
  LOAD_ORDER ({ commit }, payload) {
    let orders = caseOrders
    let order = orders.filter(function (el) {
      return el.id === payload
    })
    commit('LOAD_ORDER', order[0])
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
