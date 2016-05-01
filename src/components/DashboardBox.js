import React, { PropTypes } from 'react'
import ChapterProgressBar from './ChapterProgressBar'
import { Link } from 'react-router'
import '../styles/dashboard-box.scss'

const DashboardBox = ({ chapter, title, completed, styles = {}, url }) => (

  <Link to={url} className="DashboardBox" style={styles}>
    <p className="DashboardBox-chapter">chapter {chapter}</p>
    <h3 className="DashboardBox-title">{title}</h3>
    <ChapterProgressBar completed={completed} />
    <p className="DashboardBox-continue">Continue where you left off</p>
  </Link>
)

DashboardBox.propTypes = {
  chapter: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
  styles: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
}

export default DashboardBox
