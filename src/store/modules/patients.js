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
    let patients = []
    let { where, orderBy, limit } = payload
    let query = db.collection('patients')
    if (where) {
      if (where[0] instanceof Array) {
        for (let w of where) {
          query = query.where(...w)
        }
      } else {
        query = query.where(...where)
      }
    }
    if (orderBy) {
      query = query.orderBy(...orderBy)
    }

    if (limit) {
      query = query.limit(limit)
    }
    query.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        let patient = { ...doc.data(), id: doc.id }
        patients.push(patient)
      })
      commit('LOAD_PATIENTS', patients)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
