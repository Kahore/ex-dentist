<template>
  <div>
    <patientDetails :acl="'view'"/>
    <alertClinicals/>
    <caseDetailsItem/>
    <commentsFiles/>
    <comments/>
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
    commentsFiles: () => import('../../dentist/CaseDetails/CommentsFiles'),
    comments: () => import('../../dentist/CaseDetails/CommentsNew'),
    commentsInternal: () => import('../../dentist/CaseDetails/CommentsNew')
  }
}
</script>
