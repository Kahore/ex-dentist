<template>
  <div>
    <patientsModal :acl="'edit'"/>
    <patientsListFilter/>
    <patientsList :patients ="patients" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
export default {
  name: 'DentistPatients',
  components: {
    patientsModal: () => import('./Patients/PatientsModal'),
    patientsListFilter: () => import('./Patients/PatientsListFilter'),
    patientsList: () => import('./Patients/PatientsList')
  },
  computed: {
    ...mapGetters(['patients'])
  },
  mounted () {
    let dentistId = firebase.auth().currentUser.uid
    this.$store.dispatch('LOAD_PATIENTS', dentistId)
  }
}
</script>

<style lang="scss" scoped>

</style>
