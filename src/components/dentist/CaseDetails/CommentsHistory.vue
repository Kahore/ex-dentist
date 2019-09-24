<template>
  <div class="comments">
    <div
    v-for="(history, index) in commentsHistory"
    :key="index"
    class="mr-2 ml-2">
      <p class="comments-header">From: {{ history.from }} to: {{ history.to }} at: {{history.sendAt}}<br>
      {{history.text}}</p>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DentistCommentsList',
  props: {
    commentsHistory: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.comments{
  max-height: 18rem;
  overflow-y: scroll;
}
</style>
