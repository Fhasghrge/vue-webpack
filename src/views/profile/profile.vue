<template>
  <div>
    Profile
    <div>{{message}}</div>
    <div>{{$store.state.counter}}</div>
    <button @click="counter_add">PLUS</button>
    <button @click="counter_minus">MINUS</button>
    <button @click="add_count(5)">PLUS FIVE</button>
    <button @click="add_count_plus(10)">PLUS TEN</button>
    <vuexdemo :counter = "counter"></vuexdemo>
    <h4 style="color: blue">I am Vuex getter demo</h4>
    <div>{{$store.getters.power_counter}}</div>
    <div>{{$store.getters.more20stu}}</div>
    <div>The students' numbers is {{$store.getters.more20length}}</div>
    <div>++++++++++++++++++++++++++++++</div>
    <div>{{$store.getters.more_target_stu(19).length}}</div>
    <h4 style="color: red">+++++Responsive State+++++</h4>
    <div>{{$store.state.info}}</div>
    <button @click="res_change_demo">Change Demo(responsice)</button>\
    <h4 style="color: red">++ Async Operation ++</h4>
    <div>{{this.$store.state.aync_data}}</div>
    <button @click="async_operation">Async Operation</button>
    <h4 style="color: red">++ Modules State ++</h4>
    <div>{{$store.state.a.name}}</div>
    <!-- use modules' data the operations is same as normal ly-->
    <div>{{$store.getters.fullname}}</div>
    <div>{{$store.getters.fullname2}}</div>
    <div>{{$store.getters.fullname3}}</div>
    <button @click="chang_module">Change Module</button>
    <p style="height: 50px"></p>
  </div>
</template>
<script>
import {
  INCREMENT
} from '../../store/mutations.types'
import vuexdemo from 'components/vuexdemo'
export default {
  name: 'profile',
  data () {
    return {
      message: '-----------  I am Vuex Demo  -----------',
      counter: 0
    }
  },
  components: {
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
    },
    async_operation () { // dispatch to action for async you can also use payload
      this.$store.dispatch('async_operation', 'Complete the async operation').then(res => {
        console.log(res) // promise return here\
        // do more things for attentions
      })
    },
    chang_module () {
      this.$store.commit('chang_module', ' BaBaBa')
    }
  }
}
</script>
<style scoped>

</style>
