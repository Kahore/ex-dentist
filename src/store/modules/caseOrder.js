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
  },
  EDIT_ORDER ({ commit }, payload) {
    db.collection('caseOrders').where('id', '==', payload.id).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        doc.ref.update(payload)
      })
      commit('EDIT_CASEORDER_AT_LIST', payload)
    })
  },
  ORDER_ALERT ({ commit }, payload) {
    db.collection('caseOrders')
      .doc(payload)
      .update({
        'clinical_alert': true
      })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
