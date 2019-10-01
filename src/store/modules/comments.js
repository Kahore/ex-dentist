import db from '../../config/firebaseConfig'

const state = {
  commentsHistoryDentistLab: [],
  commentsHistoryLabClinicals: [],
  commentsHistoryFile: [],
  isLoading_FilesList: false
}

const getters = {
  commentsHistoryDentistLab: (state) => {
    return state.commentsHistoryDentistLab
  },
  commentsHistoryLabClinicals: (state) => {
    return state.commentsHistoryLabClinicals
  },
  commentsHistoryFile: (state) => {
    return state.commentsHistoryFile
  },
  isLoading_FilesList: (state) => {
    return state.isLoading_FilesList
  }
}

const mutations = {
  LOAD_HISTORY: (state, payload) => {
    if (payload.mode === 'lab') {
      state.commentsHistoryLabClinicals = payload.data
    } else {
      state.commentsHistoryDentistLab = payload.data
    }
  },
  LOAD_FILES: (state, payload) => {
    state.commentsHistoryFile = payload
  },
  MUTATE_isLoading_FilesList: (state) => {
    state.isLoading_FilesList = !state.isLoading_FilesList
  },
  ADD_COMMENT: (state, payload) => {
    if (payload.mode === 'lab') {
      state.commentsHistoryLabClinicals = state.commentsHistoryLabClinicals.concat(payload.data)
    } else {
      state.commentsHistoryDentistLab = state.commentsHistoryDentistLab.concat(payload.data)
    }
    if (payload.data.fileName !== '') {
      state.commentsHistoryFile = state.commentsHistoryFile.concat(payload.data)
    }
  }
}

const actions = {
  LOAD_HISTORY ({ commit }, payload) {
    let comments = []
    let query = db.collection('commentsDentistLab')
    if (payload.mode === 'lab') {
      query = db.collection('commentsLabClinician')
    }
    query.where('orderId', '==', payload.id).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        comments.push(doc.data())
      })
      commit('LOAD_HISTORY', { data: comments, mode: payload.mode })
    })
  },
  LOAD_FILES ({ commit }, payload) {
    commit('MUTATE_isLoading_FilesList')
    let files = []
    let collections = ['commentsDentistLab', 'commentsLabClinician']
    let helperCount = 0
    let options = { where: [['orderId', '==', payload.orderId], ['fileName', '>', '']] }
    if (payload.from !== 'All') {
      options.where.push(['from', '==', payload.from])
    }
    let { where } = options
    for (let index = 0; index < collections.length; index++) {
      let query = db.collection(collections[index])
      for (let w of where) {
        query = query.where(...w)
      }
      query.get().then(querySnapshot => {
        helperCount = helperCount + 1
        querySnapshot.forEach(doc => {
          files.push(doc.data())
          if (helperCount === collections.length) {
            commit('MUTATE_isLoading_FilesList')
          }
        })
        if (querySnapshot.empty && helperCount === collections.length) {
          commit('MUTATE_isLoading_FilesList')
        }
      })
    }
    commit('LOAD_FILES', files)
  },
  ADD_COMMENT ({ commit }, payload) {
    let collection
    collection = payload.mode === 'lab' ? 'commentsLabClinician' : 'commentsDentistLab'
    let id = db.collection(collection).doc().id
    let comment = { ...payload.data, id: id }
    db.collection(collection).doc(id).set(comment).then(docRef => {
      commit('ADD_COMMENT', { data: comment, mode: payload.mode })
    }).catch(error => console.log('TCL: ADD_PATIENT -> error', error))
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
