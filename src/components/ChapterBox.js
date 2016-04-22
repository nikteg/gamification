import React, { PropTypes } from 'react'
import DashboardBox from './DashboardBox'

const ChapterBox = ({ title, number, finished }) => (
  <DashboardBox
    chapter={number}
    title={title}
    completed={finished}
    styles={{
      margin: '20px 0',
      width: '48%',
    }}
  />
)

ChapterBox.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  finished: PropTypes.number.isRequired,
}

export default ChapterBox
