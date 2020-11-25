import axios from "@/axios";

export default {
  INIT_SESSION (state, userdata) {
    state.user = userdata
  },

  SET_BEARER (state, accessToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  },

  AUTH_SUCCESS (state, token) {
    state.status = 'success'
    state.token = token
  },

  AUTH_ERROR (state) {
    state.status = 'failure'
  },

  LOGOUT (state) {
    state.status = ''
    state.token = ''
  }
}
