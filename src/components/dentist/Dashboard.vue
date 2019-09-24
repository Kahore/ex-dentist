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
    <dentistCaseOrder/>
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
    dentistCaseOrder: () => import('./Dashboard/CaseOrders')
  }
}
</script>
