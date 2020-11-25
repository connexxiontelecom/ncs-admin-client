export default {
  isLoggedIn: state => !!state.token,

  authStatus: state => state.status,

  currentUser: state => state.user
}
