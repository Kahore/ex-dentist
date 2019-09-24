<template>
  <div>
    <h3>Case Details</h3>
    <patientDetails :acl="'edit'"/>
    <caseDetailsItem/>
    <caseDetailsComments/>
  </div>
</template>

<script>
export default {
  name: 'DentistCaseDetails',
  components: {
    patientDetails: () => import('../Patient/PatientDetails'),
    caseDetailsItem: () => import('./CaseDetailsItem'),
    caseDetailsComments: () => import('./Comments')
  }
}
</script>

<style lang="scss" scoped>

</style>
