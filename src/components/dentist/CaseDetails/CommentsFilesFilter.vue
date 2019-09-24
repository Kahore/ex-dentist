<template>
  <div>
    <h5>Files upload by</h5>
    <div class="row">
      <div class="col-md-12">
      <span class="btn-group-toggle ml-2" data-toggle="buttons">
        <label class="btn btn-secondary"
        :class="{'active' : currentFilter==='All' }">
          <input
            type="checkbox"
            checked
            autocomplete="off"
            @change="filterTrigger('All')"> All
        </label>
      </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label class="btn btn-secondary"
          :class="{'active' : currentFilter==='Dentist' }">
            <input
              type="checkbox"
              checked
              autocomplete="off"
              @change="filterTrigger('Dentist')"> Dentist
          </label>
        </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label class="btn btn-secondary"
          :class="{'active' : currentFilter==='Lab Staffs' }">
            <input
              type="checkbox"
              checked
              autocomplete="off"
              @change="filterTrigger('Lab Staffs')"> Lab
          </label>
        </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label class="btn btn-secondary"
          :class="{'active' : currentFilter==='Clinician' }">
            <input
              type="checkbox"
              checked
              autocomplete="off"
              @change="filterTrigger('Clinician')"> Clinician
          </label>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../../../EventBus'
export default {
  name: 'DentistCommentsFilter',
  data () {
    return {
      currentFilter: 'All'
    }
  },
  methods: {
    filterTrigger (mode) {
      this.currentFilter = mode
      EventBus.$emit('FILTER_FILES', mode)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
