<template>
  <div id="app">
    <div id="nav">
      <appHeader/>
      <router-view/>
    </div>
  </div>
</template>
<script>
import { firebaseAuth } from './config/firebaseConfig'
import firebase from 'firebase'
export default {
  name: 'App',
  components: {
    appHeader: () => import('@/components/Header.vue')
  },
  created () {
    if (firebaseAuth().currentUser != null) {
      let userId = firebase.auth().currentUser.uid
      this.$store.dispatch('LOAD_USER', userId)
    }
  }
}
</script>
<style lang="scss">

</style>
