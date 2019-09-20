<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <h4 class="pl-3 pt-2">Patient's treatments history</h4>
        <ul class="list-group">
          <li class="list-group-item">
            <router-link
            :to='"/dentist-patients/"+patientInfoId+"/caseOrderDetails"'>
              <a
                href=""
                class="dark-link">
                Design
              </a>
            </router-link>
          </li>
          <li class="list-group-item">
            <router-link
             :to='"/dentist-patients/"+patientInfoId+"/caseOrderDetails"'>
              <a
                href=""
                class="dark-link">
                Refine
              </a>
            </router-link>
          </li>
          <li class="list-group-item">
            <router-link
              :to='"/dentist-patients/"+patientInfoId+"/caseOrderDetails"'>
              <a
                href=""
                class="dark-link">
                Align
              </a>
            </router-link>
          </li>
          <li class="list-group-item">
            <router-link
            :to='"/dentist-patients/"+patientInfoId+"/caseOrderDetails"'>
              <a
                href=""
                class="dark-link">
                Direct
              </a>
            </router-link>
          </li>
          <li class="list-group-item">
            <router-link
              :to='"/dentist-patients/"+patientInfoId+"/caseOrderDetails"'>
              <a
                href=""
                class="dark-link">
                In-Direct
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
    ...mapGetters(['patientInfoId'])
  }
}
</script>

<style lang="scss" scoped>

</style>
