import { handleActions } from 'redux-actions'
import { AWARD_POPUP_SHOW, AWARD_POPUP_HIDE } from '../constants/ActionTypes'

export default handleActions({
  [AWARD_POPUP_SHOW]: (state, { payload }) => {
    return payload
  },
  [AWARD_POPUP_HIDE]: (state, { payload }) => {
    return null
  },
}, null)
