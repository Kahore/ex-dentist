<template>
  <div>
    <h3>Comments Section</h3>
    <commentsNew/>
    <commentsHistory/>
    <commentsFilter/>
    <commentsFileList/>
  </div>
</template>

<script>
export default {
  name: 'DentistComments',
  components: {
    commentsNew: () => import('./CommentsNew'),
    commentsFilter: () => import('./CommentsFilter'),
    commentsHistory: () => import('./CommentsHistory'),
    commentsFileList: () => import('./CommentsFileList')
  }
}
</script>

<style lang="scss" scoped>

</style>
