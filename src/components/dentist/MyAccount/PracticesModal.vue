<template>
  <div
    class="modal fade show modal-bg"
    :class="{'modal-bg--show': isActive}">
    <div class="modal-dialog modal-dialog-centered row pt-5">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center" id="exampleModalLongTitle">Manage your practices</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="resetPractice()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form id="practice-form" role="form" class="form-group ml-2 mr-2">
          <div class="form-group mt-2">
            <input
              type="text"
              name="name"
              id="name"
              required
              class="form-control"
              placeholder="Practice Name"
              value=""
              v-model="selectedPractice.name">
          </div>
          <div class="form-group">
            <input
              type="text"
              name="address_line_1"
              id="address_line_1"
              required
              class="form-control"
              placeholder="Address Line 1"
              value=""
              v-model="selectedPractice.address_line_1">
          </div>
          <div class="form-group">
            <input
              type="text"
              name="address_line_2"
              id="address_line_2"
              class="form-control"
              placeholder="Address Line 2"
              value=""
              v-model="selectedPractice.address_line_2">
          </div>
          <div class="form-group">
            <input
              type="text"
              name="city"
              id="city"
              required
              class="form-control"
              placeholder="City/Town*"
              value=""
              v-model="selectedPractice.city">
          </div>
          <div class="form-group">
            <input
              type="text"
              name="region"
              id="region"
              required
              class="form-control"
              placeholder="State/Region"
              value=""
              v-model="selectedPractice.region">
          </div>
          <div class="form-group">
            <input
              type="text"
              name="country"
              id="country"
              required
              class="form-control"
              placeholder="Country"
              value=""
              v-model="selectedPractice.country">
          </div>
          <div class="form-group">
            <input
              type="text"
              name="postcode"
              id="postcode"
              required
              class="form-control"
              placeholder="Postcode"
              value=""
              v-model="selectedPractice.postcode">
          </div>
          <div class="form-group">
            <input
              type="email"
              name="email"
              id="email"
              required
              class="form-control"
              placeholder="Email"
              value=""
              v-model="selectedPractice.email">
          </div>
          <div class="form-group">
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              class="form-control"
              placeholder="Phone number"
              value=""
              v-model="selectedPractice.phone">
          </div>
          <div class="form-group">
            <button
              class="btn btn-success"
              style="width: 100%"
              @click.prevent="savePractice"
              >
              Save Practice
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
  name: 'DentistPracticesModal',
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapGetters(['selectedPractice'])
  },
  methods: {
    toggleModal () {
      this.isActive = !this.isActive
    },
    savePractice () {
      console.log('TCL: savePractice -> savePractice')
    },
    resetPractice () {
      this.$store.dispatch('MUTATE_PRACTICE_INFO', {})
      this.toggleModal()
    }
  },
  mounted () {
    EventBus.$on('PRACTICE_MODAL', payload => {
      this.toggleModal()
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
