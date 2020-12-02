import axios from "@/axios";
import helpers from "@/store/helpers";

const actions = {
  // auth actions
  login ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let formData = helpers.getLoginForm(payload.form)
      axios({url: 'login', data: formData, method: 'POST'})
        .then(response => {
          const accessToken = response.data.token
          commit('setBearer', { accessToken })

          resolve(response)
        })
        .catch(error => {
          commit('clearSession')
          commit('clearBearer')
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
      let formData = helpers.getZonalForm(payload.newStateForm)
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
  }

}

export default actions
