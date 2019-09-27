<template>
  <div class="modal modal-bg"
  :class="{'modal-bg--show': isActive}"
  tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Confirm you operation</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="toggleModal()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p v-if="mode ==='Delete'">Do you really wanna delete this record?</p>
          <p v-if="mode ==='Archive'">Do you really wanna archive this record?</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            @click="actionWrapper()">Confirm</button>
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="toggleModal()">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../../../EventBus'
export default {
  name: 'PatientsListActions_Modal',
  data () {
    return {
      isActive: false,
      mode: '',
      patientId: ''
    }
  },
  methods: {
    toggleModal () {
      this.isActive = !this.isActive
    },
    actionWrapper () {
      if (this.mode === 'Delete') {
        this.actionDelete()
      } else if (this.mode === 'Archive') {
        this.actionArchive()
      }
    },
    actionDelete () {
      this.$store.dispatch('DELETE_PATIENT', this.patientId)
      this.toggleModal()
    },
    actionArchive () {
      let patients = this.$store.getters.patients
      let index = patients.findIndex(patient => patient.id === this.patientId)
      let patientInfo = patients[index]
      patientInfo = { ...patientInfo, Status: 'Archive' }
      this.$store.dispatch('EDIT_PATIENT', patientInfo)
      this.toggleModal()
    }
  },
  mounted () {
    EventBus.$on('ACTION_PATIENT_MODAL', payload => {
      this.toggleModal()
      this.mode = payload.mode
      this.patientId = payload.patientId
    })
  }
}
</script>
