<template>
  <div>
    <patientDetails :acl="'edit'"/>
    <caseDetailsItem/>
    <comments/>
    <commentsFiles/>
  </div>
</template>

<script>
export default {
  name: 'DentistCaseDetails',
  components: {
    patientDetails: () => import('../Patient/PatientDetails'),
    caseDetailsItem: () => import('./CaseDetailsItem'),
    commentsFiles: () => import('./CommentsFiles'),
    comments: () => import('./CommentsNew')
  }
}
</script>
