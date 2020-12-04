import store from "@/store";
import starter from "@/router/starter";


export default {
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
    async getCenters() {
      await this.$store.dispatch('getCustodialCenters')
        .then(response => {
          localStorage.setItem('centers', JSON.stringify(response.data.message))
          this.$store.commit('initCentersData', { centers: response.data.message })
        })
        .catch(error => {
          this.launchToast('Loading Centers Failure', error.response.data.message, 'warning')
        })
    },
    handleFailedAuth() {
      // if token has an issue the app gracefully exits
      this.$http.interceptors.response.use(undefined, function (err) {
        return new Promise(function () {
          if (err.response.data.message === 'Unauthorized Access' || err.response.data.message === 'Access Denied') {
            store.dispatch('logout')
            starter.push('/auth/signin')
          }
          // if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          //   this.$store.dispatch('auth/logout')
          // }
          throw err
        })
      })
    },
    handleStorageAlteration() {
      // if local storage is altered, app gracefully exits
      window.addEventListener("storage", function () {
        store.dispatch('logout')
        starter.push('/auth/signin')
      }, false);
    },
    setupData() {
      // load all our data from api
      if (localStorage.getItem('accessToken')) {
        if (this.$store.getters.getIsHQ) {
          this.getZones().then()
          this.getStates().then()
          this.getCCTypes().then()
          this.getCenters().then()
        }
      }
    }
  }
}
