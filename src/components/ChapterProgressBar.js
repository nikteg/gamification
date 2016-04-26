import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import '../styles/chapter-progress-bar.scss'

const ChapterProgressBar = ({ completed }) => (
  <Motion
    defaultStyle={{ width: 0 }}
    style={{ width: spring((completed / 100) * 352) }}
  >
    {({ width }) =>
      <div className="ChapterProgressBar">
        <div className="ChapterProgressBar-bar" style={{ width }}>
          <span className="ChapterProgressBar-text">{ completed }%</span>
        </div>
      </div>
    }
  </Motion>
)

ChapterProgressBar.propTypes = {
  completed: PropTypes.number.isRequired,
}

export default ChapterProgressBar
