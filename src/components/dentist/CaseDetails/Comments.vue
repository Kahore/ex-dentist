<template>
  <div class="overflow-hidden">
    <commentsNew/>
    <div class="container">
      <commentsFilter/>
      <commentsFileList/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DentistComments',
  components: {
    commentsNew: () => import('./CommentsNew'),
    commentsFilter: () => import('./CommentsFilter'),
    commentsFileList: () => import('./CommentsFileList')
  }
}
</script>

<style lang="scss" scoped>

</style>
