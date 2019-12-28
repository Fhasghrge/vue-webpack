const getters = {
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
}
export default getters
