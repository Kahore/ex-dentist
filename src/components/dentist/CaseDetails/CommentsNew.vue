<template>
  <div>
    <div class="form-group">
      <textarea
      placeholder="New message"></textarea>
    </div>
    <div class="form-group">
      <label for="messageTo"></label>
      <select name="" id="messageTo">
        <option value="" disabled selected>Select who is the recipient</option>
        <option value="Dentist">Dentist</option>
        <option value="Lab Staff">Lab Staff</option>
        <option value="Clinician">Clinician</option>
      </select>
    </div>
    <div class="form-group">
      <input type="file" name="" id="" placeholder="attach files">
    </div>
    <div class="form-group">
      <button
        class="btn btn-success"
        style="width: 100%"
        @click.prevent="sendMessage"
      >
      Send
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DentistCommentsNew',
  methods: {
    sendMessage () {
      console.log('TCL: sendMessage -> sendMessage')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
