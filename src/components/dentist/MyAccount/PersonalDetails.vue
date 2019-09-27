<template>
    <div class="col-lg-4 col-md-5 offset-md-2 col-sm-12 offset-sm-1">
      <form id="login-form" role="form" class="form-group ml-2">
        <h4 class="text-center">Personal Details</h4>
        <div class="form-group">
          <input
            type="text"
            name="first_name"
            id="first_name"
            required
            class="form-control"
            placeholder="First Name"
            value=""
            v-model="currentUser.first_name">
        </div>
        <div class="form-group">
          <input
            type="text"
            name="last_name"
            id="last_name"
            required
            class="form-control"
            placeholder="Last Name"
            value=""
            v-model="currentUser.last_name">
        </div>
        <div class="form-group">
          <input
            type="text"
            name="gdc_number"
            id="gdc_number"
            required
            class="form-control"
            placeholder="GDC Name"
            value=""
            v-model="currentUser.gdc_number">
        </div>
        <div class="form-group">
          <input
            type="email"
            name="email"
            id="email"
            required
            class="form-control"
            placeholder="Email Address"
            value=""
            v-model="currentUser.email">
        </div>
        <div class="form-group">
          <button
            class="btn btn-success"
            style="width: 100%"
            @click.prevent="updateDetails"
            >
            Update Details
          </button>
        </div>
      </form>
    </div>
  <!-- .col -->
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DentistPersonalDetails',
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods: {
    updateDetails () {
      console.log('TCL: updateDetails -> updateDetails')
    }
  }
}
</script>
