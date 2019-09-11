<template>
  <div class="container">
    <div class="col-md-12">
      <div class="row">
        <div class="col-12 col-md-4">
            Patient Photo here
        </div>
        <div class="col-12 col-md-4">
            <p>First Name Last Name - Gender</p>
            <p>Date Of Birth Email Address</p>
            <p>Practice Centre</p>
        </div>
      </div>
      <!-- .row -->
      <div class="row">
        <div class="col-12 col-md-4">
            <a class="dark-link" href="">Edit Patient profile</a>
        </div>
        <clinicalNotesModal/>
      </div>
      <!-- .row -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'DentistPatientDetails',
  components: {
    clinicalNotesModal: () => import('./ClinicalNotesModal')
  }
}
</script>

<style lang="scss" scoped>

</style>
