import Main from './components/Main.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import PasswordRecovery from './components/auth/PasswordRecovery.vue'
/**/
import DentistDashboard from './components/dentist/Dashboard.vue'
import DentistPatients from './components/dentist/Patients.vue'
import DentistPatientPage from './components/dentist/Patient.vue'
import DentistSupport from './components/dentist/Support.vue'
import DentistMyAccount from './components/dentist/MyAccount.vue'
import DentistCaseOrderPage from './components/dentist/CaseOrder/CaseOrder.vue'
import DentistCaseDetailsPage from './components/dentist/CaseDetails/CaseDetails.vue'
/**/
import LabDashboard from './components/lab/Dashboard.vue'
import LabStaffs from './components/lab/Staffs.vue'
import LabMyAccount from './components/lab/MyAccount.vue'
import LabCaseDetailsPage from './components/lab/CaseDetails/CaseDetails.vue'
export const routes = [
  { path: '/', component: Main, name: 'mainpage' },
  { path: '/recovery', component: PasswordRecovery, name: 'recovery', onlyGuest: true },
  { path: '/login', component: Login, name: 'login', onlyGuest: true },
  { path: '/register', component: Register, name: 'register', onlyGuest: true },
  { path: '/dentist-dashboard', component: DentistDashboard, name: 'DentistDashboard' },
  { path: '/dentist-patients', component: DentistPatients, name: 'DentistPatients' },
  { path: '/dentist-patients/:id', component: DentistPatientPage, name: 'DentistPatientPage' },
  { path: '/dentist-patients/:id/caseOrder/:treatment', component: DentistCaseOrderPage, name: 'DentistCaseOrderPage' },
  { path: '/dentist-patients/:id/caseOrderDetails/:orderId', component: DentistCaseDetailsPage, name: 'DentistCaseDetailsPage' },
  { path: '/dentist-support', component: DentistSupport, name: 'DentistSupport' },
  { path: '/dentist-myAccount', component: DentistMyAccount, name: 'DentistMyAccount' },
  { path: '/lab-dashboard', component: LabDashboard, name: 'LabDashboard' },
  { path: '/lab-staffs', component: LabStaffs, name: 'LabStaffs' },
  { path: '/lab-myAccount', component: LabMyAccount, name: 'LabMyAccount' },
  { path: '/lab-patients/:id/caseOrderDetails/:orderId', component: LabCaseDetailsPage, name: 'LabCaseDetailsPage' },
  { path: '*', redirect: '/' }
]
