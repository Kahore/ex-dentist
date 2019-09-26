import db from '../../config/firebaseConfig'
const state = {
  stats: {}
}

const getters = {
  stats: (state) => {
    return state.stats
  }
}

const mutations = {
  LOAD_STATS: (state, payload) => {
    state.stats = payload
  }
}

const actions = {
  LOAD_STATS ({ commit }, payload) {
    db.collection('statsDentist').where('dentistId', '==', payload).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        commit('LOAD_STATS', doc.data())
      })
    })
  },
  UPDATE_DENTIST_TOTAL_CASE  ({ commit }, payload) {
    let collectionId
    let totalCases
    db.collection('statsDentist').where('dentistId', '==', payload).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        collectionId = doc.data().id
        totalCases = doc.data().totalCases
        totalCases = totalCases + 1
        db.collection('statsDentist')
          .doc(collectionId)
          .update({
            'totalCases': totalCases
          })
      })
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
