import axios from "@/axios";
import helpers from "@/store/helpers";

const actions = {
  // auth actions
  // eslint-disable-next-line no-unused-vars
  login ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let formData = helpers.getLoginForm(payload.form)
      axios({url: 'login', data: formData, method: 'POST'})
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  logout ({ commit }) {
    return new Promise(resolve => {
      commit('clearSession')
      commit('clearBearer')
      resolve()
    })
  },
  // eslint-disable-next-line no-unused-vars
  createZonalCommand ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let formData = helpers.getZonalForm(payload.newZoneForm)
      axios({url: 'zone/new_zone', data: formData, method: 'POST'})
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  getZonalCommands ({ commit }) {
    return new Promise((resolve, reject) => {
      axios({url: 'zone/all_zones', method: 'GET'})
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          console.log(error.response)
          reject(error)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  createStateCommands ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let formData = helpers.getStatesForm(payload.newStateForm)
      axios({url: 'state/new_state', data: formData, method: 'POST'})
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  getStateCommands ({ commit }) {
    return new Promise((resolve, reject) => {
      axios({url: 'state/all_states', method: 'GET'})
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  createCustodialCenterType ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let formData = helpers.getCCTypeForm(payload.newCenterTypeForm)
      axios({url: 'new_cc_type', data: formData, method: 'POST'})
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  getCustodialCenterTypes ({ commit }) {
    return new Promise((resolve, reject) => {
      axios({url: 'all_cc_types', method: 'GET'})
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  createCustodialCenter ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let formData = helpers.getCenterForm(payload.newCenterForm)
      axios({url: 'centre/new_centre', data: formData, method: 'POST'})
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  getCustodialCenters ({ commit }) {
    return new Promise((resolve, reject) => {
      axios({url: 'centre/all_centres', method: 'GET'})
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  enrollInmate ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let formData = helpers.getEnrollmentForm(payload.enrollmentForm)
      axios({url: 'inmate/new_inmate', data: formData, method: 'POST'})
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  createCellBlock ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let formData = helpers.getCellBlockForm(payload.newCellBlockForm)
      axios({url: 'new_cell_block', data: formData, method: 'POST'})
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  getCellBlocks ({ commit }) {
    return new Promise((resolve, reject) => {
      axios({url: 'all_cell_blocks', method: 'GET'})
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  createCell ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let formData = helpers.getCellForm(payload.newCellForm)
      axios({url: 'cell/new_cell', data: formData, method: 'POST'})
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  getCells ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios({url: 'cell/all_cc_cell', method: 'GET'})
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default actions
