/*
 * VueX - State Management
 */

import Vue from 'vue'
import Vuex from 'vuex'
// import VueJWT from 'vuejs-jwt'

import state from "@/store/state";
import getters from "@/store/getters";
import mutations from "@/store/mutations";

// store modules
import moduleAuth from "./auth/moduleAuth";
import moduleInmate from "./inmate/moduleInmate";
import moduleZone from './zone/moduleZone';
import moduleState from './state/moduleState';

// Register Vuex
Vue.use(Vuex)



// Vuex Store
export default new Vuex.Store({
  state,
  mutations,
  getters,
  // actions,
  modules: {
    auth: moduleAuth,
    inmate: moduleInmate,
    zone: moduleZone,
    states: moduleState
  }
})
