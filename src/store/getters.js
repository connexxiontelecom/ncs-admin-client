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
  // Get authenticated state
  isAuthenticated: (state) => {
    return state.settings.isAuthenticated
  }
}

export default getters
