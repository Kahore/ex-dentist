<template>
    <div class="col-lg-4 col-md-5 offset-md-2 col-sm-12 offset-sm-1">
      <form id="personal-form" role="form" class="form-group ml-2">
        <h4 class="text-center">Personal Details</h4>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.currentUser.first_name.$error }">
          <input
            type="text"
            name="first_name"
            id="first_name"
            required
            class="form-control"
            placeholder="First Name"
            value=""
            v-model="currentUser.first_name">
          <div class="form-group__message--error" v-if="!$v.currentUser.first_name.required">First name is required.</div>
        </div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.currentUser.last_name.$error }">
          <input
            type="text"
            name="last_name"
            id="last_name"
            required
            class="form-control"
            placeholder="Last Name"
            value=""
            v-model="currentUser.last_name">
          <div class="form-group__message--error" v-if="!$v.currentUser.last_name.required">Last name is required.</div>
        </div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.currentUser.gdc_number.$error }">
          <input
            type="text"
            name="gdc_number"
            id="gdc_number"
            required
            class="form-control"
            placeholder="GDC Name"
            value=""
            v-model="currentUser.gdc_number">
            <div class="form-group__message--error" v-if="!$v.currentUser.gdc_number.required">GDC number is required.</div>
            <div class="form-group__message--error" v-if="!$v.currentUser.gdc_number.numeric">GDC should be a numeric.</div>
        </div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.currentUser.email.$error }">
          <input
            type="email"
            name="email"
            id="emailAdr"
            required
            class="form-control"
            placeholder="Email Address"
            value=""
            v-model="currentUser.email">
            <div class="form-group__message--error" v-if="!$v.currentUser.email.required">Email is required.</div>
            <div class="form-group__message--error" v-if="!$v.currentUser.email.email">Please, type a valid email.</div>
        </div>
        <div class="form-group">
          <button
            class="btn btn-success w-100"
            @click.prevent="updateDentistDetails(currentUser)">
            Update Details
          </button>
        </div>
      </form>
    </div>
  <!-- .col -->
</template>

<script>
import { mapGetters } from 'vuex'
import { required, email, numeric } from 'vuelidate/lib/validators'
export default {
  name: 'DentistPersonalDetails',
  data () {
    return {
      isLoading: false
    }
  },
  validations: {
    currentUser: {
      first_name: {
        required
      },
      last_name: {
        required
      },
      gdc_number: {
        required,
        numeric
      },
      email: {
        required,
        email
      }
    }
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods: {
    updateDentistDetails (currentUser) {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        alert('Mock message for update details call')
      }
    }
  }
}
</script>
