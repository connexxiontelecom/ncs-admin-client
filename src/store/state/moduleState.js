import state from './moduleStateState'
import mutations from './moduleStateMutations'
import actions from './moduleStateActions'
import getters from './moduleStateGetters'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
