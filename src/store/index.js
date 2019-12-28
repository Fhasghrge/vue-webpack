import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutations.types' // use constant
// 1、安装插件
Vue.use(Vuex)

// 2、创建对象
const store = new Vuex.Store({
  state: { // here state will use responsive system
    counter: 1000,
    students: [
      {id: '1', name: 'shuang', age: 19},
      {id: '2', name: 'zhang', age: 18},
      {id: '3', name: 'shi', age: 20},
      {id: '4', name: 'liu', age: 21}
    ],
    info: {
      name: 'shuai',
      age: 32,
      height: 1.99
    }
  },
  mutations: { // only here you can change state in template by committing
    [INCREMENT] (state) {
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
    },
    res_change_demo (state) {
      state.info.name = 'shuang' // the operation is resopnsice
      state.info['beautiful'] = true // not responsive, the view class will not change
      // but if use both operations, the view class will change
      Vue.set(state.info, 'address', 'chengdu') // responsive operation add
      delete state.info.age // no responsive
      Vue.delete(state.info, 'age') // responsive operation
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
