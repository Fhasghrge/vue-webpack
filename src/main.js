import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from 'axios'
import { request } from './network/request'
// import Vuex from 'vuex'
import {
  Button,
  Icon,
  Row,
  Col,
  Layout,
  Menu,
  Affix
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false

// Vue.use(Vuex)
/* eslint-disable no-new */
// Vue.component(Button.name, Button)
Vue.use(Button) // this is more compact
Vue.use(Icon) // use plugins but so ugly
Vue.use(Row)
Vue.use(Col)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Affix)
new Vue({
  el: '#app',
  router,
  store, // 挂载对象 so all components can use it by '$'
  render: h => h(App)
})
// require('./assets/css/base.css')
// global settings

// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
// axios({
//   url: '/home/multidata',
//   method: 'GET'
// }).then(res => {
//   console.log(res)
// })

// create axios instance for use the baseURL differently
const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000', // all example default use this
  timeout: 5000
})
instance1({
  url: '/home/multidata',
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res)
})

// const instance2 = axios.create({
//   baseURL: 'zhangshuang.online',
//   timeout: '5000'
// })
// instance2({
//   url: 'demo',
//   params: {
//     sss: 'dsfdf'
//   }
// }).then(res => {
//   console.log(res)
// })

// method1, not promise
// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
