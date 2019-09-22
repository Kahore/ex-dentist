<template>
  <div>
    <h4>Case Order details</h4>
    <div class="form-group">
      <strong><label for="treatment">Treatment - </label></strong>
      <span id="treatment"> {{caseOrder.treatment}}</span>
    </div>
    <div class="form-group">
      <strong><label for="treatmentDetails">Details</label></strong>
      <p id="treatmentDetails">{{caseOrder.details}}</p>
    </div>
    <div class="form-group">
      <label for="orderStatus">Order status</label>
      <select name="" id="orderStatus" v-model="caseOrder.status">
        <option value=""></option>
        <option value="orderStatus1">orderStatus1</option>
        <option value="orderStatus2">orderStatus2</option>
      </select>
    </div>
    <div class="form-group">
      <label for="attentionReq">Attention require</label>
      <select name="" id="attentionReq" v-model="caseOrder.attention_require">
        <option value=""></option>
        <option value="Dentist">Dentist</option>
        <option value="Lab Staff">Lab Staff</option>
      </select>
    </div>
    <div class="form-group">
      <button
        class="btn btn-success"
        style="width: 100%"
        @click.prevent="generateLabSlip">
         generate the lab slip
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CaseDetailsItem',
  computed: {
    ...mapGetters(['caseOrder'])
  },
  methods: {
    generateLabSlip () {
      console.log('TCL: generateLabSlip -> generateLabSlip')
    }
  },
  mounted () {
    this.$store.dispatch('LOAD_ORDER', this.$route.params.orderId)
  }
}
</script>

<style lang="scss" scoped>

</style>
