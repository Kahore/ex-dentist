<template>
  <div class="container mt-2">
    <div class="col-md-12">
      <div class="row">
        <div class="col-12 col-md-4">
          <p>Total Cases: {{labStats.totalCases}}</p>
          <p>Cases Completed: {{labStats.casesCompleted}}</p>
        </div>
        <div class="col-12 col-md-4">
          <p>Cases in Review: {{labStats.casesInReview}}</p>
          <p>Cases Sent to Practice: {{labStats.casesSentToPractice}}</p>
        </div>
        <div class="col-12 col-md-4">
          <p>Cases Required Attention: {{labStats.casesRequiredAttention}}</p>
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
    ...mapGetters(['labStats'])
  },
  mounted () {
    // this.$store.dispatch('LOAD_ORDERS', 'some data for future implement')
    // this.$store.dispatch('LOAD_STATS', this.currentUser.id)
    this.$store.dispatch('LOAD_LAB_STATS', 'l1')
  }
}
</script>

<style lang="scss" scoped>

</style>
