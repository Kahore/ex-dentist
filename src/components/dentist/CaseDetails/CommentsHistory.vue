<template>
  <div>
    <ul
    v-for="(history, index) in commentsHistory"
    :key="index">
      <li>{{history.text}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DentistCommentsList',
  computed: {
    ...mapGetters(['commentsHistory'])
  },
  created () {
    this.$store.dispatch('LOAD_HISTORY', this.$route.params.orderId)
  }
}
</script>

<style lang="scss" scoped>

</style>
