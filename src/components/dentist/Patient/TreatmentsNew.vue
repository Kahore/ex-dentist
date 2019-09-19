<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h4>Available treatments</h4>
          <router-link to="/dentist-caseOrder">
            <a href="" class="dark-link"> Refine </a>
          </router-link>
          <router-link to="/dentist-caseOrder">
            <a href="" class="dark-link"> Align </a>
          </router-link>
          <router-link to="/dentist-caseOrder">
            <a href="" class="dark-link"> Direct </a>
          </router-link>
          <router-link to="/dentist-caseOrder">
            <a href="" class="dark-link"> In-Direct </a>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'patientTreatmentsNew'
}
</script>

<style lang="scss" scoped>

</style>
