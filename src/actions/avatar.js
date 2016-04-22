import { createAction } from 'redux-actions'
import { AVATAR_MENU } from '../constants/ActionTypes'
import { COURSE_CHANGE_CHAPTER, COURSE_CHANGE_TASK } from '../constants/ActionTypes'

export const toggleAvatarMenu = createAction(AVATAR_MENU)
export const changeChapter = createAction(COURSE_CHANGE_CHAPTER, chapter => chapter)
export const changeTask = createAction(COURSE_CHANGE_TASK, task => task)

export const actions = { toggleAvatarMenu, changeChapter, changeTask }
