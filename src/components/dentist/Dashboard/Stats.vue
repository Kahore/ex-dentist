<template>
  <section class="col-12 col-md-6 col-sm-8">
    <div class="col-6 stats-block">
      <p>Total Cases: {{ statsTotalCase }}</p>
      <p>Cases Completed: {{ stats_Dentist_CaseCompleted }}</p>
    </div>
    <div class="col-6 stats-block">
      <p>Cases Inprogress: {{ stats_Dentist_CaseInprogress }}</p>
      <p>Cases Required: {{ stats_Dentist_CaseAttention }}</p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DentistStats',
  computed: {
    ...mapGetters(['statsTotalCase', 'stats_Dentist_CaseCompleted', 'stats_Dentist_CaseInprogress', 'stats_Dentist_CaseAttention'])
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
