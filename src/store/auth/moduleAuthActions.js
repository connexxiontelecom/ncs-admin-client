import axios from "@/axios";

export default {
  login ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let formData = new FormData()
      formData.append('username', payload.form.username)
      formData.append('password', payload.form.password)
      axios({url: 'login', data: formData, method: 'POST'})
        .then(response => {
          const token = response.data.token
          localStorage.setItem('accessToken', token)
          commit('SET_BEARER', token)
          commit('AUTH_SUCCESS', token)
          resolve(response)
        })
        .catch(error => {
          commit('AUTH_ERROR', error)
          localStorage.removeItem('token')
          reject(error)
        })
    })
  },

  logout ({ commit }) {
    return new Promise((resolve) => {
      commit('LOGOUT')
      localStorage.removeItem('accessToken')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  }
}
