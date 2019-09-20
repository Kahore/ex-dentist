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
            <tr
            v-for="(patient, index) in patients"
            :key="index">
              <td>
                <router-link  :to="{path:'/dentist-patients/'+patient.id}">
                  <a>{{patient.first_name + ' ' + patient.last_name}}</a>
                </router-link></td>
              <td>{{patient.Treatment}}</td>
              <td>{{patient.Status}}</td>
              <td>{{patient.RegistrationDate}}</td>
              <td>{{patient.PracticeName}}</td>
              <td>{{patient.date_of_birth}}</td>
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
  name: 'DentistPatientDetails',
  props: {
    patients: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
