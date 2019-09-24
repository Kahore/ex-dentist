import { firebaseAuth } from '../../config/firebaseConfig'

const state = {
  isLoggedIn: firebaseAuth().currentUser != null,
  // user: firebaseAuth().currentUser,
  // Memo: MOCK data
  user: {
    'id': 'd1',
    'first_name': 'DentistFirstName',
    'last_name': 'DentistLastName',
    'gdc_number': 'DentistGDScnumber',
    'email': 'Dentist@example.com',
    'type': 'Dentist'
  },
  userType: ''
}

const getters = {
  isLoggedIn: (state) => {
    return state.isLoggedIn
  },
  selectedUserType: (state) => {
    return state.userType
  },
  currentUser: (state) => {
    // if (state && state.user) {
    if (state) {
      return {
        // email: state.user.email,
        // emailVerified: state.user.emailVerified,
        // uid: state.user.uid
        id: state.user.id,
        first_name: state.user.first_name,
        last_name: state.user.last_name,
        gdc_number: state.user.gdc_number,
        email: state.user.email
      }
    } else {
      return {}
    }
  }
}

const mutations = {
  'AUTH_STATUS_CHANGE' (state) {
    state.isLoggedIn = firebaseAuth().currentUser != null
    state.user = firebaseAuth().currentUser
  },
  MUTATE_USER_TYPE: (state, payload) => {
    state.userType = payload
  }
}

const actions = {
  MUTATE_USER_TYPE ({ commit }, payload) {
    commit('MUTATE_USER_TYPE', payload)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
