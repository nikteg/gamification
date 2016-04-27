import { handleActions } from 'redux-actions'
import { COURSE_CHANGE_CHAPTER, COURSE_CHANGE_TASK } from '../constants/ActionTypes'

import * as mathematicalStatistics from '../courses/1'

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
}, {
  name: mathematicalStatistics.NAME,
  description: mathematicalStatistics.DESCRIPTION,
  // chapters: mathematicalStatistics.CHAPTERS,
  currentChapter: 0,
  currentTask: 0,
  started: true,
  chapters: [
    {
      name: 'Introduction',
      tasks: [
        { name: 'Information', type: 'info', done: false },
        { name: 'Exercise 1', type: 'exercise', done: false },
        { name: 'Exercise 2', type: 'exercise', done: false },
        { name: 'Experiment 1', type: 'experiment', done: false },
      ],
    },
    {
      name: 'Describing, Exploring, and Comparing Data',
      tasks: [
        { name: 'Task 1', type: 'exercise', done: true },
        { name: 'Task 2', type: 'experiment', done: false },
      ],
    },
    {
      name: 'Probability',
      tasks: [
      { name: 'Task 1', type: 'exercise', done: true },
      { name: 'Task 2', type: 'experiment', done: true },
      ],
    },
    {
      name: 'Distributions',
      tasks: [
      { name: 'Task 1', type: 'exercise', done: true },
      { name: 'Task 2', type: 'exercise', done: false },
      { name: 'Task 3', type: 'experiment', done: true },
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
