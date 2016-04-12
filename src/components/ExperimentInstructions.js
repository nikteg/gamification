import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import classes from '../styles/Experiment.scss'

const ExperimentInstructions = ({ instructions, title, width }) => (
  <Motion style={{ width: spring(width), opacity: spring(width > 300 ? 1 : 0) }}>
    {({ opacity, width }) =>
      <div className={classes['sidebar']} style={{ width }}>
        <h1 className={classes['title']}>{title}</h1>
        <p className={classes['content']} style={{ opacity }}>{instructions}</p>
      </div>
    }
  </Motion>
)

ExperimentInstructions.propTypes = {
  title: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
}

export default ExperimentInstructions
