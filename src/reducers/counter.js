import { handleActions } from 'redux-actions'
import { COUNTER_INCREMENT } from '../constants/ActionTypes'

export default handleActions({
  [COUNTER_INCREMENT]: (state, { payload }) => {
    return state + payload
  },
}, 1)
