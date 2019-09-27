<template>
  <div class="container mt-2">
    <div class="col-md-12">
      <div class="row">
        <div class="col-12 col-md-4">
          <p>Total Cases: {{statsTotalCase}}</p>
          <p>Cases Completed: {{statsCaseCompleted}}</p>
        </div>
        <div class="col-12 col-md-4">
          <p>Cases in Review: {{statsCaseInReview}}</p>
          <p>Cases Sent to Practice: {{statsCaseInprogress}}</p>
        </div>
        <div class="col-12 col-md-4">
          <p>Cases Required Attention: {{stats_Lab_CaseAttention}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LabStats',
  computed: {
    ...mapGetters(['statsTotalCase', 'statsCaseCompleted', 'statsCaseInprogress', 'statsCaseInReview', 'stats_Lab_CaseAttention'])
  }
}
</script>
