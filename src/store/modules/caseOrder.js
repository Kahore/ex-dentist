import db from '../../config/firebaseConfig'
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
    db.collection('caseOrders').doc(payload).get().then(doc => {
      commit('LOAD_ORDER', doc.data())
    })
  },
  ADD_ORDER ({ commit }, payload) {
    let id = db.collection('caseOrders').doc().id
    let caseOrder = { ...payload, id: id }
    db.collection('caseOrders').doc(id).set(caseOrder).then(docRef => {
      commit('ADD_CASEORDER_AT_LIST', caseOrder)
    }).catch(error => console.log('TCL: ADD_ORDER -> error', error))
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
