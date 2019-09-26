import Main from './components/Main.vue'
import NoAccess from './components/NoAccess.vue'
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
/**/
import ClinicianDashboard from './components/clinician/Dashboard.vue'
import ClinicianMyAccount from './components/clinician/MyAccount.vue'
import ClinicianCaseDetailsPage from './components/clinician/CaseDetails/CaseDetails.vue'

export const routes = [
  {
    path: '/',
    component: Main,
    name: 'mainpage'
  },
  {
    path: '/recovery',
    component: PasswordRecovery,
    name: 'recovery',
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    component: Register,
    name: 'register',
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/dentist-dashboard',
    component: DentistDashboard,
    name: 'DentistDashboard',
    meta: {
      requiresAuth: true,
      typeToProtect: 'Dentist'
    }
  },
  {
    path: '/dentist-patients',
    component: DentistPatients,
    name: 'DentistPatients',
    meta: {
      requiresAuth: true,
      typeToProtect: 'Dentist'
    }
  },
  {
    path: '/dentist-patients/:id',
    component: DentistPatientPage,
    name: 'DentistPatientPage',
    meta: {
      requiresAuth: true,
      typeToProtect: 'Dentist'
    }
  },
  {
    path: '/dentist-patients/:id/caseOrder/:treatment',
    component: DentistCaseOrderPage,
    name: 'DentistCaseOrderPage',
    meta: {
      requiresAuth: true,
      typeToProtect: 'Dentist'
    }
  },
  {
    path: '/dentist-patients/:id/caseOrderDetails/:orderId',
    component: DentistCaseDetailsPage,
    name: 'DentistCaseDetailsPage',
    meta: {
      requiresAuth: true,
      typeToProtect: 'Dentist'
    }
  },
  {
    path: '/dentist-support',
    component: DentistSupport,
    name: 'DentistSupport',
    meta: {
      requiresAuth: true,
      typeToProtect: 'Dentist'
    }
  },
  {
    path: '/dentist-myAccount',
    component: DentistMyAccount,
    name: 'DentistMyAccount',
    meta: {
      requiresAuth: true,
      typeToProtect: 'Dentist'
    }
  },
  {
    path: '/lab-dashboard',
    component: LabDashboard,
    name: 'LabDashboard',
    meta: {
      requiresAuth: true,
      typeToProtect: 'Lab'
    }
  },
  {
    path: '/lab-staffs',
    component: LabStaffs,
    name: 'LabStaffs',
    meta: {
      requiresAuth: true,
      typeToProtect: 'Lab'
    }
  },
  {
    path: '/lab-myAccount',
    component: LabMyAccount,
    name: 'LabMyAccount',
    meta: {
      requiresAuth: true,
      typeToProtect: 'Lab'
    }
  },
  {
    path: '/lab-patients/:id/caseOrderDetails/:orderId',
    component: LabCaseDetailsPage,
    name: 'LabCaseDetailsPage',
    meta: {
      requiresAuth: true,
      typeToProtect: 'Lab'
    }
  },
  {
    path: '/clinician-dashboard',
    component: ClinicianDashboard,
    name: 'ClinicianDashboard',
    meta: {
      requiresAuth: true,
      typeToProtect: 'Clinician'
    }
  },
  {
    path: '/clinician-myAccount',
    component: ClinicianMyAccount,
    name: 'ClinicianMyAccount',
    meta: {
      requiresAuth: true,
      typeToProtect: 'Clinician'
    }
  },
  {
    path: '/clinician-patients/:id/caseOrderDetails/:orderId',
    component: ClinicianCaseDetailsPage,
    name: 'ClinicianCaseDetailsPage',
    meta: {
      requiresAuth: true,
      typeToProtect: 'Clinician'
    }
  },
  {
    path: '/noAccess',
    component: NoAccess,
    name: 'NoAccess'
  },
  {
    path: '*',
    redirect: '/'
  }
]
