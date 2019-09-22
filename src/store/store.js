import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import patient from './modules/patient'
import patients from './modules/patients'
import caseOrder from './modules/caseOrder'
import caseOrders from './modules/caseOrders'
import practices from './modules/practices'
import dentistStats from './modules/dentistStats'
import * as actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    auth, patient, patients, caseOrder, caseOrders, practices, dentistStats
  }
})
