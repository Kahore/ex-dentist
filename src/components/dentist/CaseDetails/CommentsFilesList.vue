<template>
  <div>
    <ul v-for="(history, index) in commentsHistoryFile"
    :key="index">
      <template v-if="history.fileName !== ''">
        <li>
          <div>
            <template v-if="history.from === 'Dentist'">
              <img src="../../../assets/dentist.svg" alt="dentist" class="uploaded-img">
            </template>
            <template v-else-if="history.from === 'Lab Staffs'">
              <img src="../../../assets/labStaff.svg" alt="labStaff" class="uploaded-img">
            </template>
            <template v-else>
              <img src="../../../assets/clinicians.svg" alt="clinicians" class="uploaded-img">
            </template>
            <a href=""> {{history.fileName}} </a>
          </div>
        </li>
      </template>
    </ul>
    <template v-if="isLoading_FilesList">
      <i class="fa fa-spinner fa-spin" ></i>
      <span class="ml-2">Loading data...</span>
    </template>
    <template v-if="!isLoading_FilesList && commentsHistoryFile.length === 0">
      <p>Oh, looks like there is nothing here</p>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EventBus from '../../../EventBus'
export default {
  name: 'DentistCommentsFilesList',
  computed: {
    ...mapGetters(['commentsHistoryFile', 'isLoading_FilesList'])
  },
  methods: {
    filterFile (mode) {
      this.$store.dispatch('LOAD_FILES', { orderId: this.$route.params.orderId, from: mode })
    }
  },
  mounted () {
    EventBus.$on('FILTER_FILES', payload => {
      this.filterFile(payload)
    })
    this.filterFile('All')
  }
}
</script>

<style lang="scss" scoped>
.uploaded-img {
  width: 1.5rem;
}
</style>
