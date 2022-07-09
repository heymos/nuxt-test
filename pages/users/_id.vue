<template>
  <div>
    <h1>User {{$route.params.id}}</h1>
  </div>
</template>

<script>
  export default {
    validate ({params}) {
      return /[1-5]/.test(params.id)
    }
  }
</script>