<template>
  <div class="row pt-5">
    <div class="col-md-4 offset-md-4 col-sm-12 offset-sm-1">
      <form id="login-form" role="form" class="form-group ml-2">
        <h4 class="text-center">Patient details</h4>
        <div class="form-group">
          <input
            type="text"
            name="first_name"
            id="first_name"
            required
            class="form-control"
            placeholder="First Name"
            value=""
            v-model="first_name">
        </div>
        <div class="form-group">
          <input
            type="text"
            name="last_name"
            id="last_name"
            required
            class="form-control"
            placeholder="Last Name"
            value=""
            v-model="last_name">
        </div>
        <div class="form-group">
          <input
            type="date"
            name="date_of_birth"
            id="date_of_birth"
            required
            class="form-control"
            placeholder="Date Of Birth"
            value=""
            v-model="date_of_birth">
        </div>
        <div class="form-group">
          <input
            type="email"
            name="email"
            id="email"
            required
            class="form-control"
            placeholder="Email Address"
            value=""
            v-model="email">
        </div>
        <div class="form-group">
          <select name="" id="" v-model="gender">
            <option value="" disabled selected>Select patient gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="another">Another</option>
          </select>
        </div>
        <div class="form-group">
          <input
            type="file"
            name="profile_picture"
            id="profile_picture"
            required
            class="form-control"
            placeholder="Profile Picture"
            value=""
            >
        </div>
        <div class="form-group">
          <select name="" id="" v-model="practice_centre_id">
            <option value="" disabled selected>Select practice centre</option>
            <option value="practice_centre_1">practice_centre_1</option>
            <option value="practice_centre_2">practice_centre_2</option>
            <option value="practice_centre_3">practice_centre_3</option>
          </select>
        </div>
        <div class="form-group">
          <button
            class="btn btn-success"
            style="width: 100%"
            @click.prevent="savePatient"
            >
            Save Patient
          </button>
        </div>
      </form>
    </div>
  </div>
  <!-- .row -->
</template>

<script>
export default {
  name: 'DentistPatientModal',
  methods: {
    savePatient () {
      console.log('TCL: savePatient -> savePatient')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
