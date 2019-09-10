<template>
  <div id="app">
    <div id="nav">
      <appHeader/>
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
    appHeader: () => import('@/components/Header.vue')
  }
}
</script>
<style lang="scss">

</style>
