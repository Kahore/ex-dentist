<template>
  <section class="container ml-1 mr-1">
    <practicesModal/>
    <div class="row pt-3">
      <personalDetails/>
      <updatePassword/>
    </div>
    <practicesList/>
  </section>
</template>

<script>
export default {
  name: 'DentistMyAccount',
  components: {
    personalDetails: () => import('./MyAccount/PersonalDetails'),
    updatePassword: () => import('./MyAccount/UpdatePassword'),
    practicesList: () => import('./MyAccount/PracticesList'),
    practicesModal: () => import('./MyAccount/PracticesModal')
  }
}
</script>
