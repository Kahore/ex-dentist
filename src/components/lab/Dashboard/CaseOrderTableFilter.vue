<template>
    <div class="row">
      <div class="col-md-12">
      <span class="btn-group-toggle ml-2" data-toggle="buttons">
        <label class="btn btn-secondary">
          <input type="checkbox" checked autocomplete="off"> All
        </label>
      </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label class="btn btn-secondary active">
            <input type="checkbox" checked autocomplete="off"> In review
          </label>
        </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label class="btn btn-secondary">
            <input type="checkbox" checked autocomplete="off"> Assigned to the Dentist
          </label>
        </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label class="btn btn-secondary">
            <input type="checkbox" checked autocomplete="off"> Assigned to the Lab
          </label>
        </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label class="btn btn-secondary">
            <input type="checkbox" checked autocomplete="off"> With clinician alert
          </label>
        </span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CaseOrderTableFilter'
}
</script>

<style lang="scss" scoped>

</style>
