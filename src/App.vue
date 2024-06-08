<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/user-profile">Profile</router-link>
      <router-link to="/organizations">Organizations</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
}
</style>