import { createAction } from 'redux-actions'
import { COUNTER_INCREMENT } from '../constants/ActionTypes'

export const increment = createAction(COUNTER_INCREMENT, (value = 1) => value)

export const actions = { increment }
