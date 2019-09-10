import { firebaseAuth } from '../../config/firebaseConfig'

const state = {
  isLoggedIn: firebaseAuth().currentUser != null,
  user: firebaseAuth().currentUser,
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
    if (state && state.user) {
      return {
        email: state.user.email,
        emailVerified: state.user.emailVerified,
        uid: state.user.uid
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
