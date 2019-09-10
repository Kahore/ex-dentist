<template>
  <div class="row pt-5">
    <div class="col-md-4 offset-md-4 col-sm-12 offset-sm-1">
      <form id="login-form" role="form" class="form-group">
        <h3 class="text-center">Recovery password</h3>
        <p class="ml-2">Enter your registered email address, and we will send an email with the instructions on resetting your password.</p>
        <div class="form-group">
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Email Address" v-model="email">
        </div>
        <div class="form-group">
          <button
            class="btn btn-success"
            style="width: 100%"
            @click.prevent="resetPassword"
            :disabled="isLoading">
            <i
              v-if="isLoading"
              class="fa fa-spinner fa-spin" />
            Reset
          </button>
        </div>
      </form>
    </div> 
  </div>
  <!-- .row --> 
</template>

<script>
export default {
  name: 'PasswordRecovery',
  methods: {
    resetPassword() {
      console.log('TCL: resetPassword -> resetPassword')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
