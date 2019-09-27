import db from '../../config/firebaseConfig'
const state = {
  staffs: '',
  isLoading_StaffList: false
}

const getters = {
  staffs: (state) => {
    return state.staffs
  },
  isLoading_StaffList: (state) => {
    return state.isLoading_StaffList
  }
}

const mutations = {
  LOAD_STAFFS: (state, payload) => {
    state.staffs = payload
  },
  MUTATE_isLoading_StaffList: (state) => {
    state.isLoading_StaffList = !state.isLoading_StaffList
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
    commit('MUTATE_isLoading_StaffList')
    let patients = []
    db.collection('users').where('status', '>', '').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        patients.push(doc.data())
      })
      commit('LOAD_STAFFS', patients)
      commit('MUTATE_isLoading_StaffList')
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
