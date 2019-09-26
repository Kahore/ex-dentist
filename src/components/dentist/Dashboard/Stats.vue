<template>
  <section class="col-12 col-md-6 col-sm-8">
    <div class="col-6 stats-block">
      <p>Total Cases: {{stats.totalCases}}</p>
      <p>Cases Completed: {{stats.casesCompleted}}</p>
    </div>
    <div class="col-6 stats-block">
      <p>Cases Inprogress: {{stats.casesInprogress}}</p>
      <p>Cases Required: {{stats.casesRequiredAttention}}</p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
export default {
  name: 'DentistStats',
  computed: {
    ...mapGetters(['stats'])
  },
  mounted () {
    let dentistId = firebase.auth().currentUser.uid
    this.$store.dispatch('LOAD_STATS', dentistId)
  }
}
</script>

<style lang="scss" scoped>
.stats{
  &-block {
    display: inline-block
  }
}
</style>
