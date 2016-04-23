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
  description: 'Probability and statistics are two related but separate academic disciplines. Statistical analysis often uses probability distributions, and the two topics are often studied together.',
  currentChapter: 0,
  currentTask: 0,
  chapters: [
    {
      name: 'Introduction',
      tasks: [
        { name: 'Task 1', type: 'exercise', progress: 100 },
        { name: 'Task 2', type: 'experiment', progress: 50 },
      ],
    },
    {
      name: 'Describing, Exploring, and Comparing Data',
      tasks: [
        { name: 'Task 1', type: 'exercise', progress: 0 },
        { name: 'Task 2', type: 'experiment', progress: 0 },
      ],
    },
    {
      name: 'Probability',
      tasks: [
        { name: 'Task 1', progress: 20 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Distributions',
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Normal Probability Distribution',
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Relations Between Distributions',
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Point and Interval Estimates',
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Hypothesis Testing',
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Inferences From Two Samples',
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Correlation and Regression',
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Analysis of Variance (ANOVA)',
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Complexity regularization',
      tasks: [
        { name: 'Task 1', type: 'exercise', progress: 0 },
        { name: 'Task 2', type: 'experiment', progress: 50 },
      ],
    },
  ],
})
