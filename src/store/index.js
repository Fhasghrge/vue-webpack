import Vue from 'vue'
import Vuex from 'vuex'

import module1 from './modules/module1'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 1、安装插件
Vue.use(Vuex)

// 2、创建对象
const state = { // here state will use responsive system
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
  },
  aync_data: 'shuang666'
}
const store = new Vuex.Store({
  state,
  // the function must be synchronize
  mutations,
  actions,
  getters,
  modules: { // more states for eaiser
    a: module1
  }
})
// 3、导出对象
export default store
