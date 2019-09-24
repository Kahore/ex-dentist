import db from '../../config/firebaseConfig'
const state = {
  patients: []
}

const getters = {
  patients: (state) => {
    return state.patients
  }
}

const mutations = {
  LOAD_PATIENTS: (state, payload) => {
    state.patients = payload
    console.log('TCL: payload', payload)
  },
  ADD_PATIENT_AT_LIST: (state, payload) => {
    state.patients = state.patients.concat(payload)
  },
  EDIT_PATIENT_AT_LIST: (state, payload) => {
    let index = state.patients.findIndex(patient => patient.id === payload)
    state.patients.splice(index, 1)
    state.patients = state.patients.concat(payload)
  },
  DELETE_PATIENT_AT_LIST: (state, payload) => {
    let index = state.patients.findIndex(patient => patient.id === payload)
    state.patients.splice(index, 1)
  }
}

const actions = {
  LOAD_PATIENTS ({ commit }, payload) {
    payload = []
    db.collection('patients').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        let patient = { ...doc.data(), id: doc.id }
        payload.push(patient)
      })
      commit('LOAD_PATIENTS', payload)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
