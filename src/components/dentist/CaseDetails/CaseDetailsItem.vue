<template>
<div class="container">
    <div class="row pt-5">
    <h4 class="col-12">Case Order details</h4>
    <div class="form-group col-lg-4 col-md-4 col-12">
      <strong><label for="treatment">Treatment: </label></strong>
      <span id="treatment"> {{caseOrder.treatment}}</span>
    </div>
    <div class="form-group col-lg-4 col-md-4 col-12">
      <strong><label for="treatmentDetails">Details: </label></strong>
      <p id="treatmentDetails">{{caseOrder.details}}</p>
    </div>
    <div class="form-group col-lg-3 col-md-4 col-12">
      <button
        class="btn btn-success"
        style="width: 100%"
        @click.prevent="generateLabSlip">
         generate the lab slip
      </button>
    </div>
    <div class="col-12 col-md-12" v-if="isSuccess">
      <alertSuccess/>
    </div>
    <div class="form-group col-lg-4 col-md-4 col-12">
      <strong><label for="orderStatus">Order status: </label></strong>
      <select
        id="orderStatus"
        class="border-0"
        v-model="caseOrder.status">
        <option value=""></option>
        <option value="Completed">Completed</option>
        <option value="Inprogress">Inprogress</option>
        <option value="In review">In review</option>
        <option value="Require attention">Require attention</option>
      </select>
    </div>
    <div class="form-group col-lg-4 col-md-4 col-12">
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
    <div class="form-group col-lg-3 col-md-4 col-12">
      <button
        class="btn btn-success"
        style="width: 100%"
        @click.prevent="saveDetails">
         Save details
      </button>
    </div>
  </div>
</div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CaseDetailsItem',
  components: {
    alertSuccess: () => import('../../AlertSuccess')
  },
  computed: {
    ...mapGetters(['caseOrder', 'currentUser'])
  },
  data () {
    return {
      isSuccess: false
    }
  },
  methods: {
    generateLabSlip () {
      alert('Generating pdf document here')
    },
    saveDetails () {
      this.isSuccess = true
      if (this.caseOrder.status === 'Completed') {
        this.caseOrder.attention_require = ''
      }
      let updatedCase = { ...this.caseOrder, status: this.caseOrder.status, attention_require: this.caseOrder.attention_require }
      this.$store.dispatch('EDIT_ORDER', updatedCase)
      setTimeout(() => {
        this.isSuccess = false
      }, 2000)
    }
  },
  mounted () {
    this.$store.dispatch('LOAD_ORDER', this.$route.params.orderId)
  }
}
</script>
