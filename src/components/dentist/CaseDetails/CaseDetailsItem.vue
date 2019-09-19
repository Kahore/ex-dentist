<template>
  <div>
    <h4>Case Order details</h4>
    <div class="form-group">
       <strong><label for="treatment">Treatment - </label></strong>
      <span id="treatment"> Direct</span>
    </div>
    <div class="form-group">
      <strong><label for="treatmentDetails">Details</label></strong>
      <p id="treatmentDetails">treatmentDetails</p>
    </div>
    <div class="form-group">
      <label for="orderStatus">Order status</label>
      <select name="" id="orderStatus">
        <option value=""></option>
        <option value="orderStatus1">orderStatus1</option>
        <option value="orderStatus2">orderStatus2</option>
      </select>
    </div>
    <div class="form-group">
      <label for="attentionReq">Attention require</label>
      <select name="" id="attentionReq">
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
export default {
  name: 'CaseDetailsItem',
  methods: {
    generateLabSlip () {
      console.log('TCL: generateLabSlip -> generateLabSlip')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
