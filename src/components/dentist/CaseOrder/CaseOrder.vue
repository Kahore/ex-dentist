<template>
  <div>
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
