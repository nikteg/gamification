import React, { PropTypes } from 'react'
import ChapterProgressBar from './ChapterProgressBar'
import '../styles/dashboard-box.scss'

const DashboardBox = ({ chapter, title, completed }) => (
  <div className="DashboardBox">
    <p className="DashboardBox-chapter">chapter {chapter}</p>
    <h3 className="DashboardBox-title">{title}</h3>
    <ChapterProgressBar completed={completed} />
    <p className="DashboardBox-continue">Continue where you left off</p>
  </div>
)

DashboardBox.propTypes = {
  chapter: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
}

export default DashboardBox
