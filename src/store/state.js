import helpers from "@/store/helpers";

const state = {
// App vital details
  app: {
    name: 'NCS Admin',
    version: process.env.PACKAGE_VERSION,
    copyright: helpers.getCurrentYear()
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
