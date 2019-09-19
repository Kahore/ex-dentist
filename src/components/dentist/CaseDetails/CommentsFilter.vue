<template>
  <div>
    <h5>Files upload by</h5>
    <div class="row">
      <div class="col-md-12">
      <span class="btn-group-toggle ml-2" data-toggle="buttons">
        <label class="btn btn-secondary">
          <input type="checkbox" checked autocomplete="off"> All
        </label>
      </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label class="btn btn-secondary active">
            <input type="checkbox" checked autocomplete="off"> Dentist
          </label>
        </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label class="btn btn-secondary">
            <input type="checkbox" checked autocomplete="off"> Lab
          </label>
        </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label class="btn btn-secondary">
            <input type="checkbox" checked autocomplete="off"> Clinician
          </label>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DentistCommentsFilter'
}
</script>

<style lang="scss" scoped>

</style>
