<template>
  <section>
    <div class="row pt-3">
      <accountDetails/>
      <updatePassword/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'clinicalMyAccount',
  components: {
    accountDetails: () => import('../lab/MyAccount/AccountDetails'),
    updatePassword: () => import('../dentist/MyAccount/UpdatePassword')
  }
}
</script>

<style lang="scss" scoped>

</style>
