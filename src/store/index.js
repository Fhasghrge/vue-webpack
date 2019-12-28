import Vue from 'vue'
import Vuex from 'vuex'
// 1、安装插件
Vue.use(Vuex)

// 2、创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: '1', name: 'shuang', age: 19},
      {id: '2', name: 'zhang', age: 18},
      {id: '3', name: 'shi', age: 20},
      {id: '4', name: 'liu', age: 21}
    ]
  },
  mutations: { // only here you can change state in template by committing
    increasement (state) {
      state.counter++
    },
    decreasement (state) {
      state.counter--
    },
    increasement_count (state, num) { // get the para to change
      state.counter += num
    },
    increasement_count_plus (state, payload) { // get the payload to change
      state.counter += payload.num
    }
  },
  actions: {

  },
  getters: {
    power_counter (state) {
      return state.counter * state.counter
    },
    more20stu (state) {
      return state.students.filter(s => s.age >= 20)
    },
    more20length (state, getters) { // the first para is necessary
      return getters.more20stu.length
    },
    more_target_stu (state) {
      return target => { // here you can use parameters you want in template
        return state.students.filter(s => s.age >= target)
      }
    }
  },
  modules: {

  }
})
// 3、导出对象
export default store
