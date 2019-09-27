<template>
  <div>
    <patientsModal :acl="'edit'"/>
    <patientsListFilter/>
    <patientsList :patients ="patients" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DentistPatients',
  components: {
    patientsModal: () => import('./Patients/PatientsModal'),
    patientsListFilter: () => import('./Patients/PatientsListFilter'),
    patientsList: () => import('./Patients/PatientsList')
  },
  computed: {
    ...mapGetters(['patients', 'currentUserId'])
  },
  mounted () {
    let dentistId = this.currentUserId
    let options = { where: ['dentistId', '==', dentistId] }
    this.$store.dispatch('LOAD_PATIENTS', options)
  }
}
</script>
