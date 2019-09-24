<template>
  <div class="container table-responsive mt-2">
    <practicesModal/>
    <div class="col-md-12">
      <div class="row">
        <div class="col-12 col-md-4">
          <dentistInfo/>
        </div>
          <dentistStats/>
      </div>
      <!-- .row -->
    </div>
    <dentistCaseOrderSearch/>
    <dentistCaseOrder :modeRoute="'dentist-patients'"/>
  </div>
  <!-- .container -->
</template>

<script>

export default {
  name: 'DentistDashboard',
  components: {
    practicesModal: () => import('./MyAccount/PracticesModal'),
    dentistInfo: () => import('./Dashboard/DentistInfo'),
    dentistStats: () => import('./Dashboard/Stats'),
    dentistCaseOrder: () => import('./Dashboard/CaseOrders'),
    dentistCaseOrderSearch: () => import('./Dashboard/CaseOrdersSearch')
  }
}
</script>
