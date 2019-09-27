<template>
  <div>
    <SupportContact/>
    <div class="row">
      <div class="col-12 col-md-10 offset-md-2">
        <SupportAdministration/>
        <SupportLaboratory/>
      </div>
    </div>
    <SupportDoc/>
    <SupportVideo/>
    <SupportFAQ/>
  </div>
</template>

<script>
export default {
  name: 'DentistSupport',
  components: {
    SupportContact: () => import('./Support/SupportContact'),
    SupportAdministration: () => import('./Support/SupportAdministration'),
    SupportLaboratory: () => import('./Support/SupportLaboratory'),
    SupportDoc: () => import('./Support/SupportDoc'),
    SupportVideo: () => import('./Support/SupportVideo'),
    SupportFAQ: () => import('./Support/SupportFAQ')
  }
}
</script>
