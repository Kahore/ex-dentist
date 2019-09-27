<template>
  <div>
    <patientDetails :acl="'edit'"/>
    <patientTreatmentsNew/>
    <patientTreatmentsHistory/>
  </div>
</template>

<script>
export default {
  name: 'PatientPage',
  components: {
    patientDetails: () => import('./Patient/PatientDetails'),
    patientTreatmentsHistory: () => import('./Patient/TreatmentsHistory'),
    patientTreatmentsNew: () => import('./Patient/TreatmentsNew')
  }
}
</script>
