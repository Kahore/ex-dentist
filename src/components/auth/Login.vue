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
          <form
            id="login-form"
            role="form"
            class="form-group mt-2">
            <userType v-if="selectedUserType === ''"/>
            <div v-else>
            <div class="form-group">
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
                placeholder="Email Address" v-model="email">
            </div>
            <!-- .form-group -->
            <div class="form-group">
              <input
                type="password"
                name="password"
                id="password"
                class="form-control"
                placeholder="Password"
                v-model="password">
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
      isActive: false
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
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(res => {
        this.$store.dispatch('LOAD_USER', res.user.uid)

        switch (this.currentUser.type) {
          case 'Dentist':
            this.$router.push('/dentist-dashboard')
            break
          case 'Lab':
            this.$router.push('/lab-dashboard')
            break
          case 'Clinician':
            this.$router.push('/clinician-dashboard')
            break
          default: this.$router.push('/')
            break
        }
      }).catch(error => {
        console.log('TCL: loginWithEmailLocal -> error', error)
      })
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

<style lang="scss" scoped>

</style>
