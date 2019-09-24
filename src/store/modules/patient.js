import db from '../../config/firebaseConfig'
const state = {
  patientInfo: {
    'id': '',
    'first_name': '',
    'last_name': ' ',
    'Treatment': '',
    'Status': '',
    'RegistrationDate': '',
    'PracticeName': '',
    'date_of_birth': '',
    'gender': '',
    'email': '',
    'practice_centre_id': '',
    'profile_picture': ''
  }
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
    db.collection('patients').doc(payload).get().then(doc => {
      let patient = { ...doc.data(), id: doc.id }
      console.log('TCL: LOAD_PATIENT_INFO -> patient', patient)
      commit('LOAD_PATIENT_INFO', patient)
    })
  },
  ADD_PATIENT ({ commit }, payload) {
    let id = db.collection('patients').doc().id
    let patient = { ...payload, id: id }
    db.collection('patients').doc(id).set(patient).then(docRef => {
      commit('ADD_PATIENT_AT_LIST', patient)
    }).catch(error => console.log('TCL: ADD_PATIENT -> error', error))
  },
  EDIT_PATIENT ({ commit }, payload) {
    db.collection('patients').where('id', '==', payload.id).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        doc.ref.update(payload)
      })
      commit('EDIT_PATIENT_AT_LIST', payload)
    })
  },
  DELETE_PATIENT ({ commit }, payload) {
    // TODO: Delete all data, where patientId reference is
    db.collection('patients').where('id', '==', payload).get().then(querySnapshot => {
      console.log('TCL: DELETE_PATIENT -> querySnapshot', querySnapshot)
      querySnapshot.forEach(doc => {
        doc.ref.delete()
      })
      commit('DELETE_PATIENT_AT_LIST', payload)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
