<template>
  <div>
    <labStats/>
    <div class="container table-responsive mt-2">
      <labCaseOrderFilters/>
      <labCaseOrderSearch/>
      <labCaseOrders :modeRoute="'lab-patients'"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LabDashboard',
  components: {
    labStats: () => import('./Dashboard/Stats'),
    labCaseOrderFilters: () => import('./Dashboard/CaseOrderTableFilter'),
    labCaseOrderSearch: () => import('../dentist/Dashboard/CaseOrdersSearch'),
    labCaseOrders: () => import('../dentist/Dashboard/CaseOrders')
  }
}
</script>

<style lang="scss" scoped>

</style>
