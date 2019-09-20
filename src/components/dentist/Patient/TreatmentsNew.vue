<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h4>Available treatments</h4>
          <router-link :to="{name:'DentistCaseOrderPage'}">
            <a href="" class="dark-link"> Refine </a>
          </router-link>
          <router-link :to="{name:'DentistCaseOrderPage'}">
            <a href="" class="dark-link"> Align </a>
          </router-link>
          <router-link :to="{name:'DentistCaseOrderPage'}">
            <a href="" class="dark-link"> Direct </a>
          </router-link>
          <router-link :to="{name:'DentistCaseOrderPage'}">
            <a href="" class="dark-link"> In-Direct </a>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'patientTreatmentsNew',
  computed: {
    ...mapGetters(['patientInfoId'])
  }
}
</script>

<style lang="scss" scoped>

</style>
