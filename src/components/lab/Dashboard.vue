<template>
  <div>
    <labStats/>
  </div>
</template>

<script>
export default {
  name: 'LabDashboard',
  components: {
    labStats: () => import('./Dashboard/Stats')
  }
}
</script>

<style lang="scss" scoped>

</style>
