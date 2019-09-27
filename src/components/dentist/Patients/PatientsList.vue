<template>
  <div class="container table-responsive mt-2">
    <modal/>
    <div class="col-md-12">
      <div class="row pb-5">
        <table class="table table-hover table-sm">
          <thead>
            <tr>
              <th>Patient name</th>
              <th class="d-none d-md-table-cell">Treatment</th>
              <th class="d-none d-md-table-cell">Status</th>
              <th class="d-table-cell d-md-none">Treat-Stat</th>
              <th class="d-none d-md-table-cell">Registration Date</th>
              <th>Practice Name</th>
              <th class="d-none d-md-table-cell">Date of Birth</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="8">
                <button
                class="btn btn-light"
                @click="modalPatientRise()">add patient</button>
              </td>
            </tr>
            <tr
            v-for="(patient, index) in patients"
            :key="index">
              <td>
                <router-link  :to="{path:'/dentist-patients/'+patient.id}">
                  <a>{{patient.first_name + ' ' + patient.last_name}}</a>
                </router-link></td>
              <td class="d-none d-md-table-cell">{{patient.Treatment}}</td>
              <td class="d-none d-md-table-cell">{{patient.Status}}</td>
              <td class="d-table-cell d-md-none">{{patient.Treatment}} - {{patient.Status}}</td>
              <td class="d-none d-md-table-cell">{{patient.RegistrationDate}}</td>
              <td>{{patient.practice_centre_id}}</td>
              <td class="d-none d-md-table-cell">{{patient.date_of_birth}}</td>
              <td>
                <div class="dropdown">
                  <a
                    class="btn btn-secondary"
                    href="#"
                    role="button"
                    id="dropdownMenuLink1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="dropDownToggler(patient.id)">
                    <i class="far fa-arrow-alt-circle-down"></i>
                  </a>
                  <div class="dropdown-menu"
                    :class="{'dropdown-menu--onEdit': patient.id == patientIDOnAction }">
                    <a
                      class="dropdown-item"
                      href="#"
                      @click="actionEditRise(patient.id)">Edit</a>
                    <a class="dropdown-item" href="#" @click="actionModalToggler('Delete', patient.id)">Delete</a>
                    <a class="dropdown-item" href="#" @click="actionModalToggler('Archive', patient.id)">Archive</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" v-if="isLoading_PatientList">
                <i class="fa fa-spinner fa-spin" ></i>
                <span class="ml-2">Loading data...</span>
              </td>
              <td v-if="!isLoading_PatientList && patients.length === 0" colspan="3">
                Looks like there is nothing here...
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <!-- .row -->
    </div>
  </div>
</template>

<script>
import EventBus from '../../../EventBus'
import { PATIENT_INFO } from '../../../store/models/patient'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'DentistPatientDetails',
  props: {
    patients: {
      type: Array,
      default: () => []
    }
  },
  components: {
    modal: () => import('./PatientsListActions_Modal')
  },
  computed: {
    ...mapGetters(['practices', 'currentUserId', 'isLoading_PatientList'])
  },
  data () {
    return {
      patientIDOnAction: null
    }
  },
  methods: {
    ...mapActions(['LOAD_PRACTICES']),
    modalPatientRise () {
      this.resetDetails()
      EventBus.$emit('PATIENT_MODAL', 'edit')
    },
    resetDetails () {
    // MEMO: reset previously selected data
      this.$store.commit('LOAD_PATIENT_INFO', JSON.parse(JSON.stringify(PATIENT_INFO)))
    },
    dropDownToggler (patientId) {
      if (this.patientIDOnAction === patientId) {
        this.patientIDOnAction = null
      } else {
        this.patientIDOnAction = patientId
      }
    },
    actionEditRise (patientId) {
      this.$store.dispatch('LOAD_PATIENT_INFO', patientId)
      EventBus.$emit('PATIENT_MODAL', 'edit')
      this.dropDownToggler(patientId)
    },
    actionModalToggler (mode, patientId) {
      EventBus.$emit('ACTION_PATIENT_MODAL', { mode, patientId })
      this.dropDownToggler(patientId)
    }
  },
  mounted () {
    if (this.practices.length === 0) {
      let dentistId = this.currentUserId
      this.LOAD_PRACTICES(dentistId)
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown{
  &-menu{
    &--onEdit {
      display: block;
    }
  }
}
</style>
