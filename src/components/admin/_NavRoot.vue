<template>
  <div
    class="nav mr-auto "
    :class="{'d-block' : isOpen}">
    <ul class="navbar-nav">
      <router-link class="nav-link" to="/staff">
        Staff
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavAdminRoot',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>
