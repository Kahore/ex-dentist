<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark" role="navigation">
    <div class="container">
      <router-link to="/" class="navbar-brand mr-auto">Dentist Portal</router-link>
      <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTop"
          aria-controls="navbarTop"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTop" :class="{show: isNavOpen}">
      <ul class="navbar-nav mr-auto">

      </ul>
      <ul class="nav navbar-nav">
        <router-link to="/login" tag="li" v-if="!isLoggedIn" class="nav-item" active-class="active">
          <a class="nav-link">Login</a>
        </router-link>
        <li v-if="isLoggedIn" class="li-pointer nav-item">
          <a @click="logout" class="nav-link">Logout {{ userEmail }}</a>
        </li>
        <router-link to="/register" tag="li" v-if="!isLoggedIn" class="nav-item" active-class="active">
          <a class="nav-link">Register</a>
        </router-link>
      </ul>
    </div>
    </div>
    <!-- .container-->
  </nav>
  <!-- .navbar-->
</template>

<script>
import {
  mapActions, mapGetters
} from 'vuex'
export default {
  name: 'navHeader',
  data () {
    return {
      isNavOpen: false
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'currentUser']),
    userEmail () {
      return this.isLoggedIn ? this.currentUser.email : ''
    }
  },
  methods: {
    ...mapActions(['logout']),
    toggleNavbar () {
      this.isNavOpen = !this.isNavOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-btn a {
  color: white;
}
.li-pointer {
  cursor: pointer;
}
.li-pointer:hover {
  cursor: pointer;
}
</style>
