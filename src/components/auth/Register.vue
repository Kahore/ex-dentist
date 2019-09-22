<template>
  <div class="modal fade show modal-bg"
    :class="{'modal-bg--show': isActive}">
    <div class="modal-dialog modal-dialog-centered row pt-5">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center">Sign in</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="toggleModal()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form
          id="register-form"
          role="form"
          class="form-group ml-2 mr-2">
          <p class="ml-2">Please note, register possible only for Dentist!</p>
          <div class="form-group">
            <input
              type="text"
              name="first_name"
              id="first_name"
              required
              class="form-control"
              placeholder="First Name"
              value=""
              v-model="first_name">
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
              v-model="last_name">
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
              v-model="gdc_number">
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
              v-model="email">
          </div>
          <div class="form-group">
            <input
              type="password"
              name="password"
              id="password"
              required
              class="form-control"
              placeholder="Password"
              v-model="password">
          </div>
          <div class="form-group">
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              required
              class="form-control"
              placeholder="Confirm password"
              v-model="confirm_password">
          </div>
          <div class="form-group">
            <input
              type="checkbox"
              name="term_and_privacy_policy_acceptance"
              id="term_and_privacy_policy_acceptance"
              placeholder="Confirm password"
              v-model="term_and_privacy_policy_acceptance">
              <label
                for="term_and_privacy_policy_acceptance"
                class="ml-2"
                >I have read and accept the Terms of Service and Privacy Policy</label>
          </div>
          <div class="form-group">
            <button
              class="btn btn-success"
              style="width: 100%"
              @click.prevent="registerByEmailLocal"
              :disabled="isLoading">
              <i
                v-if="isLoading"
                class="fa fa-spinner fa-spin" />
              Register
            </button>
          </div>
          <div class="form-group" >
            <div class="row">
              <div class="col-lg-12">
                <div class="text-center">
                  <router-link to="/login"><a>Already have an account? Login</a></router-link>
                </div>
              </div>
            </div>
            <!-- .row -->
          </div>
          <!-- .form-group -->
        </form>
      </div>
      <!-- .modal-content -->
    </div>
    <!-- .modal-dialog -->
  </div>
  <!-- .modal -->
</template>

<script>
import EventBus from './../../EventBus'
export default {
  name: 'Register',
  data () {
    return {
      first_name: '',
      last_name: '',
      gdc_number: '',
      email: '',
      password: '',
      confirm_password: '',
      term_and_privacy_policy_acceptance: '',
      isLoading: false,
      isActive: false
    }
  },
  methods: {
    registerByEmailLocal () {
      console.log('TCL: registerByEmailLocal -> registerByEmailLocal')
    },
    toggleModal () {
      this.isActive = !this.isActive
    }
  },
  mounted () {
    EventBus.$on( 'REGISTER_MODAL', payload => {
      this.toggleModal( );
    } );
    this.toggleModal()
  }
}
</script>

<style lang="scss" scoped>
label{
  display: inline;
}
</style>
