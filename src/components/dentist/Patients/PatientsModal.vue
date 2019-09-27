<template>
  <div
    class="modal fade show modal-bg"
    :class="{'modal-bg--show': isActive}">
    <div class="modal-dialog modal-dialog-centered row pt-5">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center">Patient details</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="toggleModal()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
          <form id="patient-details" role="form" class="form-group ml-2">
            <input type="hidden" v-model="patientInfo.id">
            <div class="form-group">
              <input
                type="text"
                name="first_name"
                id="first_name"
                required
                class="form-control"
                placeholder="First Name"
                value=""
                v-model="patientInfo.first_name">
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
                v-model="patientInfo.last_name">
            </div>
            <div class="form-group">
              <input
                type="date"
                name="date_of_birth"
                id="date_of_birth"
                required
                class="form-control"
                placeholder="Date Of Birth"
                value=""
                v-model="patientInfo.date_of_birth">
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
                v-model="patientInfo.email">
            </div>
            <div class="form-group">
              <select v-model="patientInfo.gender">
                <option value="" disabled selected>Select patient gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Another">Another</option>
              </select>
            </div>
            <div class="form-group">
              <input
                type="file"
                name="profile_picture"
                id="profile_picture"
                required
                class="form-control"
                placeholder="Profile Picture"
                value=""
                >
            </div>
            <div class="form-group">
              <select name="" id="" v-model="patientInfo.practice_centre_id">
                <option value="" disabled selected>Select practice centre</option>
                <option
                  v-for="(practice, index) in practices"
                  :key="index" :value="practice.name">{{practice.name}}</option>
              </select>
            </div>
            <div class="form-group" v-if="acl==='edit'">
              <button
                class="btn btn-success"
                style="width: 100%"
                @click.prevent="savePatient(patientInfo)"
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
import { getDate } from '../../../tools/dateSetter'
export default {
  name: 'DentistPatientModal',
  props: {
    acl: {
      type: String,
      required: true,
      default: 'view'
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapGetters(['patientInfo', 'currentUserId', 'practices'])
  },
  methods: {
    savePatient (patientInfo) {
      let isNew = this._isNew(patientInfo)
      if (isNew) {
        let today = getDate()
        let dentistId = this.currentUserId
        patientInfo = { ...patientInfo, RegistrationDate: today, dentistId: dentistId, Status: 'Active' }
        this.$store.dispatch('ADD_PATIENT', patientInfo)
      } else {
        this.$store.dispatch('EDIT_PATIENT', patientInfo)
      }
      this.toggleModal()
    },
    _isNew (patientInfo) {
      if (typeof patientInfo.id === 'undefined') {
        return true
      } else {
        return false
      }
    },
    toggleModal () {
      this.isActive = !this.isActive
    }
  },
  mounted () {
    EventBus.$on('PATIENT_MODAL', payload => {
      if (typeof payload !== 'undefined') {
        this.acl = payload
      }
      this.toggleModal()
    })
  },
  created () {
    // MEMO: reset state if user not close modal and select another page with this modal
    this.isActive = false
  }
}
</script>
