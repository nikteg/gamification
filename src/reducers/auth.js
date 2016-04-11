import { handleActions } from 'redux-actions'
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  REGISTER_USER_MODAL,
  REGISTER_USER_FAILURE,
} from '../constants/ActionTypes'

export default handleActions({
  [LOGIN_USER_REQUEST]: (state, { payload }) => {
    return Object.assign({}, state, {
      isAuthenticating: true,
      statusText: null,
    })
  },
  [LOGIN_USER_SUCCESS]: (state, { payload }) => {
    const { username } = payload // id, iat, exp is also in the payload

    return Object.assign({}, state, {
      isAuthenticating: false,
      isAuthenticated: true,
      username: username,
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
  [LOGOUT_USER]: (state, { payload }) => {
    return Object.assign({}, state, {
      isAuthenticating: false,
      isAuthenticated: false,
      username: null,
      statusText: 'Logged out!',
    })
  },
  [REGISTER_USER_MODAL]: (state, { payload }) => {
    return Object.assign({}, state, {
      registerModal: payload,
      registerError: false,
    })
  },
  [REGISTER_USER_FAILURE]: (state, { payload }) => {
    return Object.assign({}, state, {
      registerModal: true,
      registerError: true,
    })
  },
}, {
  isAuthenticating: false,
  isAuthenticated: false,
  username: null,
  statusText: null,
  registerModal: false,
  registerError: false,
})
