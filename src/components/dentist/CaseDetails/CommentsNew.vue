<template>
  <div class="wrap-commenst">
    <button v-if="!isActive"
      :class="{'comments comments-init btn btn-secondary': !isActive, 'offset-btn--right': isInternal}"
      @click="toggleModal()">
      <template v-if="isInternal">
        Open internal
      </template>
      <template v-else>
        Open comments
      </template>
      </button>
    <div class ="modal fade right show modal-scrolling"
        :class="{'comments': isActive}">
      <div class="modal-dialog modal-side modal-bottom-right"
      :class="{'offset-modal--right': isInternal}">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center">Comments</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="toggleModal()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <commentsHistory
          :commentsHistory="commentsHistory"/>
          <div class="form-group ml-2 mr-2">
            <textarea
            class="w-100"
            placeholder="New message"></textarea>
          </div>
          <div class="form-group ml-2 mr-2">
            <input
              type="file"
              placeholder="attach files"
              class="btn-outline-light btn">
          </div>
          <div class="form-group ml-2 mr-2">
            <button
              class="btn btn-success w-100"
              @click.prevent="sendMessage"
            >
            Send
            </button>
          </div>
        </div>
        <!-- .modal-content -->
      </div>
      <!-- .modal-dialog -->
    </div>
    <!-- .modal -->
  </div>
</template>

<script>
export default {
  name: 'DentistCommentsNew',
  props: {
    isInternal: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    commentsHistory () {
      if (this.isInternal) {
        return this.$store.getters.commentsHistoryLabClinicals
      } else {
        return this.$store.getters.commentsHistoryDentistLab
      }
    }
  },
  components: {
    commentsHistory: () => import('./CommentsHistory')
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    sendMessage () {
      console.log('TCL: sendMessage -> sendMessage')
    },
    toggleModal () {
      this.isActive = !this.isActive
    }
  },
  created () {
    let mode = this.isInternal ? 'lab' : 'dentist'
    let params = {
      id: this.$route.params.orderId,
      mode: mode
    }
    this.$store.dispatch('LOAD_HISTORY', params)
  },
  mounted () {
    this.toggleModal()
  }
}
</script>

<style lang="scss" scoped>
  .comments {
    display: block;
    position: relative;
    &-init {
      position: fixed;
      right: 0.8rem;
      bottom: 0;
    }
  }
  .modal .modal-dialog.modal-bottom-right {
    bottom: 10px;
    right: 0.8rem;
    position: fixed;
    &.offset-modal--right{
      right: 25rem;
    }
}
.offset-btn--right{
  right: 10rem;
}
@media screen and (max-width: 425px){
  .modal-dialog.modal-side.modal-bottom-right{
    width: 288px;
    &.offset-modal--right{
      right: 0rem;
    }
  }
}

</style>
