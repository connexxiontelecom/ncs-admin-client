/*
 * VueX - State Management
 */

import Vue from 'vue'
import Vuex from 'vuex'

import state from "@/store/state";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
// import actions from "@/store/actions";

// Register Vuex
Vue.use(Vuex)

// Vuex Store
export default new Vuex.Store({
  getters,
  mutations,
  state,
  // actions,
  modules: {}
})
