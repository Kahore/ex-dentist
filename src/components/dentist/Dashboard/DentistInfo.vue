<template>
  <div>
    <p>{{ currentUser.first_name + ' ' + currentUser.last_name }}</p>
    <button v-if="practices === []"
            class="btn btn-light"
            @click="risePracticeModal()">add practices</button>
  </div>
</template>

<script>
import EventBus from '../../../EventBus'
import { mapGetters } from 'vuex'
export default {
  name: 'DentistInfo',
  computed: {
    ...mapGetters([ 'currentUser', 'practices' ])
  },
  methods: {
    risePracticeModal () {
      EventBus.$emit('PRACTICE_MODAL')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
