<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="login">
      <button type="submit">Login</button>
    </form>

    <h2>state: {{this.$store.state.counter.counter}}</h2>
    <h2>getters: {{this.getCounter}}</h2>
    <button @click.prevent="$store.commit('counter/increment')" >{{this.getCounter}}+1</button>
    <button @click.prevent="$store.commit('counter/transfusion', 15)" >>15<</button>
  </div>
</template>

<script>

  import {mapGetters} from 'vuex'

  export default {
    
    // layout: 'login',

    async fetch({store}) {
      await store.dispatch('counter/fetchCounter');
    },

    computed: {
      ...mapGetters({
        getCounter: 'counter/getCounter'
      }),
    },

    methods: {
      onSubmit() {
        this.$store.dispatch('login/login')
        this.$router.push('/')
        console.log(this.$store.getters["login/hasToken"])
      }
    },

  }
</script>