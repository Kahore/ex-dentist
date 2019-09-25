import db from '../../config/firebaseConfig'
const state = {
  practices: [],
  selectedPractice: {}
}

const getters = {
  practices: (state) => {
    return state.practices
  },
  selectedPractice: (state) => {
    return state.selectedPractice
  }
}

const mutations = {
  LOAD_PRACTICES: (state, payload) => {
    state.practices = payload
  },
  LOAD_PRACTICE_INFO: (state, payload) => {
    state.selectedPractice = payload
  },
  MUTATE_PRACTICE_INFO: (state, payload) => {
    let index = state.practices.findIndex(practice => practice.id === payload.id)
    state.practices.splice(index, 1)
    state.practices = state.practices.concat(payload)
  },
  ADD_PRACTICE_AT_LIST: (state, payload) => {
    state.practices = state.practices.concat(payload)
  }
}

const actions = {
  LOAD_PRACTICES ({ commit }, payload) {
    let practices = []
    db.collection('practices').where('dentistId', '==', payload).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        let patient = { ...doc.data(), id: doc.id }
        practices.push(patient)
      })
      commit('LOAD_PRACTICES', practices)
    })
  },
  LOAD_PRACTICE_INFO ({ commit, state }, payload) {
    let practices = state.practices
    let practicesById = practices.filter(function (el) {
      return el.id === payload
    })
    commit('LOAD_PRACTICE_INFO', practicesById[0])
  },
  ADD_PRACTICE ({ commit }, payload) {
    let id = db.collection('practices').doc().id
    let practice = { ...payload, id: id }
    db.collection('practices').doc(id).set(practice).then(docRef => {
      commit('ADD_PRACTICE_AT_LIST', practice)
    }).catch(error => console.log('TCL: ADD_PRACTICE -> error', error))
  },
  MUTATE_PRACTICE_INFO ({ commit }, payload) {
    db.collection('practices').where('id', '==', payload.id).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        doc.ref.update(payload)
      })
      commit('MUTATE_PRACTICE_INFO', payload)
    })
  },
  RESET_PRACTICE_INFO ({ commit }, payload) {
    commit('LOAD_PRACTICE_INFO', payload)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
