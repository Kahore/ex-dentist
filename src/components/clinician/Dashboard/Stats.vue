<template>
  <div class="container mt-2">
    <div class="col-md-12">
      <div class="row">
        <div class="col-12 col-md-4">
          <p>Total Cases: {{clinicianStats.totalCases}}</p>
          <p>Cases Completed: {{clinicianStats.casesCompleted}}</p>
        </div>
        <div class="col-12 col-md-4">
          <p>Cases in Review: {{clinicianStats.casesInProgress}}</p>
          <p>Cases Sent to Practice: {{clinicianStats.casesWithAlert}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ClinicianStats',
  computed: {
    ...mapGetters(['clinicianStats'])
  },
  mounted () {
    this.$store.dispatch('LOAD_CLINICIAN_STATS', 'c1')
  }
}
</script>
