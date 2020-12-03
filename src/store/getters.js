const getters = {
  // Get App name
  appName: (state) => {
    return state.app.name
  },
  // Get App version
  appVersion: (state) => {
    return state.app.version
  },
  // Get App copyright year
  appCopyright: (state) => {
    return state.app.copyright
  },
  // Get app color theme
  appColorTheme: (state) => {
    return state.settings.colorTheme
  },
  // Get session user
  getUser: (state) => {
    return state.session.user
  },
  // get session isHQ
  getIsHQ: (state) => {
    return state.session.isHQ
  },
  // get Zones
  getZones: (state) => {
    return state.data.zones
  },
  // get states
  getStates: (state) => {
    return state.data.states
  },
  // get numZones
  getNumZones: (state) => {
    return state.data.numZones
  },
  // get numStates
  getNumStates: (state) => {
    return state.data.numStates
  },
  // get cc types
  getCCTypes: (state) => {
    return state.data.ccTypes
  },
  // get num cc
  getNumCCTypes: (state) => {
    return state.data.numCCTypes
  },
  // get centers
  getCenters: (state) => {
    return state.data.centers
  },
  // get num centers
  getNumCenters: (state) => {
    return state.data.numCenters
  },
}

export default getters
