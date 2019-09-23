<template>
  <div class="wrap-commenst">
    <button v-if="!isActive"
      :class="{'comments comments-init btn btn-secondary': !isActive}"
      @click="toggleModal()">Open comments</button>
    <div class ="modal fade right show modal-scrolling"
        :class="{'comments': isActive}">
      <div class="modal-dialog modal-side modal-bottom-right">
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
          <commentsHistory/>
          <div class="form-group ml-2 mr-2">
            <label for="messageTo"></label>
            <select name="" id="messageTo">
              <option value="" disabled selected>Select who is the recipient</option>
              <option value="Dentist">Dentist</option>
              <option value="Lab Staff">Lab Staff</option>
              <option value="Clinician">Clinician</option>
            </select>
          </div>
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
}

</style>
