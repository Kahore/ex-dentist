<template>
  <section class="col-12 col-md-12 col-sm-12">
    <div class="col-12 col-md-6 stats-block">
      <p>Total Cases: {{ statsTotalCase }}</p>
      <p>Cases Completed: {{ statsCaseCompleted }}</p>
    </div>
    <div class="col-12 col-md-6 stats-block">
      <p>Cases Inprogress: {{ statsCaseInprogress }}</p>
      <p>Cases Required: {{ stats_Dentist_CaseAttention }}</p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DentistStats',
  computed: {
    ...mapGetters(['statsTotalCase', 'statsCaseCompleted', 'statsCaseInprogress', 'stats_Dentist_CaseAttention'])
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
