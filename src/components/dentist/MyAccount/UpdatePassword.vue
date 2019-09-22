<template>
  <div class="row pt-5">
    <div class="col-md-4 offset-md-4 col-sm-12 offset-sm-1">
      <form id="login-form" role="form" class="form-group ml-2">
        <h4 class="text-center">Update your password here</h4>
        <div class="form-group">
          <input
            type="password"
            name="old_password"
            id="old_password"
            required
            class="form-control"
            placeholder="Old Password"
            value=""
            v-model="old_password">
        </div>
        <div class="form-group">
          <input
            type="password"
            name="new_password"
            id="new_password"
            required
            class="form-control"
            placeholder="New Password"
            value=""
            v-model="new_password">
        </div>
        <div class="form-group">
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            required
            class="form-control"
            placeholder="Confirm Password"
            value=""
            v-model="confirm_password">
        </div>
        <div class="form-group">
          <button
            class="btn btn-success"
            style="width: 100%"
            @click.prevent="updatePassword">
            Update Password
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DentistUpdatePassword',
  data () {
    return {
      old_password: '',
      new_password: '',
      confirm_password: ''
    }
  },
  methods: {
    updatePassword () {
      console.log('TCL: updatePassword -> updatePassword')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
