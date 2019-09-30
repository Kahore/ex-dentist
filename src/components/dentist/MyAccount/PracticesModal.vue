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
          <div
            class="form-group mt-2"
            :class="{ 'form-group--error': $v.selectedPractice.name.$error }">
            <input
              type="text"
              name="name"
              id="name"
              required
              class="form-control"
              placeholder="Practice Name"
              value=""
              v-model="selectedPractice.name">
            <div class="form-group__message--error" v-if="!$v.selectedPractice.name.required">Practice name is required.</div>
          </div>
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.selectedPractice.address_line_1.$error }">
            <input
              type="text"
              name="address_line_1"
              id="address_line_1"
              required
              class="form-control"
              placeholder="Address Line 1"
              value=""
              v-model="selectedPractice.address_line_1">
              <div class="form-group__message--error" v-if="!$v.selectedPractice.address_line_1.required">Address Line 1 is required.</div>
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
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.selectedPractice.city.$error }">
            <input
              type="text"
              name="city"
              id="city"
              required
              class="form-control"
              placeholder="City/Town"
              value=""
              v-model="selectedPractice.city">
              <div class="form-group__message--error" v-if="!$v.selectedPractice.city.required">City is required.</div>
          </div>
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.selectedPractice.region.$error }">
            <input
              type="text"
              name="region"
              id="region"
              required
              class="form-control"
              placeholder="State/Region"
              value=""
              v-model="selectedPractice.region">
              <div class="form-group__message--error" v-if="!$v.selectedPractice.region.required">State/Region is required.</div>
          </div>
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.selectedPractice.country.$error }">
            <input
              type="text"
              name="country"
              id="country"
              required
              class="form-control"
              placeholder="Country"
              value=""
              v-model="selectedPractice.country">
              <div class="form-group__message--error" v-if="!$v.selectedPractice.country.required">Country is required.</div>
          </div>
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.selectedPractice.postcode.$error }">
            <input
              type="text"
              name="postcode"
              id="postcode"
              required
              class="form-control"
              placeholder="Postcode"
              value=""
              v-model="selectedPractice.postcode">
              <div class="form-group__message--error" v-if="!$v.selectedPractice.postcode.required">Postcode is required.</div>
              <div class="form-group__message--error" v-if="!$v.selectedPractice.postcode.numeric">Postcode should be a numeric.</div>
          </div>
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.selectedPractice.email.$error }">
            <input
              type="email"
              name="email"
              id="email"
              required
              class="form-control"
              placeholder="Email"
              value=""
              v-model="selectedPractice.email">
            <div class="form-group__message--error" v-if="!$v.selectedPractice.email.required">Email is required.</div>
            <div class="form-group__message--error" v-if="!$v.selectedPractice.email.email">Please, type a valid email.</div>
          </div>
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.selectedPractice.phone.$error }">
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              class="form-control"
              placeholder="Phone number"
              value=""
              v-model="selectedPractice.phone">
            <div class="form-group__message--error" v-if="!$v.selectedPractice.phone.required">Phone number is required.</div>
          </div>
          <div class="form-group">
            <button
              class="btn btn-success"
              style="width: 100%"
              @click.prevent="savePractice"
              :disabled="isLoading">
              <i
                v-if="isLoading"
                class="fa fa-spinner fa-spin" />
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
import { PRACTICE } from '../../../store/models/practice'
import { required, email, numeric } from 'vuelidate/lib/validators'
export default {
  name: 'DentistPracticesModal',
  data () {
    return {
      isActive: false,
      isLoading: false
    }
  },
  validations: {
    selectedPractice: {
      first_name: {
        required
      },
      name: {
        required
      },
      address_line_1: {
        required
      },
      city: {
        required
      },
      region: {
        required
      },
      country: {
        required
      },
      postcode: {
        required,
        numeric
      },
      email: {
        required,
        email
      },
      phone: {
        required
      }
    }
  },
  computed: {
    ...mapGetters(['selectedPractice', 'currentUserId'])
  },
  methods: {
    toggleModal () {
      this.isActive = !this.isActive
    },
    savePractice () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.isLoading = true
        let isNew = this._isNew(this.selectedPractice)
        if (isNew) {
          let dentistId = this.currentUserId
          let practices = { ...this.selectedPractice, dentistId: dentistId }
          this.$store.dispatch('ADD_PRACTICE', practices)
        } else {
          this.$store.dispatch('MUTATE_PRACTICE_INFO', this.selectedPractice)
        }
        this.isLoading = false
        this.toggleModal()
      }
    },
    _isNew (selectedPractice) {
      if (typeof selectedPractice.id === 'undefined') {
        return true
      } else {
        return false
      }
    },
    resetPractice () {
      this.$store.dispatch('RESET_PRACTICE_INFO', JSON.parse(JSON.stringify(PRACTICE)))
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
