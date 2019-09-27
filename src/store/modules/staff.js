import db from '../../config/firebaseConfig'
const state = {
  staffInfo: ''
}

const getters = {
  staffInfo: (state) => {
    return state.staffInfo
  }
}

const mutations = {
  LOAD_STAFF_INFO: (state, payload) => {
    state.staffInfo = payload
  }
}

const actions = {
  LOAD_STAFF_INFO ({ commit }, payload) {
    db.collection('users').where('id', '==', payload).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        let data = doc.data()
        commit('LOAD_STAFF_INFO', data)
      })
    })
  },
  CREATE_STAFF ({ commit }, payload) {
    db.collection('users').add(payload).then(() => {
      commit('ADD_STAFF_AT_LIST', payload)
    })
  },
  EDIT_STAFF ({ commit }, payload) {
    db.collection('users').where('id', '==', payload.id).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        doc.ref.update(payload)
      })
      commit('EDIT_STAFF_AT_LIST', payload)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
