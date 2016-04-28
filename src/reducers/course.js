import { handleActions } from 'redux-actions'
import { COURSE_CHANGE_CHAPTER, COURSE_CHANGE_TASK, COURSE_COMPLETE_CURRENT_TASK } from '../constants/ActionTypes'

export default handleActions({
  [COURSE_CHANGE_CHAPTER]: (state, { payload }) => {
    return Object.assign({}, state, {
      currentChapter: payload,
      started: true,
    })
  },
  [COURSE_CHANGE_TASK]: (state, { payload }) => {
    return Object.assign({}, state, {
      currentTask: payload,
      started: true,
    })
  },
  [COURSE_COMPLETE_CURRENT_TASK]: (state, { payload }) => {
    let chapterProgress = state.chapterProgress.slice()

    chapterProgress[state.currentChapter][state.currentTask] = true

    state.chapterProgress = chapterProgress

    return state
  },
}, {
  courseID: 0,
  currentChapter: 0,
  currentTask: 0,
  started: true,
  progress: [ [ false, false, true, false ], [ true, true, true, true, true ] ],
})
