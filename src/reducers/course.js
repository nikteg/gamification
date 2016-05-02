import update from 'react/lib/update'
import { handleActions } from 'redux-actions'
import { COURSE_CHANGE_CHAPTER, COURSE_CHANGE_TASK, COURSE_COMPLETE_CURRENT_TASK } from '../constants/ActionTypes'

import COURSE_DATA from '../courses'

export default handleActions({
  [COURSE_CHANGE_CHAPTER]: (state, { payload }) => {
    return Object.assign({}, state, {
      currentChapter: payload,
    })
  },
  [COURSE_CHANGE_TASK]: (state, { payload }) => {
    return Object.assign({}, state, {
      currentTask: payload,
    })
  },
  [COURSE_COMPLETE_CURRENT_TASK]: (state, { payload }) => {
    if (state.currentChapter == null || state.currentTask == null) {
      return state
    }

    return update(state, {
      progress: { [state.currentChapter]: { [state.currentTask]: { $set: true } } },
    })
  },
}, {
  courseID: 0,
  currentChapter: null,
  currentTask: null,
  progress: COURSE_DATA[0].chapters.map(chapter => chapter.tasks.map(() => false)),
})
