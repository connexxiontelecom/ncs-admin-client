import helpers from "@/store/helpers";

const state = {
  // App vital details
  app: {
    name: 'NCS Admin',
    version: process.env.PACKAGE_VERSION,
    copyright: helpers.getCurrentYear()
  },

  // Session Details
  session: {
    user: {},
    isHQ: false,
    isZone: false,
    isState: false,
    isCenter: false,
  },

  routeParams :{
    zoneID: null,
    stateID: null

  },

  // data details
  data: {
    zones: [],
    states: [],
    ccTypes: [],
    centers: [],
    cellBlocks: [],
    cells: [],

    numZones: 0,
    numStates: 0,
    numCCTypes: 0,
    numCenters: 0,
    numCellBlocks: 0,
    numCells: 0
  },

  // Default layout options
  layout: {
    header: true,
    sidebar: true,
    sideOverlay: true,
    footer: true
  },
  // Default template settings
  // Various of them are also set in each layout variation under layouts/variations/ folder
  settings: {
    colorTheme: 'city', // 'amethyst', 'city', 'flat', 'modern', 'smooth'
    sidebarLeft: true,
    sidebarMini: false,
    sidebarDark: true,
    sidebarVisibleDesktop: true,
    sidebarVisibleMobile: false,
    sideOverlayVisible: false,
    sideOverlayHoverable: false,
    pageOverlay: true,
    headerFixed: true,
    headerDark: false,
    headerSearch: false,
    headerLoader: false,
    pageLoader: false,
    rtlSupport: false,
    sideTransitions: true,
    mainContent: '', // 'boxed', ''narrow'
    isAuthenticated: false
  }
}

export default state
