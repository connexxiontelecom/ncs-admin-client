
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
    async getCellBlocks() {
      await this.$store.dispatch('getCellBlocks')
        .then(response => {
          localStorage.setItem('cellBlocks', JSON.stringify(response.data.message))
          this.$store.commit('initCellBlockData', { cellBlocks: response.data.message })
        })
        .catch(error => {
          this.launchToast('Loading Cell Blocks Failure', error.response.data.message, 'warning')
        })
    },
    async getCells() {
      await this.$store.dispatch('getCells')
        .then(response => {
          localStorage.setItem('cells', JSON.stringify(response.data.message))
          this.$store.commit('initCellData', { cells: response.data.message })
        })
        .catch(error => {
          this.launchToast('Loading Cells Failure', error.response.data.message, 'warning')
        })
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
        if (this.$store.getters.getIsCenter) {
          this.getCellBlocks().then()
          this.getCells().then()
        }
      }
    }
  }
}
