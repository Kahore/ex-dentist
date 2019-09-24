<template>
  <div class="conteiner">
    <div class="col-12 col-md-10">
      <div class="row pt-2">
        <button
          class="btn btn-danger offset-2"
          @click="alertClinical()">Alert clinical</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlertClinicals',
  methods: {
    alertClinical () {
      console.log('TCL: alertClinical -> alertClinical')
    }
  }
}
</script>
