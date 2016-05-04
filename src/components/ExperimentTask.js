import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import Graph from './Graph/index'

const ExperimentTask = ({ isVisible, width, showNormal }) => (
  <Motion style={{ width: spring(width) }}>
    {({ width }) =>
      <div className="Experiment-main" style={{ width }}>
        { isVisible && width > 300 && <Graph width={width} showNormal={showNormal} /> }
      </div>
    }
  </Motion>
)

ExperimentTask.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  showNormal: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
}

export default ExperimentTask
