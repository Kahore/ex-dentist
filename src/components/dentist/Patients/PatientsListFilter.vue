<template>
   <div class="container table-responsive mt-2">
    <div class="col-md-12">
    <div class="row">
      <div class="col-12">
        <input
          type="text"
          name="patientListFilter"
          id="patientListFilter"
          class="form-control"
          placeholder="Search in patients">
      </div>
    </div>
    <!-- .row -->
    <div class="row">
      <div class="col-md-12">
      <span class="btn-group-toggle ml-2" data-toggle="buttons">
        <label
        class="btn btn-secondary"
        :class="{'active' : currentFilter==='All'}">
          <input
            type="checkbox"
            checked autocomplete="off"
            @change="filterAction('All')"> All
        </label>
      </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label
            class="btn btn-secondary"
            :class="{'active' : currentFilter==='In Treatment'}">
            <input
              type="checkbox"
              checked
              autocomplete="off"
              @change="filterAction('In Treatment')"> In Treatment
          </label>
        </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label
            class="btn btn-secondary"
            :class="{'active' : currentFilter==='Not In Treatment'}">
            <input
              type="checkbox"
              checked
              autocomplete="off"
              @change="filterAction('Not In Treatment')"> Not In Treatment
          </label>
        </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label
            class="btn btn-secondary"
            :class="{'active' : currentFilter==='Archived'}">
            <input
              type="checkbox"
              checked
              autocomplete="off"
               @change="filterAction('Archived')"> Archived
          </label>
        </span>
      </div>
    </div>
  </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DentistPatientListFilter',
  data () {
    return {
      currentFilter: 'All'
    }
  },
  computed: {
    ...mapGetters(['currentUserId'])
  },
  methods: {
    filterAction (param) {
      this.currentFilter = param
      let dentistId = this.currentUserId
      let options = { where: [['dentistId', '==', dentistId]] }
      switch (param) {
        case 'In Treatment':
          options.where.push(['Treatment', '>', ''], ['Status', '==', 'Active'])
          break
        case 'Not In Treatment':
          options.where.push(['Treatment', '==', ''])
          break
        case 'Archived':
          options.where.push(['Status', '==', 'Archive'])
          break

        default:
          break
      }
      this.$store.dispatch('LOAD_PATIENTS', options)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
