<template>
<div class="container">
    <div class="row pt-5">
    <h4 class="col-12">Case Order details</h4>
    <div class="form-group col-lg-4 col-md-4 col-6">
      <strong><label for="treatment">Treatment: </label></strong>
      <span id="treatment"> {{caseOrder.treatment}}</span>
    </div>
    <div class="form-group col-lg-6 col-md-6 col-6">
      <strong><label for="treatmentDetails">Details: </label></strong>
      <p id="treatmentDetails">{{caseOrder.details}}</p>
    </div>
    <div class="form-group col-lg-4 col-md-4 col-6">
      <strong><label for="orderStatus">Order status: </label></strong>
      <select
        id="orderStatus"
        class="border-0"
        v-model="caseOrder.status">
        <option value=""></option>
        <option value="orderStatus1">orderStatus1</option>
        <option value="orderStatus2">orderStatus2</option>
      </select>
    </div>
    <div class="form-group col-4">
      <strong><label for="attentionReq">Attention require: </label></strong>
      <select
        id="attentionReq"
        v-model="caseOrder.attention_require"
        class="border-0">
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
