<template>
  <div>
    <patientModal/>
    <patientListFilter/>
    <patientList/>
  </div>
</template>

<script>
export default {
  name: 'DentistPatients',
  components: {
    patientModal: () => import('./Patients/PatientModal'),
    patientListFilter: () => import('./Patients/PatientListFilter'),
    patientList: () => import('./Patients/PatientList')
  }
}
</script>

<style lang="scss" scoped>

</style>
