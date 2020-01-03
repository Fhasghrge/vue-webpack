<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <h1 style="color: orange">{{this.counter}}</h1>
  </div>
</template>
<script>
export default {
  name: 'vuexdemo',
  props: {
    counter: Number
  }
}
</script>
<style scoped>

</style>
