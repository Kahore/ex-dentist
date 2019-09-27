<template>
  <table
    id="caseOrders"
    class="table table-hover table-sm">
    <thead>
      <tr>
        <th>Order Date</th>
        <th>Patient Name</th>
        <th>Treatment</th>
        <th>Case Status</th>
        <th class="d-none d-md-table-cell">Appointment Date</th>
        <th>Lab Slip</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(caseOrder, index) in caseOrders"
        :key="index"
        :class="{'attention-dentist': caseOrder.attention_require ==='Dentist', 'attention-lab':caseOrder.attention_require ==='Lab Staff' }">
        <td class="text-center">{{caseOrder.order_date}}</td>
        <td>{{caseOrder.first_name + ' '+ caseOrder.last_name }}</td>
        <td class="d-sm-table-cell">
          <router-link
            :to='"/"+modeRoute+"/"+caseOrder.patientId+"/caseOrderDetails/"+caseOrder.id'>
            <a class="dark-link">{{caseOrder.treatment}}</a>
          </router-link>
          </td>
        <td class="px-0">{{caseOrder.status}}</td>
        <td class="d-none d-md-table-cell px-0">{{caseOrder.appointment_date}}</td>
        <td class="px-0">
          <button class="btn" @click="generateSlip(caseOrder.id)">
            <i class="fa fa-file"></i>
          </button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" v-if="isLoading_CaseOrders">
          <i class="fa fa-spinner fa-spin" ></i>
          <span class="ml-2">Loading data...</span>
        </td>
        <td v-if="!isLoading_CaseOrders && caseOrders.length === 0" colspan="3">
          Looks like there is nothing here...
        </td>
      </tr>
      </tfoot>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DentistCaseOrders',
  props: {
    modeRoute: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    ...mapGetters(['caseOrders', 'currentUser', 'currentUserId', 'isLoading_CaseOrders'])
  },
  methods: {
    _getUserType () {
      return this.currentUser.type
    },
    generateSlip (caseId) {
      alert('Generate lab slip for case ' + caseId + ' here')
    }
  },
  mounted () {
    let userType = this._getUserType()
    let options = {}
    if (userType === 'Dentist') {
      let dentistId = this.currentUserId
      options = { where: ['dentistId', '==', dentistId] }
    }
    this.$store.dispatch('LOAD_ORDERS', options)
  }
}
</script>

<style lang="scss" scoped>
.attention {
  &-dentist {
    background: #fbffc4fb
  }
  &-lab {
     background: #c4fd8ffb
  }
}
</style>
