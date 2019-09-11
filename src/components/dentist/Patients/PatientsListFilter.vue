<template>
   <div class="container table-responsive mt-2">
    <div class="col-md-12">
    <div class="row">
      <div class="col-12">
        <input
          type="text"
          name="patientListFilter"
          id="patientListFilter"
          class="form-control"
          placeholder="Search in patients">
      </div>
    </div>
    <!-- .row -->
    <div class="row">
      <div class="col-md-12">
      <span class="btn-group-toggle ml-2" data-toggle="buttons">
        <label class="btn btn-secondary">
          <input type="checkbox" checked autocomplete="off"> All
        </label>
      </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label class="btn btn-secondary active">
            <input type="checkbox" checked autocomplete="off"> In Treatment
          </label>
        </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label class="btn btn-secondary">
            <input type="checkbox" checked autocomplete="off"> Not In Treatment
          </label>
        </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label class="btn btn-secondary">
            <input type="checkbox" checked autocomplete="off"> Archived
          </label>
        </span>
      </div>
    </div>
  </div>
   </div>
</template>

<script>
export default {
  name: 'DentistPatientListFilter'
}
</script>

<style lang="scss" scoped>

</style>
