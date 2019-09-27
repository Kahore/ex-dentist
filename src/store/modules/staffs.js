import db from '../../config/firebaseConfig'
const state = {
  staffs: ''
}

const getters = {
  staffs: (state) => {
    return state.staffs
  }
}

const mutations = {
  LOAD_STAFFS: (state, payload) => {
    state.staffs = payload
  },
  ADD_STAFF_AT_LIST: (state, payload) => {
    state.staffs = state.staffs.concat(payload)
  },
  EDIT_STAFF_AT_LIST: (state, payload) => {
    let index = state.staffs.findIndex(staff => staff.id === payload.id)
    state.staffs.splice(index, 1)
    state.staffs = state.staffs.concat(payload)
  }
}

const actions = {
  LOAD_STAFFS ({ commit }, payload) {
    let patients = []
    db.collection('users').where('status', '>', '').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        patients.push(doc.data())
      })
      commit('LOAD_STAFFS', patients)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
