import axios from 'axios'
// export function request (configure, success, failure) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   instance(configure).then(res => {
//     success(res)
//   }).catch(error => {
//     failure(error)
//   })
// }

// promise method
// export function request (configure) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     instance(configure).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }

// simple promise
export function request (configure) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // axios 拦截器
  // request success and failure
  instance.interceptors.request.use(suc => {
    // add some solid settings to the server
    // transfer some setting to specified form
    // once request, present the icon animation
    // add some login messages(token), or suggest to login in
    console.log(suc)
    return suc // 拦截之后要放行， 否则到达不了服务器
  }, fail => { // when your internet don't work
    console.log(fail)
  })

  // when the data transfer to web from server
  instance.interceptors.response.use(res => {
    console.log(res.data)
    return res.data // release after handle the repsonse data
  }, err => {
    console.log(err)
  })
  return instance(configure) // default return promise
}
