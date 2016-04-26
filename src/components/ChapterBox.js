import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DashboardBox from './DashboardBox'

import { changeTask, changeChapter } from '../actions/avatar'

class ChapterBox extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    finished: PropTypes.number.isRequired,
    changeChapter: PropTypes.func.isRequired,
    changeTask: PropTypes.func.isRequired,
  };

  startChapter = (e) => {
    this.props.changeChapter(this.props.number - 1)
    this.props.changeTask(0)
  };

  render() {
    const { title, number, finished } = this.props

    return (
      <DashboardBox
        chapter={number}
        title={title}
        completed={finished}
        styles={{
          margin: '20px 0',
          width: '48%',
        }}
        onClick={this.startChapter}
      />
    )
  }
}

export default connect(null, { changeTask, changeChapter })(ChapterBox)
