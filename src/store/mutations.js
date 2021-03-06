import axios from "@/axios";
import helpers from "@/store/helpers";

const mutations = {

  // initialize app session
  initSession (state, payload) {
    delete payload.userData.user_password
    localStorage.setItem('accessToken', payload.accessToken)
    state.session.user = payload.userData
    switch (parseInt(state.session.user.user_type)){
      case 1:
        state.session.isHQ = true
        break;
      case 2:
        state.session.isZone = true
        break;
      case 3:
        state.session.isState = true
        break;
      case 4:
        state.session.isCenter = true
        break;
    }
  },

  // initialize app data
  initZonesData (state, payload) {
    state.data.zones = payload.zones
    state.data.numZones = payload.zones.length
  },
  initStatesData (state, payload) {
    state.data.states = payload.states
    state.data.numStates = payload.states.length
  },
  initCCTypesData (state, payload) {
    state.data.ccTypes = payload.ccTypes
    state.data.numCCTypes = payload.ccTypes.length
  },
  initCentersData (state, payload) {
    state.data.centers = payload.centers
    state.data.numCenters = payload.centers.length
  },
  initCellBlockData (state, payload) {
    state.data.cellBlocks = payload.cellBlocks
    state.data.numCellBlocks = payload.cellBlocks.length
  },
  initCellData (state, payload) {
    state.data.cells = payload.cells
    state.data.numCells = payload.cells.length
  },
  initZoneDetails (state, payload) {
    state.zoneDetails.states = payload.states
    state.zoneDetails.numStates = payload.states.length
    state.zoneDetails.centers = payload.centers
    state.zoneDetails.numCenters = payload.centers.length
  },
  initStateDetails (state, payload) {
    state.stateDetails.centers = payload.centers
    state.stateDetails.numCenters = payload.centers.length
  },
  initCenterDetails (state, payload) {
    state.centerDetails.cells = payload.cells
    state.centerDetails.numCells = payload.cells.length
    state.centerDetails.cellBlocks = payload.cellBlocks
    state.centerDetails.numCellBlocks = payload.cellBlocks.length
    state.centerDetails.inmates = payload.inmates
    state.centerDetails.numInmates = payload.inmates.length
  },
  initCellBlockDetails (state, payload) {
    state.cellBlockDetails.cells = payload.cells
    state.cellBlockDetails.numCells = payload.cells.length
  },
  // set route params for view details get requests
  setZoneRouteParam (state, payload) {
    state.routeParams.zoneID = payload.zoneID
    state.routeParams.zoneName = payload.zoneName
    localStorage.setItem('zoneIDRouteParams', payload.zoneID)
    localStorage.setItem('zoneNameRouteParams', payload.zoneName)
  },
  setStateRouteParam (state, payload) {
    state.routeParams.stateID = payload.stateID
    state.routeParams.stateName = payload.stateName
    localStorage.setItem('stateIDRouteParams', payload.stateID)
    localStorage.setItem('stateNameRouteParams', payload.stateName)
  },
  setCenterRouteParam (state, payload) {
    state.routeParams.centerID = payload.centerID
    state.routeParams.centerName = payload.centerName
    localStorage.setItem('centerIDRouteParams', payload.centerID)
    localStorage.setItem('centerNameRouteParams', payload.centerName)
  },
  setCellBlockRouteParam (state, payload) {
    state.routeParams.cellBlockID = payload.cellBlockID
    state.routeParams.cellBlockAlias = payload.cellBlockAlias
    localStorage.setItem('cellBlockIDRouteParams', payload.cellBlockID)
    localStorage.setItem('cellBlockAliasRouteParams', payload.cellBlockAlias)
  },
  // clear session
  clearSession (state) {
    state.session.user = {}
    state.session.isHQ = false
    state.session.isZone = false
    state.session.isState = false
    state.session.isCenter = false
  },
  // clear data
  clearData (state) {
    state.data.zones = []
    state.data.states = []
    state.data.ccTypes = []
    state.data.centers = []
    state.data.cellBlocks = []
    state.data.cells = []
    state.data.numZones = 0
    state.data.numStates = 0
    state.data.numCCTypes = 0
    state.data.numCenters = 0
    state.data.numCellBlocks = 0
    state.data.numCells = 0
    // clear storage
    localStorage.removeItem('zones')
    localStorage.removeItem('states')
    localStorage.removeItem('ccTypes')
    localStorage.removeItem('centers')
    localStorage.removeItem('cellBlocks')
    localStorage.removeItem('cells')
    localStorage.removeItem('zoneIDRouteParams')
    localStorage.removeItem('zoneNameRouteParams')
    localStorage.removeItem('centerZoneDetails')
    localStorage.removeItem('stateZoneDetails')
    localStorage.removeItem('stateIDRouteParams')
    localStorage.removeItem('stateNameRouteParams')
    localStorage.removeItem('centerStateDetails')
    localStorage.removeItem('centerIDRouteParams')
    localStorage.removeItem('centerNameRouteParams')
    localStorage.removeItem('cellCenterDetails')
    localStorage.removeItem('cellBlocksCenterDetails')
    localStorage.removeItem('inmateCenterDetails')
    localStorage.removeItem('cellBlockIDRouteParams')
    localStorage.removeItem('cellBlockAliasRouteParams')
    localStorage.removeItem('cellCellBlockDetails')
    localStorage.removeItem('accessToken')

  },
  // set authentication header
  setBearer (state, payload) {
    axios.defaults.headers.common['HTTP_AUTHORIZATION'] = `Bearer ${payload.accessToken}`
  },
  // clear authentication header
  clearBearer () {
    delete axios.defaults.headers.common['HTTP_AUTHORIZATION']
  },
  // Sets the layout, useful for setting different layouts (under layouts/variations/)
  setLayout (state, payload) {
    state.layout.header = payload.header
    state.layout.sidebar = payload.sidebar
    state.layout.sideOverlay = payload.sideOverlay
    state.layout.footer = payload.footer
  },
  // Sets sidebar visibility (open, close, toggle)
  sidebar (state, payload) {
    if (helpers.getWindowWidth() > 991) {
      if (payload.mode === 'open') {
        state.settings.sidebarVisibleDesktop = true
      } else if (payload.mode === 'close') {
        state.settings.sidebarVisibleDesktop = false
      } else if (payload.mode === 'toggle') {
        state.settings.sidebarVisibleDesktop = !state.settings.sidebarVisibleDesktop
      }
    } else {
      if (payload.mode === 'open') {
        state.settings.sidebarVisibleMobile = true
      } else if (payload.mode === 'close') {
        state.settings.sidebarVisibleMobile = false
      } else if (payload.mode === 'toggle') {
        state.settings.sidebarVisibleMobile = !state.settings.sidebarVisibleMobile
      }
    }
  },
  // Sets sidebar mini mode (on, off, toggle)
  sidebarMini (state, payload) {
    if (helpers.getWindowWidth() > 991) {
      if (payload.mode === 'on') {
        state.settings.sidebarMini = true
      } else if (payload.mode === 'off') {
        state.settings.sidebarMini = false
      } else if (payload.mode === 'toggle') {
        state.settings.sidebarMini = !state.settings.sidebarMini
      }
    }
  },
  // Sets sidebar position (left, right, toggle)
  sidebarPosition (state, payload) {
    if (payload.mode === 'left') {
      state.settings.sidebarLeft = true
    } else if (payload.mode === 'right') {
      state.settings.sidebarLeft = false
    } else if (payload.mode === 'toggle') {
      state.settings.sidebarLeft = !state.settings.sidebarLeft
    }
  },
  // Sets sidebar style (dark, light, toggle)
  sidebarStyle (state, payload) {
    if (payload.mode === 'dark') {
      state.settings.sidebarDark = true
    } else if (payload.mode === 'light') {
      state.settings.sidebarDark = false
    } else if (payload.mode === 'toggle') {
      state.settings.sidebarDark = !state.settings.sidebarDark
    }
  },
  // Sets side overlay visibility (open, close, toggle)
  sideOverlay (state, payload) {
    if (payload.mode === 'open') {
      state.settings.sideOverlayVisible = true
    } else if (payload.mode === 'close') {
      state.settings.sideOverlayVisible = false
    } else if (payload.mode === 'toggle') {
      state.settings.sideOverlayVisible = !state.settings.sideOverlayVisible
    }
  },
  // Sets side overlay hover mode (on, off, toggle)
  sideOverlayHover (state, payload) {
    if (payload.mode === 'on') {
      state.settings.sideOverlayHoverable = true
    } else if (payload.mode === 'off') {
      state.settings.sideOverlayHoverable = false
    } else if (payload.mode === 'toggle') {
      state.settings.sideOverlayHoverable = !state.settings.sideOverlayHoverable
    }
  },
  // Sets page overlay visibility (on, off, toggle)
  pageOverlay (state, payload) {
    if (payload.mode === 'on') {
      state.settings.pageOverlay = true
    } else if (payload.mode === 'off') {
      state.settings.pageOverlay = false
    } else if (payload.mode === 'toggle') {
      state.settings.pageOverlay = !state.settings.pageOverlay
    }
  },
  // Sets header mode (fixed, static, toggle)
  header (state, payload) {
    if (payload.mode === 'fixed') {
      state.settings.headerFixed = true
    } else if (payload.mode === 'static') {
      state.settings.headerFixed = false
    } else if (payload.mode === 'toggle') {
      state.settings.headerFixed = !state.settings.headerFixed
    }
  },
  // Sets header style (dark, light, toggle)
  headerStyle (state, payload) {
    if (payload.mode === 'dark') {
      state.settings.headerDark = true
    } else if (payload.mode === 'light') {
      state.settings.headerDark = false
    } else if (payload.mode === 'toggle') {
      state.settings.headerDark = !state.settings.headerDark
    }
  },
  // Sets header search visibility (on, off, toggle)
  headerSearch (state, payload) {
    if (payload.mode === 'on') {
      state.settings.headerSearch = true
    } else if (payload.mode === 'off') {
      state.settings.headerSearch = false
    } else if (payload.mode === 'toggle') {
      state.settings.headerSearch = !state.settings.headerSearch
    }
  },
  // Sets header loader visibility (on, off, toggle)
  headerLoader (state, payload) {
    if (payload.mode === 'on') {
      state.settings.headerLoader = true
    } else if (payload.mode === 'off') {
      state.settings.headerLoader = false
    } else if (payload.mode === 'toggle') {
      state.settings.headerLoader = !state.settings.headerLoader
    }
  },
  // Sets page loader visibility (on, off, toggle)
  pageLoader (state, payload) {
    if (payload.mode === 'on') {
      state.settings.pageLoader = true
    } else if (payload.mode === 'off') {
      state.settings.pageLoader = false
    } else if (payload.mode === 'toggle') {
      state.settings.pageLoader = !state.settings.pageLoader
    }
  },
  // Sets main content mode (full, boxed, narrow)
  mainContent (state, payload) {
    if (payload.mode === 'full') {
      state.settings.mainContent = ''
    } else if (payload.mode === 'boxed') {
      state.settings.mainContent = 'boxed'
    } else if (payload.mode === 'narrow') {
      state.settings.mainContent = 'narrow'
    }
  },
  // Sets active color theme
  setColorTheme (state, payload) {
    // Matches all classes which start with "theme-"
    let regx = new RegExp('\\btheme-[^ ]*[ ]?\\b', 'g')

    // Set new theme
    state.settings.colorTheme = payload.theme || ''

    // Remove all classes which start with "theme-" from body element
    document.body.className = document.body.className.replace(regx, '')

    // If theme is set, add the theme class to body element
    if (payload.theme) {
      document.body.classList.add('theme-' + payload.theme)
    }
  },
  // change authentication
  setAuthentication (state, payload) {
    if (payload.mode === 'login') {
      state.settings.isAuthenticated = true
    } else if (payload.mode === 'logout') {
      state.settings.isAuthenticated = false
    }
  }
}

export default mutations
