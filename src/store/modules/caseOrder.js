import caseOrders from '../../data/CaseOrders.json'
import commentsList from '../../data/CommentsHistory.json'
import filesList from '../../data/CommentsHistory_Files.json'
const state = {
  caseOrder: {},
  commentsHistory: [],
  commentsHistoryFile: []
}

const getters = {
  caseOrder: (state) => {
    return state.caseOrder
  },
  commentsHistory: (state) => {
    return state.commentsHistory
  },
  commentsHistoryFile: (state) => {
    return state.commentsHistoryFile
  }
}

const mutations = {
  LOAD_ORDER: (state, payload) => {
    state.caseOrder = payload
  },
  LOAD_HISTORY: (state, payload) => {
    state.commentsHistory = payload
  },
  LOAD_FILES: (state, payload) => {
    state.commentsHistoryFile = payload
  }
}

const actions = {
  LOAD_ORDER ({ commit }, payload) {
    let orders = caseOrders
    let order = orders.filter(function (el) {
      return el.id === payload
    })
    commit('LOAD_ORDER', order[0])
  },
  LOAD_HISTORY ({ commit }, payload) {
    let comments = commentsList
    let commentsFiltered = comments.filter(function (el) {
      return el.orderId === payload
    })
    commit('LOAD_HISTORY', commentsFiltered)
  },
  LOAD_FILES ({ commit }, payload) {
    let files = filesList
    let filesFiltered = files.filter(function (el) {
      return el.orderId === payload.orderId
    })
    if (payload.from !== 'All') {
      filesFiltered = filesFiltered.filter(function (el) {
        return el.from === payload.from
      })
    }
    commit('LOAD_FILES', filesFiltered)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
