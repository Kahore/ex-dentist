<template>
  <div class="overflow-hidden">
    <div class="wrap-comments">
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
            <section v-if="acl === 'edit'">
              <div class="form-group ml-2 mr-2">
                <textarea
                class="w-100"
                placeholder="New message"
                v-model="text"></textarea>
              </div>
              <div class="form-group ml-2 mr-2">
                <input
                  type="file"
                  placeholder="attach files"
                  ref="fileupload"
                  class="btn-outline-light btn"
                  @change="fileLoader">
              </div>
              <div class="form-group ml-2 mr-2">
                <button
                  class="btn btn-success w-100"
                  @click.prevent="sendMessage"
                >
                Send
                </button>
              </div>
            </section>
          </div>
          <!-- .modal-content -->
        </div>
        <!-- .modal-dialog -->
      </div>
      <!-- .modal -->
    </div>
  </div>
</template>

<script>
import { getDateTime } from '../../../tools/dateTimeSetter'
export default {
  name: 'DentistCommentsNew',
  props: {
    isInternal: {
      type: Boolean,
      required: false,
      default: false
    },
    acl: {
      type: String,
      required: false,
      default: 'edit'
    }
  },
  computed: {
    commentsHistory () {
      if (this.isInternal) {
        return this.$store.getters.commentsHistoryLabClinicals
      } else {
        return this.$store.getters.commentsHistoryDentistLab
      }
    },
    mode () {
      let _mode = this.isInternal ? 'lab' : 'dentist'
      return _mode
    }
  },
  components: {
    commentsHistory: () => import('./CommentsHistory')
  },
  data () {
    return {
      isActive: false,
      text: '',
      fileName: ''
    }
  },
  methods: {
    fileLoader (e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) {

      } else {
        this.fileName = files[0].name
      }
    },
    sendMessage () {
      let userType = this._defSenderType()
      let to = this._defTo(userType)

      let data = {
        orderId: this.$route.params.orderId,
        from: userType,
        to: to,
        text: this.text,
        fileName: this.fileName,
        sendAt: getDateTime()
      }
      let mode = this.mode
      let obj = { data, mode }
      this.$store.dispatch('ADD_COMMENT', obj)
      this._clearComment()
    },
    _defSenderType () {
      return this.$store.getters.currentUser.type
    },
    _defTo (userType) {
      let to
      if (userType === 'Dentist') {
        to = 'Lab Staffs'
      } else if (userType === 'Clinical') {
        to = 'Lab Staffs'
      } else {
        if (this.isInternal) {
          to = 'Clinical'
        } else {
          to = 'Dentist'
        }
      }
      return to
    },
    _clearComment () {
      this.text = ''
      const input = this.$refs.fileupload
      input.type = 'text'
      input.type = 'file'
    },
    toggleModal () {
      this.isActive = !this.isActive
    }
  },
  created () {
    let params = {
      id: this.$route.params.orderId,
      mode: this.mode
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
