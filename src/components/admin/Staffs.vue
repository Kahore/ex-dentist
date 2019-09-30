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
    staffInfoModal: () => import('../admin/Staffs/StaffInfoModal'),
    tableFilter: () => import('../admin/Staffs/TableFilter'),
    tableStaffs: () => import('../admin/Staffs/Table')
  }
}
</script>
