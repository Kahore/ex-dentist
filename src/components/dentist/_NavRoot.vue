<template>
  <div
    class="nav mr-auto"
    :class="{'d-block' : isOpen}">
    <ul class="navbar-nav">
      <router-link class="nav-link" to="/dentist-dashboard">
        Dashboard
      </router-link>
    </ul>
    <ul class="navbar-nav">
    <router-link class="nav-link" to="/dentist-patients">
     Patients
    </router-link>
    </ul>
    <ul class="navbar-nav">
    <router-link class="nav-link" to="/dentist-support">
      Support
    </router-link>
    </ul>
    <ul class="navbar-nav">
    <router-link class="nav-link" to="/dentist-myAccount">
     My Account
    </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavDentistRoot',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>
