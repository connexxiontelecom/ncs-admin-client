import axios from "@/axios";

export default {
  // eslint-disable-next-line no-unused-vars
  createStateCommands ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let formData = new FormData()
      formData.append('state_name', payload.newStateForm.stateName)
      formData.append('state_zone_id', payload.newStateForm.stateZoneSelected)
      axios({url: 'state/new_state', data: formData, method: 'POST'})
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })

  }
}
