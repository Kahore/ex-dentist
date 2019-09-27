<template>
  <div class="container pt-2">
    <div class="row">
      <div class="col-md-12 offset-md-2">
        <h4>Available treatments</h4>
          <router-link :to='"/dentist-patients/"+patientInfoId+"/caseOrder/Refine"'>
            <a href="" class="dark-link"> Refine </a>
          </router-link>
          <router-link :to='"/dentist-patients/"+patientInfoId+"/caseOrder/Align"'>
            <a href="" class="dark-link"> Align </a>
          </router-link>
          <router-link :to='"/dentist-patients/"+patientInfoId+"/caseOrder/Direct"'>
            <a href="" class="dark-link"> Direct </a>
          </router-link>
          <router-link :to='"/dentist-patients/"+patientInfoId+"/caseOrder/In-Direct"'>
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
