<template>
  <div
    class="modal fade show modal-bg"
    :class="{'modal-bg--show': isActive}">
    <div class="modal-dialog modal-dialog-centered row pt-5">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center">Staff details</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="toggleModal()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
          <form id="patient-details" role="form" class="form-group ml-2 mr-2">
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.staffInfo.first_name.$error }">
              <input
                type="text"
                name="first_name"
                id="first_name"
                required
                class="form-control"
                placeholder="First Name"
                value=""
                v-model="staffInfo.first_name">
                <div class="form-group__message--error" v-if="!$v.staffInfo.first_name.required">First name is required.</div>
            </div>
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.staffInfo.last_name.$error }">
              <input
                type="text"
                name="last_name"
                id="last_name"
                required
                class="form-control"
                placeholder="Last Name"
                value=""
                v-model="staffInfo.last_name"
                :class="{ 'form-group--error': $v.staffInfo.last_name.$error }">
                <div class="form-group__message--error" v-if="!$v.staffInfo.last_name.required">Last name is required.</div>
            </div>
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.staffInfo.email.$error }">
              <input
                type="email"
                name="email"
                id="email"
                required
                class="form-control"
                placeholder="Email Address"
                value=""
                v-model="staffInfo.email">
              <div class="form-group__message--error" v-if="!$v.staffInfo.email.required">Email is required.</div>
            </div>
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.staffInfo.password.$error }">
            <input
              v-if="staffInfo.id ==''"
              type="password"
              name="password"
              id="password"
              required
              class="form-control"
              placeholder="Password"
              v-model="staffInfo.password">
            <div class="form-group__message--error" v-if="!$v.staffInfo.password.required">Password is required.</div>
            <div class="form-group__message--error" v-if="!$v.staffInfo.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</div>
          </div>
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.staffInfo.type.$error }">
              <select v-model="staffInfo.type">
                <option value="" disabled selected>Select staff user type</option>
                <option value="Admin">Admin</option>
                <option value="Clinician">Clinician</option>
                <option value="Lab">Lab</option>
              </select>
              <div class="form-group__message--error" v-if="!$v.staffInfo.type.required">Type is required.</div>
            </div>
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.staffInfo.status.$error }">
              <select name="" id="" v-model="staffInfo.status">
                <option value="" disabled selected>Select staff status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            <div class="form-group__message--error" v-if="!$v.staffInfo.status.required">Status is required.</div>
            </div>
            <div class="form-group">
              <button
                class="btn btn-success w-100"
                @click.prevent="saveStaff(staffInfo)"
                :disabled="isLoading">
                <i
                v-if="isLoading"
                class="fa fa-spinner fa-spin" />
                Save Patient
              </button>
            </div>
          </form>
      </div>
      <!-- .modal-content -->
    </div>
    <!-- .modal-dialog -->
  </div>
  <!-- .modal -->
</template>

<script>
import EventBus from '../../../EventBus'
import { mapGetters } from 'vuex'
import { firebaseAppInit, configApp } from '../../../config/firebaseConfig'
import { required, email, minLength, requiredIf } from 'vuelidate/lib/validators'
export default {
  name: 'StaffInfoModal',
  data () {
    return {
      isActive: false,
      isLoading: false,
      mode: ''
    }
  },
  validations: {
    staffInfo: {
      first_name: {
        required
      },
      last_name: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required: requiredIf(function () {
          return this.staffInfo.id === ''
        }),
        minLength: minLength(6)
      },
      type: {
        required
      },
      status: {
        required
      }
    }
  },
  computed: {
    ...mapGetters(['staffInfo'])
  },
  methods: {
    saveStaff (staffInfo) {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.isLoading = true
        let isNew = this._isNew()
        if (isNew) {
          this._addStaff(staffInfo)
        } else {
          this._editStaff(staffInfo)
        }
        this.isLoading = false
        this.toggleModal()
      }
    },
    _isNew () {
      return this.mode !== 'edit'
    },
    _addStaff (staffInfo) {
      let detachedAuth = firebaseAppInit.firebase_.initializeApp(configApp, 'secondary')
      detachedAuth.auth().createUserWithEmailAndPassword(staffInfo.email, staffInfo.password).then(res => {
        let regData = { ...staffInfo, id: res.user.uid }
        this.$store.dispatch('CREATE_STAFF', regData)
      }).then(() => {
        detachedAuth.delete()
      }).catch(error => {
        console.log('TCL: _addStaff -> error', error)
      })
    },
    _editStaff (staffInfo) {
      this.$store.dispatch('EDIT_STAFF', staffInfo)
    },
    toggleModal () {
      this.isActive = !this.isActive
    }
  },
  mounted () {
    EventBus.$on('STAFF_MODAL', payload => {
      this.mode = payload
      this.toggleModal()
    })
  },
  created () {
    // MEMO: reset state if user not close modal and select another page with this modal
    this.isActive = false
  }
}
</script>
