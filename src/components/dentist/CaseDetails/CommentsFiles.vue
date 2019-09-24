<template>
  <div class="container">
    <commentsFilesFilter/>
    <commentsFilesList/>
  </div>
</template>

<script>
export default {
  name: 'DentistComments',
  components: {
    commentsFilesFilter: () => import('./CommentsFilesFilter'),
    commentsFilesList: () => import('./CommentsFilesList')
  }
}
</script>

<style lang="scss" scoped>

</style>
