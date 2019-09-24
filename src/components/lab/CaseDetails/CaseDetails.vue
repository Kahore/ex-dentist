<template>
  <div>
    <h3>Case Details</h3>
    <patientDetails :acl="'view'"/>
    <alertClinicals/>
    <caseDetailsItem/>
    <caseDetailsComments/>
    <commentsInternal :isInternal="true"/>
  </div>
</template>
<script>
export default {
  name: 'LabCaseDetailsPage',
  components: {
    patientDetails: () => import('../../dentist/Patient/PatientDetails'),
    alertClinicals: () => import('./AlertClinicals'),
    caseDetailsItem: () => import('../../dentist/CaseDetails/CaseDetailsItem'),
    caseDetailsComments: () => import('../../dentist/CaseDetails/Comments'),
    commentsInternal: () => import('../../dentist/CaseDetails/CommentsNew')
  }
}
</script>

<style lang="scss" scoped>

</style>
