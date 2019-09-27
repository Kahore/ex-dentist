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
  name: 'LabMyAccount',
  components: {
    accountDetails: () => import('./MyAccount/AccountDetails'),
    updatePassword: () => import('../dentist/MyAccount/UpdatePassword')
  }
}
</script>
