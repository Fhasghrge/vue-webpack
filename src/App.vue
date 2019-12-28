<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    <div>{{message}}</div>
    <div>{{$store.state.counter}}</div>
    <button @click="counter_add">PLUS</button>
    <button @click="counter_minus">MINUS</button>
    <button @click="add_count(5)">PLUS FIVE</button>
    <button @click="add_count_plus(10)">PLUS TEN</button>
    <vuexdemo :counter = "counter"></vuexdemo>
    <h2 style="color: blue">I am Vuex getter demo</h2>
    <div>{{$store.getters.power_counter}}</div>
    <div>{{$store.getters.more20stu}}</div>
    <div>The students' numbers is {{$store.getters.more20length}}</div>
    <div>++++++++++++++++++++++++++++++</div>
    <div>{{$store.getters.more_target_stu(19)}}</div>
    <h2 style="color: red">+++++Responsive State+++++</h2>
    <div>{{$store.state.info}}</div>
    <button @click="res_change_demo">Change Demo(responsice)</button>
  </div>
</template>

<script>
import mainTabBar from 'components/tabbaritem/mainTabBar'
import vuexdemo from 'components/vuexdemo'
import {
  INCREMENT
} from './store/mutations.types'
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
      this.$store.commit(INCREMENT) // use commit to connect $store only here
    },
    counter_minus () {
      this.$store.commit('decreasement')
    },
    add_count (num) {
      this.$store.commit('increasement_count', num) // para transfer to store's mutation for change
    },
    add_count_plus (num) {
      this.$store.commit({
        type: 'increasement_count_plus',
        num
      }) // payload transfer to store's mutation for change
    },
    res_change_demo () {
      this.$store.commit('res_change_demo')
    }
  }
}
</script>
<style>

</style>
