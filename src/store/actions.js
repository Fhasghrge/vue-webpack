const actions = { // function for asynchronize to subsiitute mutations
  // async_operation (context, payload) {
  //   setTimeout(() => {
  //     context.commit('async_operation') // here is not allowed to change state
  //     payload()
  //   }, 1000)
  // }
  async_operation (context, payload) {
    return new Promise((resolve, reject) => { // the advantage of promise is you can use callback function easily
      setTimeout(() => {
        context.commit('async_operation') // here is not allowed to change state
        resolve(payload)
      }, 1000)
    })
  }
}
export default actions
