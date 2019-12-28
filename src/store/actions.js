const actions = { // function for asynchronize to subsiitute mutations
  // async_operation (context, payload) {
  //   setTimeout(() => {
  //     context.commit('async_operation') // here is not allowed to change state
  //     payload()
  //   }, 1000)
  // }
  async_operation (context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('async_operation') // here is not allowed to change state
        resolve(payload)
      }, 1000)
    })
  }
}
export default actions
