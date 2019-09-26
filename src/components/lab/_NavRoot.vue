<template>
  <div class="nav mr-auto">
    <ul class="navbar-nav">
      <router-link class="nav-link" to="/lab-dashboard">
        Dashboard
      </router-link>
    </ul>
    <ul class="navbar-nav">
      <router-link class="nav-link" to="/lab-staffs">
        Staffs
      </router-link>
    </ul>
    <ul class="navbar-nav">
      <router-link class="nav-link" to="/lab-myAccount">
        My Account
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavDentistRoot'
}
</script>
