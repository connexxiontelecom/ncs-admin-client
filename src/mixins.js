
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
    async getZoneDetails() {
      this.$store.dispatch('getZoneDetails', { zoneID: this.$store.getters.getZoneIDParam })
      .then(response => {
        localStorage.setItem('stateZoneDetails', JSON.stringify(response.data.message.states))
        localStorage.setItem('centerZoneDetails', JSON.stringify(response.data.message.cc))
        this.$store.commit('initZoneDetails', { states: response.data.message.states, centers: response.data.message.cc })
      })
      .catch(error => {
        this.launchToast('Loading Zone Details Failure', error.response.data.message, 'warning')
      })
    },
    async getStateDetails() {
      this.$store.dispatch('getStateDetails', { stateID: this.$store.getters.getStateIDParam })
        .then(response => {
          localStorage.setItem('centerStateDetails', JSON.stringify((response.data.message.centres)))
          this.$store.commit('initStateDetails', { centers: response.data.message.centres })
        })
        .catch(error => {
          this.launchToast('Loading State Details Failure', error.response.data.message, 'warning')
        })
    },
    async getCenterDetails() {
      this.$store.dispatch('getCenterDetails', { centerID: this.$store.getters.getCenterIDParam })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.launchToast('Loading Center Details Failure', error.response.data.message, 'warning')
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
    },
    setupDetailsPage() {
      if (localStorage.getItem('zoneIDRouteParams')) {
        let zoneID = localStorage.getItem('zoneIDRouteParams')
        let zoneName = localStorage.getItem('zoneNameRouteParams')
        this.$store.commit('setZoneRouteParam', { zoneID, zoneName })
        this.getZoneDetails().then()
      }
      if (localStorage.getItem('stateIDRouteParams')) {
        let stateID = localStorage.getItem('stateIDRouteParams')
        let stateName = localStorage.getItem('stateNameRouteParams')
        this.$store.commit('setStateRouteParam', { stateID, stateName })
        this.getStateDetails().then()
      }
      if (localStorage.getItem('centerIDRouteParams')) {
        let centerID = localStorage.getItem('centerIDRouteParams')
        let centerName = localStorage.getItem('centerNameRouteParams')
        this.$store.commit('setCenterRouteParam', { centerID, centerName })
        this.getCenterDetails().then()
      }
    }
  }
}
