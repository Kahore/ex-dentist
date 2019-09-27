<template>
  <div class="container pt-5">
   <div class="row">
    <h4 class="col-12 offset-md-2 pl-4">Treatment specific form</h4>
    <div class="col-lg-3 col-md-4 offset-md-2 col-12">
      <form id="treatment-form" role="form" class="form ml-2">
        <div class="form-group">
          <label for="treatmentNew">New treatment</label>
          <select required v-model="newTreatment" id="treatmentNew" class="form-control">
            <option value=""></option>
            <option value="Design">Design</option>
            <option value="Refine">Refine</option>
            <option value="Align">Align</option>
            <option value="Direct">Direct</option>
            <option value="In-Direct">In-Direct</option>
          </select>
        </div>
        <!-- .form-group -->
        <div class="form-group">
          <label class="col-form-label" for="treatmentDetails">Details</label>
          <textarea name="" class="form-control" id="treatmentDetails" rows="2" placeholder="Details" v-model="details"></textarea>
        </div>
        <!-- .form-group -->
        <div class="form-group">
          <button
            type="submit"
            class="btn btn-success w-100"
            @click.prevent="submitTreatment">
            Submit
          </button>
        </div>
        <!-- .form-group -->
      </form>
    </div>
  </div>
</div>

</template>

<script>
import { CASE_ORDER } from '../../../store/models/caseOrder'
import { getDate } from '../../../tools/dateSetter'
import { mapGetters } from 'vuex'
export default {
  name: 'CaseOrderTreatmentForm',
  data () {
    return {
      newTreatment: this.$route.params.treatment,
      details: ''
    }
  },
  computed: {
    ...mapGetters(['patientInfo', 'currentUserId'])
  },
  methods: {
    submitTreatment () {
      let data = JSON.parse(JSON.stringify(CASE_ORDER))
      data = {
        ...data,
        patientId: this.$route.params.id,
        dentistId: this.currentUserId,
        first_name: this.patientInfo.first_name,
        last_name: this.patientInfo.last_name,
        treatment: this.newTreatment,
        details: this.details,
        order_date: getDate(),
        appointment_date: getDate()
      }
      this.$store.dispatch('ADD_ORDER', data)
      this.updatePersonalData(data.treatment)
      this.updateTotalCase()
      this.$router.push('/dentist-patients')
    },
    // MEMO: @updatePersonalData Pass current treatment to user info
    updatePersonalData (newTreatment) {
      let personalData = this.$store.getters.patientInfo
      personalData = { ...personalData, Treatment: newTreatment }
      this.$store.dispatch('EDIT_PATIENT', personalData)
    },
    // @updateTotalCase simple increment count of case
    updateTotalCase () {
      let dentistId = this.currentUserId
      this.$store.dispatch('UPDATE_DENTIST_TOTAL_CASE', dentistId)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
