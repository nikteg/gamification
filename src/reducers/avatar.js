import { handleActions } from 'redux-actions'
import { AVATAR_MENU } from '../constants/ActionTypes'
import { UPDATE_LOCATION } from 'redux-simple-router'

export default handleActions({
  [UPDATE_LOCATION]: (state, { payload }) => {
    return false
  },
  [AVATAR_MENU]: (state, { payload }) => {
    return !state
  },
}, false)
