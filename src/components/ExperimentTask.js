import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import Graph from './Graph'

const ExperimentTask = ({ width }) => (
  <Motion style={{ width: spring(width) }}>
    {({ width }) =>
      <div className="main" style={{ width }}>
        <h1 className="title">Explore</h1>
        { width > 300 && <Graph width={width} />}
      </div>
    }
  </Motion>
)

ExperimentTask.propTypes = {
  width: PropTypes.number.isRequired,
}

export default ExperimentTask
