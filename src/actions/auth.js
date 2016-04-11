import { createAction } from 'redux-actions'
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER } from '../constants/ActionTypes'

export const loginRequest = createAction(LOGIN_USER_REQUEST)
export const loginFail = createAction(LOGIN_USER_FAILURE)
export const logoutUser = createAction(LOGOUT_USER, () => localStorage.removeItem('token'))

export const loginSuccess = createAction(LOGIN_USER_SUCCESS, payload => {
  localStorage.setItem('token', payload.token)

  return payload
})

export const loginUser = function(username, password) {
  return function(dispatch) {
    if (username.trim() === '' || password.trim() === '') {
      return
    }

    dispatch(loginRequest())

    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then(resp => resp.json())
    .then(resp => {
      if (resp.token) { // Login successful
        return dispatch(loginSuccess(resp))
      }

      // Otherwise, something went wrong
      return dispatch(loginFail())
    })
  }
}

export const actions = { loginUser, logoutUser }
