<template>
    <div class="col-lg-4 col-md-5 col-sm-12">
      <form id="updPassword-form" role="form" class="form-group ml-2">
        <h4 class="text-center">Update your password</h4>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.old_password.$error }">
          <input
            type="password"
            name="old_password"
            id="old_password"
            required
            class="form-control"
            placeholder="Old Password"
            value=""
            v-model="old_password">
          <div class="form-group__message--error" v-if="!$v.old_password.required">Old password is required.</div>
        </div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.new_password.$error }">
          <input
            type="password"
            name="new_password"
            id="new_password"
            required
            class="form-control"
            placeholder="New Password"
            value=""
            v-model="new_password">
          <div class="form-group__message--error" v-if="!$v.new_password.required">New password is required.</div>
          <div class="form-group__message--error" v-if="!$v.new_password.minLength">New password must have at least {{ $v.password.$params.minLength.min }} letters.</div>
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
            placeholder="Confirm Password"
            value=""
            v-model="confirm_password">
          <div class="form-group__message--error" v-if="!$v.confirm_password.sameAs">Passwords must be identical.</div>
        </div>
        <div class="form-group">
          <button
            class="btn btn-success"
            style="width: 100%"
            @click.prevent="updatePassword()">
            Update Password
          </button>
        </div>
      </form>
    </div>
  <!-- .col -->
</template>

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'DentistUpdatePassword',
  data () {
    return {
      old_password: '',
      new_password: '',
      confirm_password: ''
    }
  },
  validations: {
    old_password: {
      required,
      minLength: minLength(6)
    },
    new_password: {
      required,
      minLength: minLength(6)
    },
    confirm_password: {
      sameAs: sameAs('new_password')
    }
  },
  methods: {
    updatePassword () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        alert('Mock message for update password call')
      }
    }
  }
}
</script>
