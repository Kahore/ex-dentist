<template>
   <div class="container table-responsive mt-2">
     <modal/>
     <div class="col-md-12">
      <div class="row">
        <table class="table table-hover table-sm">
          <thead>
            <tr>
              <th style="width:10%">First Name</th>
              <th style="width:22%">Last Name</th>
              <th style="width:10%">Email</th>
              <th style="width:10%">User Type</th>
              <th style="width:10%">Status</th>
              <th style="width:15%">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <button
                class="btn btn-light"
                @click="modalStaffRise()">add staff</button>
            </tr>
            <tr
            v-for="(staff, index) in staffs"
            :key="index">
              <td>{{staff.first_name}}</td>
              <td>{{staff.last_name}}</td>
              <td>{{staff.email}}</td>
              <td>{{staff.type}}</td>
              <td>{{staff.status}}</td>
              <td>
                <div class="dropdown">
                  <a
                    class="btn btn-secondary"
                    href="#"
                    role="button"
                    id="dropdownMenuLink1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="dropDownToggler(staff.id)">
                    <i class="far fa-cog"></i>
                  </a>
                  <div class="dropdown-menu"
                    :class="{'dropdown-menu--onEdit': staff.id == staffIDOnAction }">
                    <a
                      class="dropdown-item"
                      href="#"
                      @click="actionEditRise(staff.id)">Edit</a>
                    <a
                      class="dropdown-item"
                      href="#"
                      @click="actionModalToggler('Delete', staff.id)">Delete</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../../../EventBus'
import { mapGetters } from 'vuex'
import { STAFF_INFO } from '../../../store/models/staff'
export default {
  name: 'staffsTable',
  data () {
    return {
      staffIDOnAction: null
    }
  },
  components: {
    modal: () => import('../../dentist/Patients/PatientsListActions_Modal')
  },
  computed: {
    ...mapGetters(['staffs'])
  },
  methods: {
    modalStaffRise () {
      this.resetDetails()
      EventBus.$emit('STAFF_MODAL', 'add')
    },
    resetDetails () {
    // MEMO: reset previously selected data
      this.$store.commit('LOAD_STAFF_INFO', JSON.parse(JSON.stringify(STAFF_INFO)))
    },
    dropDownToggler (staffId) {
      if (this.staffIDOnAction === staffId) {
        this.staffIDOnAction = null
      } else {
        this.staffIDOnAction = staffId
      }
    },
    actionEditRise (staffId) {
      console.log('TCL: actionEditRise -> staffId', staffId)
      this.$store.dispatch('LOAD_STAFF_INFO', staffId)
      EventBus.$emit('STAFF_MODAL', 'edit')
      this.dropDownToggler(staffId)
    },
    actionModalToggler (mode, staffId) {
      EventBus.$emit('ACTION_PATIENT_MODAL', { mode, staffId })
      this.dropDownToggler(staffId)
    }
  },
  mounted () {
    this.$store.dispatch('LOAD_STAFFS')
  }
}
</script>

<style lang="scss" scoped>
.dropdown{
  &-menu{
    &--onEdit {
      display: block;
    }
  }
}
</style>
