/*
 * VueX - State Management
 */

import Vue from 'vue'
import Vuex from 'vuex'
import VueJWT from 'vuejs-jwt'

import state from "@/store/state";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
// import actions from "@/store/actions";

// Register Vuex
Vue.use(Vuex)
Vue.use(VueJWT)

// Vuex Store
export default new Vuex.Store({
  getters,
  mutations,
  state,
  // actions,
  modules: {}
})
