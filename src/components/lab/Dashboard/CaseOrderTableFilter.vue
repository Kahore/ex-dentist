<template>
    <div class="row">
      <div class="col-md-12">
      <span class="btn-group-toggle ml-2" data-toggle="buttons">
        <label
          class="btn btn-secondary"
          :class="{'active' : currentFilter==='All'}">
          <input
            type="checkbox"
            checked
            autocomplete="off"
            @change="filterTrigger('All')">All
        </label>
      </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label
            class="btn btn-secondary"
            :class="{'active' : currentFilter==='In review'}">
            <input
              type="checkbox"
              checked
              autocomplete="off"
              @change="filterTrigger('In review')">In review
          </label>
        </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label
            class="btn btn-secondary"
            :class="{'active' : currentFilter==='Assigned to the Dentist' }">
            <input
              type="checkbox"
              checked
              autocomplete="off"
              @change="filterTrigger('Assigned to the Dentist')">Assigned to the Dentist
          </label>
        </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label
            class="btn btn-secondary"
            :class="{'active' : currentFilter==='Assigned to the Lab'}">
            <input
              type="checkbox"
              checked
              autocomplete="off"
              @change="filterTrigger('Assigned to the Lab')">Assigned to the Lab
          </label>
        </span>
        <span class="btn-group-toggle ml-2" data-toggle="buttons">
          <label
            class="btn btn-secondary"
            :class="{'active' : currentFilter==='With clinician alert'}">
            <input
              type="checkbox"
              checked
              autocomplete="off"
              @change="filterTrigger('With clinician alert')">With clinician alert
          </label>
        </span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CaseOrderTableFilter',
  data () {
    return {
      currentFilter: 'All'
    }
  },
  methods: {
    filterTrigger (mode) {
      this.currentFilter = mode
      let options = this._optionsSetter(mode)
      this.$store.dispatch('LOAD_ORDERS', options)
    },
    _optionsSetter (mode) {
      let _options
      switch (mode) {
        case 'In review':
          _options = { where: ['status', '==', mode] }
          break
        case 'Assigned to the Dentist':
          _options = { where: ['attention_require', '==', 'Dentist'] }
          break
        case 'Assigned to the Lab':
          _options = { where: ['attention_require', '==', 'Lab Staff'] }
          break
        case 'With clinician alert':
          _options = { where: ['clinical_alert', '==', true] }
          break
        default:
          _options = []
          break
      }
      return _options
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
