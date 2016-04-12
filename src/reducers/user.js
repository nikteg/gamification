import { handleActions } from 'redux-actions'
import {
  USER_FETCH,
  USER_INFO,
  USERS_FETCH,
  USERS_INFO,
} from '../constants/ActionTypes'

export default handleActions({
  [USER_FETCH]: (state, { payload }) => {
    return Object.assign({}, state, {
      fetching: true,
    })
  },
  [USER_INFO]: (state, { payload }) => {
    return Object.assign({}, state, {
      id: payload.id,
      username: payload.username,
      fetching: false,
    })
  },
  [USERS_FETCH]: (state, { payload }) => {
    return Object.assign({}, state, {
      fetching: true,
    })
  },
  [USERS_INFO]: (state, { payload }) => {
    return Object.assign({}, state, {
      users: payload,
      fetching: false,
    })
  },
}, {
  id: 0,
  username: null,
  fetching: false,
  users: [],
})
