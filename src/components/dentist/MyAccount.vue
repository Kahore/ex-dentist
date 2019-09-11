<template>
  <section>
    <personalDetails/>
    <updatePassword/>
    <practicesList/>
  </section>
</template>

<script>
export default {
  name: 'DentistMyAccount',
  components: {
    personalDetails: () => import('./MyAccount/PersonalDetails'),
    updatePassword: () => import('./MyAccount/UpdatePassword'),
    practicesList: () => import('./MyAccount/PracticesList')
  }
}
</script>

<style lang="scss" scoped>

</style>
