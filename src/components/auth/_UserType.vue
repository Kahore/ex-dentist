<template>
  <section>
    <span class="mr-2">Please, select what kind of user you are</span>
    <select @change="onChange($event)" >
      <option value=""></option>
      <option value="Clinician">Clinician</option>
      <option value="Dentist">Dentist</option>
      <option value="Lab">Lab</option>
    </select>
  </section>
</template>

<script>
export default {
  name: 'UserType',
  methods: {
    onChange (event) {
      this.$store.dispatch('MUTATE_USER_TYPE', event.target.value)
    }
  }
}
</script>
