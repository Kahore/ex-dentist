
import db from '../../config/firebaseConfig'
const state = {
  caseOrders: []
}

const getters = {
  // @caseOrders is a list of all case
  caseOrders: (state) => {
    return state.caseOrders
  }
}

const mutations = {
  LOAD_ORDERS: (state, payload) => {
    state.caseOrders = payload
  },
  ADD_CASEORDER_AT_LIST: (state, payload) => {
    state.caseOrders = state.caseOrders.concat(payload)
  },
  EDIT_CASEORDER_AT_LIST: (state, payload) => {
    let index = state.caseOrders.findIndex(patient => patient.id === payload.id)
    state.caseOrders.splice(index, 1)
    state.caseOrders = state.caseOrders.concat(payload)
  }
}

const actions = {
  LOAD_ORDERS ({ commit }, payload) {
    let orders = []
    db.collection('caseOrders').get().then(querySnapshot => {
      querySnapshot.forEach(order => {
        orders.push(order.data())
      })
    })
    commit('LOAD_ORDERS', orders)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
