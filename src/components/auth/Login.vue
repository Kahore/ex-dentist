<template>
  <div class="row pt-5">
    <div class="col-md-4 offset-md-4 col-sm-12 offset-sm-1">
      <form id="login-form" role="form" class="form-group">
        <h3 class="text-center">Login</h3>
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
  <!-- row -->
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Login',
  components: {
    userType: () => import('./_UserType')
  },
  computed: {
    ...mapGetters(['selectedUserType'])
  }
}
</script>

<style lang="scss" scoped>

</style>
