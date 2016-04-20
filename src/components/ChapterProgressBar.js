import React, { PropTypes } from 'react'
import '../styles/chapter-progress-bar.scss'

const ChapterProgressBar = ({ completed }) => (
  <div className="ChapterProgressBar">
    <div className="ChapterProgressBar-bar" style={{ width: completed + '%' }}>
      <span className="ChapterProgressBar-text">{ completed }%</span>
    </div>
  </div>
)

ChapterProgressBar.propTypes = {
  completed: PropTypes.number.isRequired,
}

export default ChapterProgressBar
