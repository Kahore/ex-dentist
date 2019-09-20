import patientsList from '../../data/Patients.json'
const state = {
  patientInfo: ''
}

const getters = {
  patientInfo: (state) => {
    return state.patientInfo
  },
  patientInfoId: (state) => {
    return state.patientInfo.id
  }
}

const mutations = {
  LOAD_PATIENT_INFO: (state, payload) => {
    state.patientInfo = payload
  }
}

const actions = {
  LOAD_PATIENT_INFO ({ commit }, payload) {
    let patients = patientsList
    let patient = patients.filter(function (el) {
      return el.id === payload
    })
    commit('LOAD_PATIENT_INFO', patient[0])
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
