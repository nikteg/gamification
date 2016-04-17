import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'

const ExperimentInstructions = ({ instructions, title, width }) => (
  <Motion style={{ width: spring(width), opacity: spring(width > 300 ? 1 : 0) }}>
    {({ opacity, width }) =>
      <div className="sidebar" style={{ width }}>
        <h1 className="title">{title}</h1>
        <p className="content" style={{ opacity }}>{instructions}</p>
      </div>
    }
  </Motion>
)

ExperimentInstructions.propTypes = {
  title: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
}

export default ExperimentInstructions
