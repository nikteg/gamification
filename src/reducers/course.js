import { handleActions } from 'redux-actions'
import { CHAPTER_CHANGE } from '../constants/ActionTypes'
import { ProgressTypes } from '../components/Avatar/ProgressCircle'

export default handleActions({
  [CHAPTER_CHANGE]: (state, { payload }) => {
    return Object.assign({}, state, {
      currentChapter: payload,
    })
  },
}, {
  name: 'Mathematical Statistics',
  currentChapter: 0,
  chapters: [
    {
      name: 'Chapter 1',
      icon: ProgressTypes.DICE,
      tasks: [
        { name: 'Task 1', progress: 100 },
        { name: 'Task 2', progress: 50 },
      ],
    },
    {
      name: 'Chapter 2',
      icon: ProgressTypes.LIBRARY,
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Chapter 3',
      icon: ProgressTypes.CHART,
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
  ],
})
