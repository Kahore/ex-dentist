<template>
  <table
    id="caseOrders"
    class="table table-hover table-sm">
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
        :key="index"
        :class="{'attention-dentist': caseOrder.attention_require ==='Dentist', 'attention-lab':caseOrder.attention_require ==='Lab Staff' }">
        <td class="text-center">{{caseOrder.order_date}}</td>
        <td>{{caseOrder.first_name + ' '+ caseOrder.last_name }}</td>
        <td class="d-none d-sm-table-cell">
          <router-link
            :to='"/"+modeRoute+"/"+caseOrder.patientId+"/caseOrderDetails/"+caseOrder.id'>
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
    ...mapGetters(['caseOrders', 'currentUser'])
  },
  methods: {
    _getUserType () {      
      return this.currentUser.type
    }
  },
  mounted () {
    let userType = this._getUserType()
    let options = {}
    if (userType === 'Dentist') {
      options= { where: ['dentistId', '==', dentistId] }
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
