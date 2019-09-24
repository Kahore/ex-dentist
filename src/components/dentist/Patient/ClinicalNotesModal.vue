<template>
  <div
    class="modal fade show modal-bg"
    :class="{'modal-bg--show': isActive}">
    <div class="modal-dialog modal-dialog-centered row pt-5">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center">Clinical Notes</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="toggleModal()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
          <textarea
            rows="2"
            class="m-2"></textarea>
            <div v-if="acl ==='edit'" class="d-flex flex-row-reverse mr-2 mb-2">
              <button class="btn btn-success"> Save</button>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../../../EventBus'
export default {
  name: 'ClinicalNotesModal',
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
  methods: {
    toggleModal () {
      this.isActive = !this.isActive
    }
  },
  mounted () {
    EventBus.$on('CLINICAL_NOTE_MODAL', payload => {
      this.toggleModal()
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
