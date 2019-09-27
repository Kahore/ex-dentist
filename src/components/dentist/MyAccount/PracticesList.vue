<template>
  <div class="container table-responsive mt-2 pb-5 overflow-hidden">
    <div class="row pb-5">
      <div class="col-md-12">
        <table id="practisesList" class="table table-hover table-sm">
          <thead>
            <tr>
              <th>Practice Name</th>
              <th>City/Town</th>
              <th class="d-none d-md-table-cell">Email</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="4">
                <button
                  class="btn btn-light"
                  @click="risePracticeModal()">add practices</button>
                </td>
            </tr>
            <tr
            v-for="(practice, index) in practices"
            :key="index">
              <td>
                <a class="dark-link" href="" @click.prevent="risePracticeModal(practice.id)">{{practice.name}}</a>
              </td>
              <td>{{practice.city}}</td>
              <td class="d-none d-md-table-cell">{{practice.email}}</td>
              <td>{{practice.phone}}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" v-if="isLoading_PractiseList">
                <i class="fa fa-spinner fa-spin" ></i>
                <span class="ml-2">Loading data...</span>
              </td>
              <td v-if="!isLoading_PractiseList && practices.length === 0" colspan="3">
                Looks like there is nothing here...
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../../../EventBus'
import { mapGetters } from 'vuex'
export default {
  name: 'DentistPracticesList',
  computed: {
    ...mapGetters(['practices', 'currentUserId', 'isLoading_PractiseList'])
  },
  methods: {
    risePracticeModal (practiceId) {
      if (typeof practiceId !== 'undefined') {
        this.$store.dispatch('LOAD_PRACTICE_INFO', practiceId)
      }
      EventBus.$emit('PRACTICE_MODAL')
    }
  },
  mounted () {
    let dentistId = this.currentUserId
    this.$store.dispatch('LOAD_PRACTICES', dentistId)
  }
}
</script>
