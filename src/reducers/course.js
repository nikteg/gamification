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
  description: 'Probability and statistics are two related but separate academic disciplines. Statistical analysis often uses probability distributions, and the two topics are often studied together.',
  currentChapter: 0,
  chapters: [
    {
      name: 'Introduction',
      icon: ProgressTypes.DICE,
      tasks: [
        { name: 'Task 1', progress: 100 },
        { name: 'Task 2', progress: 50 },
      ],
    },
    {
      name: 'Describing, Exploring, and Comparing Data',
      icon: ProgressTypes.LIBRARY,
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Probability',
      icon: ProgressTypes.CHART,
      tasks: [
        { name: 'Task 1', progress: 20 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Distributions',
      icon: ProgressTypes.CHART,
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Normal Probability Distribution',
      icon: ProgressTypes.CHART,
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Relations Between Distributions',
      icon: ProgressTypes.CHART,
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Point and Interval Estimates',
      icon: ProgressTypes.CHART,
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Hypothesis Testing',
      icon: ProgressTypes.CHART,
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Inferences From Two Samples',
      icon: ProgressTypes.CHART,
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Correlation and Regression',
      icon: ProgressTypes.CHART,
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Analysis of Variance (ANOVA)',
      icon: ProgressTypes.CHART,
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
    {
      name: 'Complexity regularization',
      icon: ProgressTypes.CHART,
      tasks: [
        { name: 'Task 1', progress: 0 },
        { name: 'Task 2', progress: 0 },
      ],
    },
  ],
})
