const helpers = {
  getWindowWidth () {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  },
  getCurrentYear () {
    return new Date().getFullYear()
  },
  getLoginForm(form) {
    let formData = new FormData()
    formData.append('username', form.username)
    formData.append('password', form.password)
    return formData
  },
  getZonalForm(form) {
    let formData = new FormData()
    formData.append('zone_name', form.zoneName)
    return formData
  },
  getStatesForm(form) {
    let formData = new FormData()
    formData.append('state_name', form.stateName)
    formData.append('state_zone_id', form.stateZoneSelected)
    return formData
  },
  getCCTypeForm(form) {
    let formData = new FormData()
    formData.append('cc_type_name', form.centerTypeName)
    return formData
  }
}

export default helpers
