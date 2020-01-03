import Vue from 'vue'
import {INCREMENT} from './mutations.types' // use constant

// the function must be synchronize
const mutations = { // only here you can change state in template by committing
  [INCREMENT] (state) { // use constant to avoid error
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
    state.info.name = 'shuang' // this operation is resopnsice
    state.info['beautiful'] = true // not responsive, the view class will not change
    // but if use both operations, the view class will still change
    Vue.set(state.info, 'address', 'chengdu') // responsive operation add
    delete state.info.age // no responsive
    Vue.delete(state.info, 'age') // responsive operation
  },
  async_operation (state) { // async operation must do here
    state.aync_data = 'bangbang'
  }
}
export default mutations
