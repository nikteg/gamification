import { createAction } from 'redux-actions'
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER } from '../constants/ActionTypes'

export const loginRequest = createAction(LOGIN_USER_REQUEST)
export const loginSuccess = createAction(LOGIN_USER_SUCCESS, token => token)

export const loginUser = function(username, password) {
  return function(dispatch) {
    dispatch(loginRequest())
    dispatch(loginSuccess('supertoken'))
  }
}

export const actions = { loginUser }
