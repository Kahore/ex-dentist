<template>
  <div class="container">
    <div class="col-md-12">
      <div class="row">
        <div class="col-12 col-md-4">
            <img
              :src="getImage(patientInfo.profile_picture)"
              alt="profile_picture"
              class="profile-picture__resize">
        </div>
        <div class="col-12 col-md-4">
            <p> {{ patientInfo.first_name + ' ' + patientInfo.last_name + ' - ' + patientInfo.gender}}</p>
            <p> {{ patientInfo.date_of_birth }}
              <a :href='"mailto:" + patientInfo.email'>{{patientInfo.email}}</a>
            </p>
            <p>{{patientInfo.practice_centre_id}}</p>
        </div>
      </div>
      <!-- .row -->
      <div class="row">
        <div class="col-8 col-md-4">
            <a class="dark-link" href="" @click.prevent="patientModalCall()">Edit Patient profile</a>
            <patientDetailsModal/>
        </div>
        <a class="dark-link" href="" @click.prevent="clinicalNoteModalCall()">Clinical Notes</a><br>
        <clinicalNotesModal/>
      </div>
      <!-- .row -->
    </div>
  </div>
</template>

<script>
import EventBus from '../../../EventBus'
import { mapGetters } from 'vuex'
export default {
  name: 'DentistPatientDetails',
  components: {
    clinicalNotesModal: () => import('./ClinicalNotesModal'),
    patientDetailsModal: () => import('../Patients/PatientsModal')
  },
  data () {
    return {
      // isModalActive: false
    }
  },
  computed: {
    ...mapGetters(['patientInfo'])
  },
  methods: {
    getImage (pic) {
      return require('../../../assets/' + pic)
    },
    patientModalCall () {
      EventBus.$emit('PATIENT_MODAL')
    },
    clinicalNoteModalCall () {
      EventBus.$emit('CLINICAL_NOTE_MODAL')
    }
  },
  created () {
    this.$store.dispatch('LOAD_PATIENT_INFO', this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>
.profile{
  &-picture{
    &__resize{
      width: 6rem;
    }
  }
}
</style>
