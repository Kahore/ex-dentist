<template>
   <div class="container table-responsive pb-5 mt-2 overflow-hidden ">
     <modal/>
      <div class="row pb-5">
        <div class="col-md-12">
        <table class="table table-hover table-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th class="d-none d-md-table-cell">Email</th>
              <th>User Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="5">
                <button
                class="btn btn-light"
                @click="modalStaffRise()">add staff</button>
              </td>
            </tr>
            <tr
            v-for="(staff, index) in staffs"
            :key="index">
              <td>{{staff.first_name}} {{staff.last_name}}</td>
              <td class="d-none d-md-table-cell">{{staff.email}}</td>
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
          <tfoot>
            <tr>
              <td colspan="3" v-if="isLoading_StaffList">
                <i class="fa fa-spinner fa-spin" ></i>
                <span class="ml-2">Loading data...</span>
              </td>
              <td v-if="!isLoading_StaffList && staffs.length === 0" colspan="3">
                Looks like there is nothing here...
              </td>
            </tr>
          </tfoot>
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
    ...mapGetters(['staffs', 'isLoading_StaffList'])
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
