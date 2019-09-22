<template>
  <div class="container table-responsive mt-2">
    <practicesModal/>
    <div class="col-md-12">
      <div class="row">
        <div class="col-12 col-md-4">
          <div>
            <p>{{ currentUser.first_name + ' ' + currentUser.last_name }}</p>
            <button v-if="practices === []"
              class="btn btn-light"
              @click="risePracticeModal()">add practices</button>
          </div>
        </div>
        <div class="col-12 col-md-4">
            <p>Total Cases: {{stats.totalCases}}</p>
            <p>Cases Completed: {{stats.casesCompleted}}</p>
        </div>
        <div class="col-12 col-md-4">
            <p>Cases Inprogress: {{stats.casesInprogress}}</p>
            <p>Cases Required: {{stats.casesRequiredAttention}}</p>
        </div>
      </div>
      <!-- .row -->
    </div>
    <div class="row">
      <div class="col-12">
        <input
          type="text"
          name="caseOrderTableFilter"
          id="caseOrderTableFilter"
          class="form-control"
          placeholder="Filter Case Order Table">
      </div>
    </div>
    <!-- .row -->
    <table id="cart" class="table table-hover table-sm">
    <thead>
      <tr>
        <th style="width:10%">Order Date</th>
        <th style="width:22%">Patient Name</th>
        <th style="width:10%">ID</th>
        <th style="width:22%">Treatment</th>
        <th style="width:10%">Case Status</th>
        <th style="width:15%">Appointment Date</th>
        <th style="width:10%">Lab Slip</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(caseOrder, index) in caseOrders"
        :key="index">
        <td class="text-center">{{caseOrder.order_date}}</td>
        <td>{{caseOrder.first_name + ' '+ caseOrder.last_name }}</td>
        <td class="d-none d-sm-table-cell">
          <router-link
            :to='"/dentist-patients/"+caseOrder.patientId+"/caseOrderDetails/"+caseOrder.id'>
            <a class="dark-link">{{caseOrder.id}}</a>
          </router-link>
        </td>
        <td class="d-none d-sm-table-cell">{{caseOrder.treatment}}</td>
        <td class="px-0">{{caseOrder.status}}</td>
        <td class="px-0">{{caseOrder.appointment_date}}</td>
        <td class="px-0">Some Lab Slip</td>
      </tr>
    </tbody>
  </table>
  </div>
  <!-- .container -->
</template>

<script>
import EventBus from '../../EventBus'
import { mapGetters } from 'vuex'
export default {
  name: 'DentistDashboard',
  components: {
    practicesModal: () => import('./MyAccount/PracticesModal')
  },
  computed: {
    ...mapGetters(['caseOrders', 'currentUser', 'practices', 'stats'])
  },
  methods: {
    risePracticeModal () {
      EventBus.$emit('PRACTICE_MODAL')
    }
  },
  mounted () {
    // let dentistId = this.$store.getters
    this.$store.dispatch('LOAD_ORDERS', 'some data for future implement')
    this.$store.dispatch('LOAD_STATS', this.currentUser.id)
  }
}
</script>

<style lang="scss" scoped>

</style>
