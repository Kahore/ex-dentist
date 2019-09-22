<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <h4 class="pl-3 pt-2">Patient's treatments history</h4>
        <ul
          class="list-group"
          v-for="(treatment, index) in treatmentsHistory"
          :key="index">
          <li class="list-group-item">
            <router-link
            :to='"/dentist-patients/"+treatment.patientId+"/caseOrderDetails/"+treatment.id'>
              <a
                href=""
                class="dark-link">
                {{ treatment.treatment }}
              </a>
            </router-link>
          </li>
        </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PatientTreatments',
  computed: {
    ...mapGetters(['patientInfoId','treatmentsHistory'])
  },
  mounted () {
    let patientId = this.$store.getters.patientInfoId
    this.$store.dispatch('LOAD_TREATMENTS', patientId)
  }
}
</script>

<style lang="scss" scoped>

</style>
