import { createAction } from 'redux-actions'
import {
  USER_FETCH,
  USER_INFO,
  USERS_FETCH,
  USERS_INFO,
} from '../constants/ActionTypes'
import { getUser, getUsers } from '../util/api'

export const userFetch = createAction(USER_FETCH)
export const usersFetch = createAction(USERS_FETCH)
export const userInfo = createAction(USER_INFO, info => info)
export const usersInfo = createAction(USERS_INFO, users => users)

export const fetchUser = function(username) {
  return function(dispatch) {
    dispatch(userFetch())

    getUser(username).then(resp => {
      dispatch(userInfo(resp))
    })
  }
}

export const fetchUsers = function(username) {
  return function(dispatch) {
    dispatch(usersFetch())

    getUsers().then(resp => {
      dispatch(usersInfo(resp))
    })
  }
}

export const actions = { fetchUser, fetchUsers }
