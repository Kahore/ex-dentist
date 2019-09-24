import caseOrders from '../../data/CaseOrders.json'
import commentsListDentistLab from '../../data/CommentsHistory_DentistLab.json'
import commentsListLabClinical from '../../data/CommentsHistory_LabClinical.json'
import filesList from '../../data/CommentsHistory_Files.json'
const state = {
  caseOrder: {},
  commentsHistoryDentistLab: [],
  commentsHistoryLabClinicals: [],
  commentsHistoryFile: []
}

const getters = {
  caseOrder: (state) => {
    return state.caseOrder
  },
  commentsHistoryDentistLab: (state) => {
    return state.commentsHistoryDentistLab
  },
  commentsHistoryLabClinicals: (state) => {
    return state.commentsHistoryLabClinicals
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
    if (payload.mode === 'lab') {
      state.commentsHistoryLabClinicals = payload.data
    } else {
      state.commentsHistoryDentistLab = payload.data
    }
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
    let comments = commentsListDentistLab
    if (payload.mode === 'lab') {
      comments = commentsListLabClinical
    }
    let commentsFiltered = comments.filter(function (el) {
      return el.orderId === payload.id
    })
    commit('LOAD_HISTORY', { data: commentsFiltered, mode: payload.mode })
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
