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
          Dentist Area
        </a>
        <div
          class="dropdown-menu"
          aria-labelledby="navbarDropdown"
          :class="{show: isDDOpen}">
          <router-link to="/dentist-dashboard">
            <a class="dropdown-item" @click="toggleDDbar">Dashboard</a>
          </router-link>
          <router-link to="/dentist-patients">
            <a class="dropdown-item" @click="toggleDDbar">Patients</a>
          </router-link>
          <router-link to="/dentist-support">
            <a class="dropdown-item" @click="toggleDDbar">Support</a>
          </router-link>
          <router-link to="/dentist-myAccount">
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
