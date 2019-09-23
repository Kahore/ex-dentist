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
          <form id="patient-details" role="form" class="form-group ml-2">
            <div class="form-group">
              <input
                type="text"
                name="first_name"
                id="first_name"
                required
                class="form-control"
                placeholder="First Name"
                value=""
                v-model="staffInfo.first_name">
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
                v-model="staffInfo.last_name">
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
                v-model="staffInfo.email">
            </div>
            <div class="form-group">
              <select v-model="staffInfo.user_type">
                <option value="" disabled selected>Select staff user type</option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
              </select>
            </div>
            <div class="form-group">
              <select name="" id="" v-model="staffInfo.status">
                <option value="" disabled selected>Select staff status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div class="form-group">
              <button
                class="btn btn-success w-100"
                @click.prevent="saveStaff"
                >
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
export default {
  name: 'StaffInfoModal',
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapGetters(['staffInfo'])
  },
  methods: {
    saveStaff () {
      console.log('TCL: saveStaff -> saveStaff')
    },
    toggleModal () {
      this.isActive = !this.isActive
    }
  },
  mounted () {
    EventBus.$on('STAFF_MODAL', payload => {
      this.toggleModal()
    })
  },
  created () {
    // MEMO: reset state if user not close modal and select another page with this modal
    this.isActive = false
  }
}
</script>

<style lang="scss" scoped>

</style>
