import patientsList from '../../data/Patients.json'
const state = {
  patients: ''
}

const getters = {
  patients: (state) => {
    return state.patients
  }
}

const mutations = {
  LOAD_PATIENTS: (state, payload) => {
    state.patients = payload
  }
}

const actions = {
  LOAD_PATIENTS ({ commit }, payload) {
    payload = patientsList
    commit('LOAD_PATIENTS', payload)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
