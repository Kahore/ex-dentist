<template>
  <div class="container table-responsive mt-2">
    <div class="col-md-12">
      <div class="row">
        <div class="col-12 col-md-4">
          <div>
            <p>John Doe</p>
            <button class="btn btn-light">add practices</button>
          </div>
        </div>
        <div class="col-12 col-md-4">
            <p>Total Cases: 10</p>
            <p>Cases Completed: 8</p>
        </div>
        <div class="col-12 col-md-4">
            <p>Cases Inprogress: 1</p>
            <p>Cases Required: 1</p>
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
    <tfoot>
      <tr>
        <td class="text-center">2019-09-10</td>
        <td>John Smith</td>
        <td class="d-none d-sm-table-cell">
          <router-link
            to="/CaseOrderPage">
            <a class="dark-link">1234567</a>
          </router-link>
        </td>
        <td class="d-none d-sm-table-cell">Some Treatment</td>
        <td class="px-0">Some Case Status</td>
        <td class="px-0">2019-09-15</td>
        <td class="px-0">Some Lab Slip</td>
      </tr>
    </tfoot>
  </table>
  </div>
  <!-- .container -->
</template>

<script>
export default {
  name: 'DentistDashboard'
}
</script>

<style lang="scss" scoped>

</style>
