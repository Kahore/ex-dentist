<template>
  <div>
    <tableFilter></tableFilter>
    <staffInfoModal></staffInfoModal>
    <tableStaffs></tableStaffs>
  </div>
</template>

<script>
export default {
  name: 'LabStaffs',
  components: {
    staffInfoModal: () => import('../lab/Staffs/StaffInfoModal'),
    tableFilter: () => import('../lab/Staffs/TableFilter'),
    tableStaffs: () => import('../lab/Staffs/Table')
  }
}
</script>

<style lang="scss" scoped>

</style>
