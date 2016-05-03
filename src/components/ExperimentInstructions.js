import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'

const ExperimentInstructions = ({ instructions, title, width }) => (
  <Motion style={{ width: spring(width), opacity: spring(width > 300 ? 1 : 0) }}>
    {({ opacity, width }) =>
      <div className="Experiment-sidebar" style={{ width }}>
        <h1 className="Experiment-title">{title}</h1>
        <div className="Experiment-content" style={{ opacity }}>{instructions}</div>
      </div>
    }
  </Motion>
)

ExperimentInstructions.propTypes = {
  title: PropTypes.string.isRequired,
  instructions: PropTypes.object.isRequired,
}

export default ExperimentInstructions
