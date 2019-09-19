import Main from './components/Main.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import PasswordRecovery from './components/auth/PasswordRecovery.vue'
import DentistDashboard from './components/dentist/Dashboard.vue'
import DentistPatients from './components/dentist/Patients.vue'
import DentistPatientPage from './components/dentist/Patient.vue'
import DentistSupport from './components/dentist/Support.vue'
import DentistMyAccount from './components/dentist/MyAccount.vue'
import DentistCaseOrderPage from './components/dentist/CaseOrder/CaseOrder.vue'

export const routes = [
  { path: '/', component: Main, name: 'mainpage' },
  // { path: '/product/:id', component: ProductDetails, name: 'product' },
  { path: '/recovery', component: PasswordRecovery, name: 'recovery', onlyGuest: true },
  { path: '/login', component: Login, name: 'login', onlyGuest: true },
  { path: '/register', component: Register, name: 'register', onlyGuest: true },
  { path: '/dentist-dashboard', component: DentistDashboard, name: 'DentistDashboard' },
  { path: '/dentist-patients', component: DentistPatients, name: 'DentistPatients' },
  { path: '/dentist-patients/patient', component: DentistPatientPage, name: 'DentistPatientPage' },
  { path: '/dentist-caseOrder', component: DentistCaseOrderPage, name: 'DentistCaseOrderPage' },
  { path: '/dentist-support', component: DentistSupport, name: 'DentistSupport' },
  { path: '/dentist-myAccount', component: DentistMyAccount, name: 'DentistMyAccount' },
  { path: '*', redirect: '/' }
]
