<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Main/>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
    Main: () =>  import('@/components/Main.vue')
  }
}
</script>
