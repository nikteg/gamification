import React, { Component, PropTypes } from 'react'
import DashboardBox from './DashboardBox'

class ChapterBox extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    finished: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  };

  render() {
    const { title, number, finished, url } = this.props

    return (
      <DashboardBox
        chapter={number}
        title={title}
        completed={finished}
        styles={{
          margin: '20px 0',
          width: '48%',
        }}
        url={url}
      />
    )
  }
}

export default ChapterBox
