<template>
  <div id="app">
    <div id="nav">
      <appHeader :key="$route.fullPath"/>
      <router-view/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
export default {
  name: 'App',
  components: {
    appHeader: () => import('@/components/Header.vue')
  },
  computed: {
    ...mapGetters(['currentUser', 'currentUserId'])
  },
  updated () {
    if (firebase.auth().currentUser !== null) {
      if (Object.entries(this.currentUser).length === 0) {
        let userId = firebase.auth().currentUser.uid
        this.$store.dispatch('LOAD_USER', userId)
        this.$store.commit('AUTH_STATUS_CHANGE')
      }
    }
  }
}
</script>
