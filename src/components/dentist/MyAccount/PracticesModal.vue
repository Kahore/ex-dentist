<template>
  <div class="row pt-5">
    <div class="col-md-4 offset-md-4 col-sm-12 offset-sm-1">
      <form id="login-form" role="form" class="form-group ml-2">
        <h4 class="text-center">Manage your practices</h4>
        <div class="form-group">
          <input
            type="text"
            name="name"
            id="name"
            required
            class="form-control"
            placeholder="Practice Name"
            value=""
            v-model="name">
        </div>
        <div class="form-group">
          <input
            type="text"
            name="address_line_1"
            id="address_line_1"
            required
            class="form-control"
            placeholder="Address Line 1"
            value=""
            v-model="address_line_1">
        </div>
        <div class="form-group">
          <input
            type="text"
            name="address_line_2"
            id="address_line_2"
            class="form-control"
            placeholder="Address Line 2"
            value=""
            v-model="address_line_2">
        </div>
        <div class="form-group">
          <input
            type="text"
            name="city"
            id="city"
            required
            class="form-control"
            placeholder="City/Town*"
            value=""
            v-model="city">
        </div>
        <div class="form-group">
          <input
            type="text"
            name="region"
            id="region"
            required
            class="form-control"
            placeholder="State/Region"
            value=""
            v-model="region">
        </div>
        <div class="form-group">
          <input
            type="text"
            name="country"
            id="country"
            required
            class="form-control"
            placeholder="Country"
            value=""
            v-model="country">
        </div>
        <div class="form-group">
          <input
            type="text"
            name="postcode"
            id="postcode"
            required
            class="form-control"
            placeholder="Postcode"
            value=""
            v-model="postcode">
        </div>
        <div class="form-group">
          <input
            type="email"
            name="email"
            id="email"
            required
            class="form-control"
            placeholder="Email"
            value=""
            v-model="email">
        </div>
        <div class="form-group">
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            class="form-control"
            placeholder="Phone number"
            value=""
            v-model="phone">
        </div>
        <div class="form-group">
          <button
            class="btn btn-success"
            style="width: 100%"
            @click.prevent="savePractice"
            >
            Save Practice
          </button>
        </div>
      </form>
    </div>
  </div>
  <!-- .row -->
</template>

<script>
export default {
  name: 'DentistPracticesModal',
  methods: {
    savePractice () {
      console.log('TCL: savePractice -> savePractice')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
