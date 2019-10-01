import db, { firebaseAuth } from '../../config/firebaseConfig'
const state = {
  isLoggedIn: false,
  currentUser: {},
  // Memo: MOCK data
  user: {},
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
    if (localStorage.getItem('userInfo')) {
      return JSON.parse(localStorage.getItem('userInfo'))
    } else {
      return state.user
    }
  },
  currentUserId: (state) => {
    if (localStorage.getItem('userInfo')) {
      return JSON.parse(localStorage.getItem('userInfo')).id
    } else {
      return state.user.id
    }
  }
}

const mutations = {
  AUTH_STATUS_CHANGE: (state) => {
    state.isLoggedIn = firebaseAuth().currentUser != null
    state.currentUser = {}
  },
  MUTATE_USER_TYPE: (state, payload) => {
    state.userType = payload
  },
  LOAD_USER: (state, payload) => {
    state.user = payload
  }
}

const actions = {
  MUTATE_USER_TYPE ({ commit }, payload) {
    commit('MUTATE_USER_TYPE', payload)
  },
  CREATE_USER_WITH_LOGIN ({ commit }, payload) {
    db.collection('users').add(payload).then(() => {
      commit('LOAD_USER', payload)
    })
  },
  LOAD_USER ({ commit }, payload) {
    return new Promise(function (resolve, reject) {
      db.collection('users').where('id', '==', payload).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let data = doc.data()
          localStorage.setItem('userInfo', JSON.stringify(data))
          commit('LOAD_USER', data)
          resolve(data)
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
