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
      <div class=" collapse navbar-collapse" id="navbarTop" :class="{show: isNavOpen}">
        <NavDentist :isOpen="isNavOpen" v-if="userType === 'Dentist'"/>
        <NavLab :isOpen="isNavOpen" v-if="userType === 'Lab'"/>
        <NavClinician :isOpen="isNavOpen" v-if="userType === 'Clinician'"/>
        <div class="mr-auto" v-if="userType === ''"></div>
      <ul class="nav navbar-nav">
        <router-link to="/login" tag="li" v-if="!isLoggedIn" class="nav-item" active-class="active">
          <a class="nav-link" @click="loginModalCall()">Login</a>
        </router-link>
         <a @click="logout" v-if="isLoggedIn" href="" class="nav-link">Logout </a>
        <router-link to="/register" tag="li" v-if="!isLoggedIn" class="nav-item" active-class="active">
          <a class="nav-link" @click="registerModalCall()">Register</a>
        </router-link>
      </ul>
    </div>
    </div>
    <!-- .container-->
  </nav>
  <!-- .navbar-->
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
import EventBus from '../EventBus'
export default {
  name: 'navHeader',
  components: {
    NavDentist: () => import('./dentist/_NavRoot'),
    NavLab: () => import('./lab/_NavRoot'),
    NavClinician: () => import('./clinician/_NavRoot')
  },
  data () {
    return {
      isNavOpen: false
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'currentUser']),
    userType () {
      return this.isLoggedIn ? this.currentUser.type : ''
    },
    userEmail () {
      return this.isLoggedIn ? this.currentUser.email : ''
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.go('/')
        this.$store.commit('AUTH_STATUS_CHANGE')
        this.$store.dispatch('MUTATE_USER_TYPE', '')
        this.$store.commit('LOAD_USER', {})
        localStorage.removeItem('userInfo')
      })
    },
    toggleNavbar () {
      this.isNavOpen = !this.isNavOpen
    },
    loginModalCall () {
      EventBus.$emit('LOGIN_MODAL')
    },
    registerModalCall () {
      EventBus.$emit('REGISTER_MODAL')
    }
  },
  created () {
    if (firebase.auth().currentUser !== null) {
      let userId = firebase.auth().currentUser.uid
      this.$store.dispatch('LOAD_USER', userId)
      this.$store.commit('AUTH_STATUS_CHANGE')
    }
  }
}
</script>
