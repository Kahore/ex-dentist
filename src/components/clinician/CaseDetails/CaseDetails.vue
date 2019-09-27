<template>
  <div>
    <h3>Case Details</h3>
    <patientDetails :acl="'view'"/>
    <caseDetailsItem/>
    <commentsFiles/>
    <comments :acl="'view'"/>
    <commentsInternal :isInternal="true"/>
  </div>
</template>

<script>
export default {
  name: 'ClinicianCaseDetailsPage',
  components: {
    patientDetails: () => import('../../dentist/Patient/PatientDetails'),
    caseDetailsItem: () => import('../../dentist/CaseDetails/CaseDetailsItem'),
    commentsFiles: () => import('../../dentist/CaseDetails/CommentsFiles'),
    comments: () => import('../../dentist/CaseDetails/CommentsNew'),
    commentsInternal: () => import('../../dentist/CaseDetails/CommentsNew')
  }
}
</script>
