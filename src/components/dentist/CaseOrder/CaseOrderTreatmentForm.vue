<template>
  <div class="row pt-5">
    <div class="col-md-4 offset-md-4 col-sm-12 offset-sm-1">
      <form id="treatment-form" role="form" class="form-group ml-2">
        <h3 class="text-center">Treatment specific form</h3>
        <div class="form-group">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center">
                <select v-model="newTreatment">
                  <option value=""></option>
                  <option value="Design">Design</option>
                  <option value="Refine">Refine</option>
                  <option value="Align">Align</option>
                  <option value="Direct">Direct</option>
                  <option value="In-Direct">In-Direct</option>
                </select>
              </div>
            </div>
          </div>
          <!-- .row -->
        </div>
        <!-- .form-group -->
        <div class="form-group">
          <textarea name="" id="" rows="2" placeholder="Details"></textarea>
        </div>
        <!-- .form-group -->
        <div class="form-group">
          <button
            class="btn btn-success"
            style="width: 100%"
            @click.prevent="submitTreatment">
            Submit
          </button>
        </div>
        <!-- .form-group -->
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseOrderTreatmentForm',
  computed: {
    newTreatment () {
      return this.$route.params.treatment
    }
  },
  methods: {
    submitTreatment () {
      console.log('TCL: submitTreatment -> submitTreatment')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
