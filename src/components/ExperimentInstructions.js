import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Motion, spring } from 'react-motion'
import '../styles/components/Experiment.scss'

const ExperimentInstructions = ({ instructions, title, width, taskNumber }) => (
  <Motion style={{ width: spring(width), opacity: spring(width > 300 ? 1 : 0) }}>
    {({ opacity, width }) =>
      <div className="Experiment-sidebar" style={{ width, opacity }}>

        <h1 className="Experiment-title">{title}</h1>

        <div className="Experiment-content">{instructions}</div>

        { taskNumber < 4 && (
          <Link
            className="Experiment-button"
            to={`/study/mathematical-statistics/chapter/1/experiment/${taskNumber + 1}`}
          >
            Continue
          </Link>
        )}
      </div>
    }
  </Motion>
)

ExperimentInstructions.propTypes = {
  title: PropTypes.string.isRequired,
  instructions: PropTypes.object.isRequired,
  taskNumber: PropTypes.number.isRequired,
}

export default ExperimentInstructions
