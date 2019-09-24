<template>
  <div>
    <h3>Case Details</h3>
    <patientDetails :acl="'view'"/>
    <caseDetailsItem/>
    <caseDetailsComments/>
  </div>
</template>

<script>
export default {
  name: 'LabCaseDetailsPage',
  components: {
    patientDetails: () => import('../../dentist/Patient/PatientDetails'),
    caseDetailsItem: () => import('../../dentist/CaseDetails/CaseDetailsItem'),
    caseDetailsComments: () => import('../../dentist/CaseDetails/Comments')
  }
}
</script>

<style lang="scss" scoped>

</style>
