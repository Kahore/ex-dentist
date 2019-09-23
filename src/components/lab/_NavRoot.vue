<template>
  <div>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          @click="toggleDDbar"
          @blur="toggleDDbar">
          Lab Area
        </a>
        <div
          class="dropdown-menu"
          aria-labelledby="navbarDropdown"
          :class="{show: isDDOpen}">
          <router-link to="/lab-dashboard">
            <a class="dropdown-item" @click="toggleDDbar">Dashboard</a>
          </router-link>
          <router-link to="/lab-staffs">
            <a class="dropdown-item" @click="toggleDDbar">Staffs</a>
          </router-link>
          <router-link to="/lab-myAccount">
            <a class="dropdown-item" @click="toggleDDbar">My Account</a>
          </router-link>
        </div>
      </li>
  </div>
</template>

<script>
export default {
  name: 'NavDentistRoot',
  data () {
    return {
      isDDOpen: false
    }
  },
  methods: {
    toggleDDbar () {
      this.isDDOpen = !this.isDDOpen
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
