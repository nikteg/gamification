import { createAction } from 'redux-actions'
import { AVATAR_MENU } from '../constants/ActionTypes'
import { CHAPTER_CHANGE } from '../constants/ActionTypes'

export const toggleAvatarMenu = createAction(AVATAR_MENU)
export const changeChapter = createAction(CHAPTER_CHANGE, chapter => chapter)

export const actions = { toggleAvatarMenu, changeChapter }
