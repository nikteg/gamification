import { handleActions } from 'redux-actions'
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER } from '../constants/ActionTypes'

export default handleActions({
  [LOGIN_USER_REQUEST]: (state, { payload }) => {
    console.log("WAT")
    return Object.assign({}, state, {
      isAuthenticating: true,
      statusText: null,
    })
  },
  [LOGIN_USER_SUCCESS]: (state, { payload }) => {
    return Object.assign({}, state, {
      isAuthenticating: false,
      isAuthenticated: true,
      token: payload.token,
      username: 'testname',
      statusText: 'Logged in!',
    })
  },
  [LOGIN_USER_FAILURE]: (state, { payload }) => {
    return Object.assign({}, state, {
      isAuthenticating: false,
      isAuthenticated: false,
      statusText: 'Failed to login...',
    })
  },
}, {
  isAuthenticating: false,
  isAuthenticated: false,
  statusText: null,
})
