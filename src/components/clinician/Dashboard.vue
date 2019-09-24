<template>
  <div>
    <clinicianStats/>
  </div>
</template>

<script>
export default {
  name: 'clinicalDashboard',
  components: {
    clinicianStats: () => import('../clinician/Dashboard/Stats')
  }
}
</script>

<style lang="scss" scoped>

</style>
