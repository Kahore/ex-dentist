<template>
  <div class="modal fade show modal-bg"
    :class="{'modal-bg--show': isActive}">
    <div class="modal-dialog modal-dialog-centered row pt-5">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center">Sign in - Please note, only for Dentist! </h5>
          <router-link to="*">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="toggleModal()">
              <span aria-hidden="true">&times;</span>
            </button>
          </router-link>
        </div>
        <form
          id="register-form"
          role="form"
          class="form-group ml-2 mr-2">
          <div class="form-group--error">
            <p class="form-group__message--error">{{submitError}}</p>
          </div>
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.first_name.$error }">
            <input
              type="text"
              name="first_name"
              id="first_name"
              required
              class="form-control"
              placeholder="First Name"
              value=""
              v-model="first_name">
            <div class="form-group__message--error" v-if="!$v.first_name.required">First name is required.</div>
          </div>
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.last_name.$error }">
            <input
              type="text"
              name="last_name"
              id="last_name"
              required
              class="form-control"
              placeholder="Last Name"
              value=""
              v-model="last_name">
            <div class="form-group__message--error" v-if="!$v.last_name.required">Last name is required.</div>
          </div>
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.gdc_number.$error }">
            <input
              type="text"
              name="gdc_number"
              id="gdc_number"
              required
              class="form-control"
              placeholder="GDC number"
              value=""
              v-model="gdc_number">
            <div class="form-group__message--error" v-if="!$v.gdc_number.required">GDC number is required.</div>
            <div class="form-group__message--error" v-if="!$v.gdc_number.numeric">GDC should be a numeric.</div>
          </div>
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.email.$error }">
            <input
              type="email"
              name="email"
              id="email"
              required
              class="form-control"
              placeholder="Email Address"
              value=""
              v-model="email">
            <div class="form-group__message--error" v-if="!$v.email.required">Email is required.</div>
            <div class="form-group__message--error" v-if="!$v.email.email">Please, type a valid email.</div>
          </div>
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.password.$error }">
            <input
              type="password"
              name="password"
              id="password"
              required
              class="form-control"
              placeholder="Password"
              v-model="password">
              <div class="form-group__message--error" v-if="!$v.password.required">Password is required.</div>
              <div class="form-group__message--error" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</div>
          </div>
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.confirm_password.$error }">
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              required
              class="form-control"
              placeholder="Confirm password"
              v-model="confirm_password">
            <div class="form-group__message--error" v-if="!$v.confirm_password.sameAs">Passwords must be identical.</div>
          </div>
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.term_and_privacy_policy_acceptance.$error }">
            <input
              type="checkbox"
              name="term_and_privacy_policy_acceptance"
              id="term_and_privacy_policy_acceptance"
              v-model="term_and_privacy_policy_acceptance">
              <label
                for="term_and_privacy_policy_acceptance"
                class="ml-2"
                >I have read and accept the Terms of Service and Privacy Policy</label>
            <div class="form-group__message--error" v-if="!$v.term_and_privacy_policy_acceptance.required">Acception is required.</div>
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
import firebase from 'firebase'
import { required, sameAs, minLength, email, numeric } from 'vuelidate/lib/validators'
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
      isActive: false,
      submitError: null
    }
  },
  validations: {
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
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirm_password: {
      sameAs: sameAs('password')
    },
    term_and_privacy_policy_acceptance: {
      required
    }
  },
  methods: {
    registerByEmailLocal () {
      this.submitError = ''
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.isLoading = true
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(res => {
          let regData = {
            first_name: this.first_name,
            last_name: this.last_name,
            gdc_number: this.gdc_number,
            email: this.email,
            term_and_privacy_policy_acceptance: this.term_and_privacy_policy_acceptance,
            /* MEMO: this hard coded because of register possible only for dentist */
            type: 'Dentist'
          }
          regData = { ...regData, id: res.user.uid }
          this.$store.dispatch('CREATE_USER_WITH_LOGIN', regData)
        }).catch((error) => {
          this.isLoading = false
          this.submitError = error.message
        })
      }
    },
    toggleModal () {
      this.isActive = !this.isActive
    }
  },
  mounted () {
    EventBus.$on('REGISTER_MODAL', payload => {
      this.toggleModal()
    })
    this.toggleModal()
  }
}
</script>

<style lang="scss" scoped>
label{
  display: inline;
}
</style>
