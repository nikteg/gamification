import { createAction } from 'redux-actions'
import { AWARD_POPUP_SHOW, AWARD_POPUP_HIDE } from '../constants/ActionTypes'

export const showAwardPopup = createAction(AWARD_POPUP_SHOW, award => award)
export const hideAwardPopup = createAction(AWARD_POPUP_HIDE)

export const actions = { showAwardPopup, hideAwardPopup }
