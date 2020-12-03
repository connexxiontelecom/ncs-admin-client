/*
 * Main file
 */

// Vue, Vue Router, App and Vuex store
import Vue from 'vue'

// import router from './router'
// You can use the following starter router instead of the default one as a clean starting point
import router from './router/starter'
// Vue JWT
import VueJWT from 'vuejs-jwt'

// Json Excel
import JsonExcel from "vue-json-excel";


import App from './App.vue'
import store from './store'

// Bootstrap Vue
import BootstrapVue from 'bootstrap-vue'
// Custom components
import BaseLayoutModifier from '@/components/BaseLayoutModifier'
import BaseBlock from '@/components/BaseBlock'
import BaseBackground from '@/components/BaseBackground'
import BasePageHeading from '@/components/BasePageHeading'
import BaseNavigation from '@/components/BaseNavigation'

// Custom directives
import clickRipple from '@/directives/clickRipple'
import toggleClass from '@/directives/toggleClass'

// Import axios
import axios from "@/axios"
Vue.prototype.$http = axios

// Register global plugins
Vue.use(BootstrapVue)

// Register global components
Vue.component(BaseLayoutModifier.name, BaseLayoutModifier)
Vue.component(BaseBlock.name, BaseBlock)
Vue.component(BaseBackground.name, BaseBackground)
Vue.component(BasePageHeading.name, BasePageHeading)
Vue.component(BaseNavigation.name, BaseNavigation)
Vue.component('downloadExcel', JsonExcel)

// Register global directives
Vue.directive('click-ripple', clickRipple)
Vue.directive('toggle-class', toggleClass)

// Register vue jwt
Vue.use(VueJWT)

Vue.mixin({
  methods: {
    launchToast (title, content, variant = null, append = false, toaster = 'b-toaster-top-right', autoHideDelay = 3000) {
      this.$bvToast.toast(content, {
        title: title,
        toaster: toaster,
        variant: variant,
        autoHideDelay: autoHideDelay,
        appendToast: append
      })
    },
    async getZones() {
      await this.$store.dispatch('getZonalCommands')
        .then(response => {
          localStorage.setItem('zones', JSON.stringify(response.data.message))
          this.$store.commit('initZonesData', { zones: response.data.message })
        })
        .catch(error => {
          this.launchToast('Loading Zonal Command Failure', error.response.data.message, 'warning')
        })
    },
    async getStates() {
      await this.$store.dispatch('getStateCommands')
        .then(response => {
          localStorage.setItem('states', JSON.stringify(response.data.message))
          this.$store.commit('initStatesData', { states: response.data.message })
        })
        .catch(error => {
          this.launchToast('Loading State Command Failure', error.response.data.message, 'warning')
        })
    },
    async getCCTypes() {
      await this.$store.dispatch('getCustodialCenterTypes')
        .then(response => {
          localStorage.setItem('ccTypes', JSON.stringify(response.data.message))
          this.$store.commit('initCCTypesData', { ccTypes: response.data.message })
        })
        .catch(error => {
          this.launchToast('Loading CC Types Failure', error.response.data.message, 'warning')
        })
    },
  }
})

// Disable tip shown in dev console when in development mode
Vue.config.productionTip = false

// Craft new application
new Vue({
  store,
  router,
  beforeCreate() {
    // get information if web app is reloaded
    if (localStorage.getItem('accessToken')) {
      let accessToken = localStorage.getItem('accessToken')
      let userData = this.$jwt.decode(accessToken).data
      this.$store.commit('setBearer', { accessToken })
      this.$store.commit('initSession', { userData, accessToken })
    }
  },
  created() {
    this.getZones().then()
    this.getStates().then()
    this.getCCTypes().then()
  },
  render: h => h(App)
}).$mount('#app')
