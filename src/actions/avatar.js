import { createAction } from 'redux-actions'
import { AVATAR_MENU } from '../constants/ActionTypes'

export const toggleAvatarMenu = createAction(AVATAR_MENU)

export const actions = { toggleAvatarMenu }
