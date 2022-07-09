<template>
  <nav>
    <NuxtLink exact no-prefetch active-class="active" to="/">Home</NuxtLink>
    <NuxtLink exact no-prefetch active-class="active" to="/about">About</NuxtLink>
    <NuxtLink exact no-prefetch active-class="active" to="/users/">Users</NuxtLink>
    <a href="#" no-prefetch @click.prevent="logout">Logout</a>
  </nav>
</template>

<style>
  .active {
    font-weight: 600;
    color: #000;
  }
</style>

<script>
  export default {

    methods: {
      logout() {
        this.$store.dispatch('login/logout')
        this.$router.push('/login')
      }
    },

  }
</script>