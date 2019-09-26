
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
    let { where } = payload
    let query = db.collection('caseOrders')
    if (where) {
      if (where[0] instanceof Array) {
        for (let w of where) {
          query = query.where(...w)
        }
      } else {
        query = query.where(...where)
      }
    }
    let orders = []
    query.get().then(querySnapshot => {
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
