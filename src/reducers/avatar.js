import { handleActions } from 'redux-actions'
import { AVATAR_MENU } from '../constants/ActionTypes'

export default handleActions({
  [AVATAR_MENU]: (state, { payload }) => {
    return !state
  },
}, false)
