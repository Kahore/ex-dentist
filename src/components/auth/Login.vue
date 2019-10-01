<template>
  <div
    class="modal fade show modal-bg"
    :class="{'modal-bg--show': isActive}">
    <div class="modal-dialog modal-dialog-centered row pt-5">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center" id="exampleModalLongTitle">Login</h5>
            <router-link to="*">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="toggleModal()">
                <span aria-hidden="true">&times;</span>
              </button>
            </router-link>
        </div>
        <div class="col-md-10 col-sm-10 offset-sm-1 ">
         <div class="form-group--error">
            <p class="form-group__message--error">{{submitError}}</p>
          </div>
          <form
            id="login-form"
            role="form"
            class="form-group mt-2">
            <userType v-if="selectedUserType === ''"/>
            <div v-else>
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.email.$error }">
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
                placeholder="Email Address" v-model="email">
               <div class="form-group__message--error" v-if="$v.email.$error">Email is required</div>
            </div>
            <!-- .form-group -->
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.password.$error }">
              <input
                type="password"
                name="password"
                id="password"
                class="form-control"
                placeholder="Password"
                v-model="password">
              <div class="form-group__message--error" v-if="$v.password.$error">Password is required</div>
            </div>
            <!-- .form-group -->
            <div class="form-group">
              <button
                class="btn btn-success"
                style="width: 100%"
                @click.prevent="loginWithEmailLocal"
                :disabled="isLoading">
                <i
                  v-if="isLoading"
                  class="fa fa-spinner fa-spin" />
                Log in
              </button>
            </div>
            <!-- .form-group -->
            <div class="form-group" v-if="selectedUserType !=='' && selectedUserType === 'Dentist'">
              <div class="row">
                <div class="col-lg-12">
                  <div class="text-center">
                    <router-link to="/register"><a>Register</a></router-link>
                  </div>
                </div>
              </div>
              <!-- .row -->
            </div>
            <!-- .form-group -->
            <div class="form-group">
              <div class="row">
                <div class="col-lg-12">
                  <div class="text-center">
                    <router-link to="/recovery"><a>Forgot a password?</a></router-link>
                  </div>
                </div>
              </div>
              <!-- .row -->
            </div>
            <!-- .form-group -->
            </div>
          </form>
        </div>
      </div>
      <!-- .modal-content -->
    </div>
    <!-- .modal-dialog -->
  </div>
  <!-- .modal -->
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
import EventBus from './../../EventBus'
import firebase from 'firebase'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      isLoading: false,
      isActive: false,
      submitError: null
    }
  },
  validations: {
    email: {
      required
    },
    password: {
      required
    }
  },
  components: {
    userType: () => import('./_UserType')
  },
  computed: {
    ...mapGetters(['selectedUserType', 'currentUser'])
  },
  methods: {
    loginWithEmailLocal () {
      this.submitError = ''
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.isLoading = true
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(res => {
          this.$store.dispatch('LOAD_USER', res.user.uid).then(response => {
            switch (response.type) {
              case 'Dentist':
                history.pushState('', '', './dentist-dashboard')
                break
              case 'Lab':
                history.pushState('', '', './lab-dashboard')
                break
              case 'Clinician':
                history.pushState('', '', './clinician-dashboard')
                break
              case 'Admin':
                history.pushState('', '', './staff')
                break
              default:
                break
            }
            window.location.reload(true)
          })
          this.toggleModal()
        }).catch(error => {
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
    EventBus.$on('LOGIN_MODAL', payload => {
      this.toggleModal()
    })
    this.toggleModal()
  }
}
</script>
