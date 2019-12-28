import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
// import Vuex from 'vuex'

Vue.config.productionTip = false
// Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 挂载对象 so all components can use it by '$'
  render: h => h(App)
})
// require('./assets/css/base.css')
