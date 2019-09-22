<template>
  <div class="container table-responsive mt-2">
    <div class="col-md-12">
      <table id="cart" class="table table-hover table-sm">
        <thead>
          <tr>
            <th style="width:20%">Practice Name</th>
            <th style="width:10%">City/Town</th>
            <th style="width:10%">Email</th>
            <th style="width:10%">Phone number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
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
            <td>{{practice.email}}</td>
            <td>{{practice.phone}}</td>
          </tr>
        </tbody>
      </table>
  </div>
  </div>
</template>

<script>
import EventBus from '../../../EventBus'
import { mapGetters } from 'vuex'
export default {
  name: 'DentistPracticesList',
  computed: {
    ...mapGetters(['practices'])
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
    let dentistId = 'd1'
    this.$store.dispatch('LOAD_PRACTICES', dentistId)
  }
}
</script>

<style lang="scss" scoped>

</style>
