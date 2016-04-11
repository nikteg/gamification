import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import classes from '../styles/Experiment.scss'

const springConfig = { stiffness: 300, damping: 50 }
const ExperimentInstructions = ({ instructions, title, width }) => (
  <Motion style={{ width: spring(width, springConfig) }}>
    {({ width }) =>
      <div className={classes['sidebar']} style={{ width }}>
        <h1>{title}</h1>
        <p>{instructions}</p>
      </div>
    }
  </Motion>
)

ExperimentInstructions.propTypes = {
  title: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
}

export default ExperimentInstructions
