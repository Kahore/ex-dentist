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
          <textarea name="" id="" rows="2" placeholder="Details" v-model="details"></textarea>
        </div>
        <!-- .form-group -->
        <div class="form-group">
          <button
            class="btn btn-success w-100"
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
import { CASE_ORDER } from '../../../store/models/caseOrder'
export default {
  name: 'CaseOrderTreatmentForm',
  data () {
    return {
      newTreatment: this.$route.params.treatment,
      details: ''
    }
  },
  methods: {
    submitTreatment () {
      let data = JSON.parse(JSON.stringify(CASE_ORDER))
      data = {
        ...data,
        patientId: this.$route.params.id,
        treatment: this.newTreatment,
        details: this.details
      }
      this.$store.dispatch('ADD_ORDER', data)
      console.log('TCL: submitTreatment -> submitTreatment', data)
      this.updatePersonalData(data.treatment)
      this.$router.push('/dentist-patients')
    },
    // MEMO: @updatePersonalData Pass current treatment to user info
    updatePersonalData (newTreatment) {
      let personalData = this.$store.getters.patientInfo
      personalData = { ...personalData, Treatment: newTreatment }
      this.$store.dispatch('EDIT_PATIENT', personalData)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
