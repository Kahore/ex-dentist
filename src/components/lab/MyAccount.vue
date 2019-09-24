<template>
  <section>
    <accountDetails/>
    <updatePassword/>
  </section>
</template>

<script>
export default {
  name: 'LabMyAccount',
  components: {
    accountDetails: () => import('./MyAccount/AccountDetails'),
    updatePassword: () => import('../dentist/MyAccount/UpdatePassword')
  }
}
</script>

<style lang="scss" scoped>

</style>
