<template>
  <div class="container table-responsive mt-2">
    <div class="col-md-12">
      <div class="row">
        <table class="table table-hover table-sm">
          <thead>
            <tr>
              <th style="width:10%">Patient name</th>
              <th style="width:22%">Treatment</th>
              <th style="width:10%">Status</th>
              <th style="width:10%">Registration Date</th>
              <th style="width:10%">Practice Name</th>
              <th style="width:15%">Date of Birth</th>
              <th style="width:10%">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <button class="btn btn-light">add patient</button>
            </tr>
            <tr>
              <td><router-link to="/dentist-patients/patient"><a>Patient</a></router-link></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div class="dropdown">
                  <a
                    class="btn btn-secondary"
                    href="#"
                    role="button"
                    id="dropdownMenuLink1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <i class="far fa-cog"></i>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Delete</a>
                    <a class="dropdown-item" href="#">Archive</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- .row -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'DentistPatientDetails'
}
</script>

<style lang="scss" scoped>

</style>
