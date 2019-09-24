<template>
  <div>
    <h3>Case Order</h3>
    <patientDetails :acl="'edit'"/>
    <treatmentForm/>
  </div>
</template>

<script>
export default {
  name: 'DentistCaseOrderPage',
  components: {
    patientDetails: () => import('../Patient/PatientDetails'),
    treatmentForm: () => import('./CaseOrderTreatmentForm')
  }
}
</script>

<style lang="scss" scoped>

</style>
