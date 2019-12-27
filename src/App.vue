<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    <div>{{message}}</div>
    <div>{{$store.state.counter}}</div>
    <button @click="counter_add">PLUS</button>
    <button @click="counter_minus">MINUS</button>
    <vuexdemo :counter = "counter"></vuexdemo>
  </div>
</template>

<script>
import mainTabBar from 'components/tabbaritem/mainTabBar'
import vuexdemo from 'components/vuexdemo'
export default {
  name: 'App',
  data () {
    return {
      message: '-----------  I am Vuex Demo  -----------',
      counter: 0
    }
  },
  components: {
    mainTabBar,
    vuexdemo
  },
  methods: {
    counter_add () {
      this.$store.commit('increasement')
    },
    counter_minus () {
      this.$store.commit('decreasement')
    }
  }
}
</script>
<style>

</style>
