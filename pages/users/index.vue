<template>
  <div>
    <ul>
      <li v-for="user of 5" :key="user" >
        <a href="#" @click.prevent="openUser(user)">{{user}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      openUser(user) {
        this.$router.push('/users/' + user)
      }
    }
  }
</script>