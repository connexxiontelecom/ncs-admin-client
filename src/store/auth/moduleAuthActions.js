import axios from "@/axios";

export default {
  login ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios({url: 'login', data: payload.formData, method: 'POST'})
        .then(response => {
          const token = response.data.token
          localStorage.setItem('accessToken', token)
          // console.log(this.$jwt.hasToken())
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
