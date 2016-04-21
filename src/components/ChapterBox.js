import React, { PropTypes } from 'react'
import '../styles/chapters.scss'

const ChapterBox = ({ title, number, finished }) => (
  <div className="Chapter">
    <div className="Chapter-progress" style={{ width: finished + '%' }}/>
    <h2 className="Chapter-title">{number} {title}</h2>
  </div>
)

ChapterBox.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  finished: PropTypes.number.isRequired,
}

export default ChapterBox
