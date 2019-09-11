<template>
  <div>
    <patientsModal/>
    <patientsListFilter/>
    <patientsList/>
  </div>
</template>

<script>
export default {
  name: 'DentistPatients',
  components: {
    patientsModal: () => import('./Patients/PatientsModal'),
    patientsListFilter: () => import('./Patients/PatientsListFilter'),
    patientsList: () => import('./Patients/PatientsList')
  }
}
</script>

<style lang="scss" scoped>

</style>
