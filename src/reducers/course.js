import { handleActions } from 'redux-actions'
import { COURSE_CHANGE_CHAPTER, COURSE_CHANGE_TASK } from '../constants/ActionTypes'

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
}, {
  name: 'Mathematical Statistics',
  currentChapter: 0,
  currentTask: 0,
  chapters: [
    {
      name: 'Chapter 1',
      tasks: [
        { name: 'Blahaj', type: 'start', progress: 0 },
        { name: 'Task 1', type: 'exercise', progress: 100 },
        { name: 'Task 2', type: 'experiment', progress: 50 },
      ],
    },
    {
      name: 'Chapter 2',
      tasks: [
        { name: 'Task 1', type: 'exercise', progress: 0 },
        { name: 'Task 2', type: 'experiment', progress: 0 },
      ],
    },
    {
      name: 'Chapter 3',
      tasks: [
        { name: 'Task 1', type: 'exercise', progress: 0 },
        { name: 'Task 2', type: 'experiment', progress: 50 },
      ],
    },
  ],
})
