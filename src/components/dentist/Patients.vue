<template>
  <div>
    <patientsModal/>
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
    ...mapGetters(['patients'])
  },
  mounted () {
    this.$store.dispatch('LOAD_PATIENTS', 'someData')
  }
}
</script>

<style lang="scss" scoped>

</style>
