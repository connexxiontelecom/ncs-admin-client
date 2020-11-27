import state from './moduleInmateState'
import mutations from './moduleInmateMutations'
import actions from './moduleInmateActions'
import getters from './moduleInmateGetters'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
