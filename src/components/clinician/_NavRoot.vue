<template>
  <div class="nav mr-auto">
    <ul class="navbar-nav">
      <router-link class="nav-link" to="/clinician-dashboard">
        Dashboard
      </router-link>
    </ul>
    <ul class="navbar-nav">
      <router-link class="nav-link" to="/clinician-myAccount">
        My Account
      </router-link>
    </ul>
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
