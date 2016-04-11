import decode from 'jwt-decode'
import { createAction } from 'redux-actions'
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  REGISTER_USER_MODAL,
  REGISTER_USER_FAILURE,
} from '../constants/ActionTypes'
import { login, register } from '../util/api'

export const loginRequest = createAction(LOGIN_USER_REQUEST)
export const loginFail = createAction(LOGIN_USER_FAILURE)
export const logoutUser = createAction(LOGOUT_USER, () => localStorage.removeItem('token'))

export const loginSuccess = createAction(LOGIN_USER_SUCCESS, payload => payload)
export const showRegisterModal = createAction(REGISTER_USER_MODAL, () => true)
export const hideRegisterModal = createAction(REGISTER_USER_MODAL, () => false)
export const registerFail = createAction(REGISTER_USER_FAILURE)

export const loginUser = function(username, password) {
  return function(dispatch) {
    if (username.trim() === '' || password.trim() === '') {
      return
    }

    dispatch(loginRequest())

    login(username, password).then(resp => {
      if (resp.token) { // Login successful
        return dispatch(loginSuccess(decode(resp.token)))
      }
    }, err => {
      alert(err)

      return dispatch(loginFail())
    })
  }
}

export const registerUser = function(username, password) {
  return function(dispatch) {
    if (username.trim() === '' || password.trim() === '') {
      return
    }

    register(username, password).then(resp => {
      if (resp.token) {
        return dispatch(loginSuccess(decode(resp.token)))
      }
    }, err => {
      alert(err)

      return dispatch(registerFail())
    })
  }
}

export const actions = { loginUser, logoutUser, registerUser, showRegisterModal, hideRegisterModal }
