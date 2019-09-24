<template>
  <div>
    <clinicianStats/>
    <div class="container table-responsive mt-2">
      <clinicianCaseOrderFilter/>
      <clinicianCaseOrderSearch/>
      <clinicianCaseOrders :modeRoute="'clinician-patients'"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'clinicalDashboard',
  components: {
    clinicianStats: () => import('../clinician/Dashboard/Stats'),
    clinicianCaseOrderFilter: () => import('../lab/Dashboard/CaseOrderTableFilter'),
    clinicianCaseOrderSearch: () => import('../dentist/Dashboard/CaseOrdersSearch'),
    clinicianCaseOrders: () => import('../dentist/Dashboard/CaseOrders')
  }
}
</script>

<style lang="scss" scoped>

</style>
