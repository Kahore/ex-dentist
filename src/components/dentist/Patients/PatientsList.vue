<template>
  <div class="container table-responsive mt-2">
    <modal/>
    <div class="col-md-12">
      <div class="row">
        <table class="table table-hover table-sm">
          <thead>
            <tr>
              <th style="width:10%">Patient name</th>
              <th style="width:22%">Treatment</th>
              <th style="width:10%">Status</th>
              <th style="width:10%">Registration Date</th>
              <th style="width:10%">Practice Name</th>
              <th style="width:15%">Date of Birth</th>
              <th style="width:10%">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <button
                class="btn btn-light"
                @click="modalPatientRise()">add patient</button>
            </tr>
            <tr
            v-for="(patient, index) in patients"
            :key="index">
              <td>
                <router-link  :to="{path:'/dentist-patients/'+patient.id}">
                  <a>{{patient.first_name + ' ' + patient.last_name}}</a>
                </router-link></td>
              <td>{{patient.Treatment}}</td>
              <td>{{patient.Status}}</td>
              <td>{{patient.RegistrationDate}}</td>
              <td>{{patient.PracticeName}}</td>
              <td>{{patient.date_of_birth}}</td>
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
                    <i class="far fa-cog"></i>
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
        </table>
      </div>
      <!-- .row -->
    </div>
  </div>
</template>

<script>
import EventBus from '../../../EventBus'
import { PATIENT_INFO } from '../../../store/models/patient'
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
  data () {
    return {
      patientIDOnAction: null
    }
  },
  methods: {
    modalPatientRise () {
      this.resetDetails()
      EventBus.$emit('PATIENT_MODAL', 'edit')
    },
    resetDetails () {
    // MEMO: reset previously selected data
          console.log("TCL: resetDetails -> PATIENT_INFO", JSON.parse(JSON.stringify(PATIENT_INFO)))
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
