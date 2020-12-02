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
  }
}

export default getters
