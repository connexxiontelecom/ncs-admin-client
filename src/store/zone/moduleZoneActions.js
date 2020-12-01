import axios from "@/axios";

export default {
  // eslint-disable-next-line no-unused-vars
  createZonalCommand ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let formData = new FormData()
      formData.append('zone_name', payload.newZoneForm.zoneName)
      axios({url: 'zone/new_zone', data: formData, method: 'POST'})
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
