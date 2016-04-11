import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import classes from '../styles/Experiment.scss'

const ExperimentTask = ({ width }) => (
  <Motion style={{ width: spring(width) }}>
    {({ width }) =>
      <div className={classes['main']} style={{ width }}>
        <h1 className={classes['title']}>Find the answer</h1>
      </div>
    }
  </Motion>
)

ExperimentTask.propTypes = {
  width: PropTypes.number.isRequired,
}

export default ExperimentTask
