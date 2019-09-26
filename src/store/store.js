import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import patient from './modules/patient'
import patients from './modules/patients'
import caseOrder from './modules/caseOrder'
import caseOrders from './modules/caseOrders'
import comments from './modules/comments'
import practices from './modules/practices'
import dentistStats from './modules/dentistStats'
import labStats from './modules/labStats'
import staff from './modules/staff'
import staffs from './modules/staffs'
import clinicianStats from './modules/clinicianStats'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth, patient, patients, caseOrder, caseOrders, comments, practices, dentistStats, labStats, staff, staffs, clinicianStats
  }
})
