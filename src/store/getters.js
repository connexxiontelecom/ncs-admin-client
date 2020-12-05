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
  // get session isZone
  getIsZone: (state) => {
    return state.session.isZone
  },
  // get session isState
  getIsState: (state) => {
    return state.session.isState
  },
  // get session isCenter
  getIsCenter: (state) => {
    return state.session.isCenter
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


  getZoneParams: (state)=>{
    return state.routeParams.zoneID
  },

  getStateParams: (state)=>{
    return state.routeParams.stateID
  },

  // get cell blocks
  getCellBlocks: (state) => {
    return state.data.cellBlocks
  },
  // get num cell blocks
  getNumCellBlocks: (state) => {
    return state.data.numCellBlocks
  },
  // get cells
  getCells: (state) => {
    return state.data.cells
  },
  // get num cells
  getNumCells: (state) => {
    return state.data.numCells
  }

}

export default getters
