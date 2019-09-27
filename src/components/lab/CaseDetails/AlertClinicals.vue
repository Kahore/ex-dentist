<template>
  <div class="container ">
      <div class="row pt-2">
        <div class="col-12 offset-md-2">
        <button
          class="btn btn-danger"
          @click="alertClinical()">Alert clinical</button>
           </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AlertClinicals',
  methods: {
    alertClinical () {
      let orderId = this.$route.params.orderId
      this.$store.dispatch('ORDER_ALERT', orderId)
    }
  }
}
</script>
