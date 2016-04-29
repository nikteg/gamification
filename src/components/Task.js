import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeTask, changeChapter } from '../actions/avatar'

import CourseBar from './CourseBar'

import COURSES_DATA from '../courses'

class Task extends Component {

  static propTypes = {
    task: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,

    changeTask: PropTypes.func.isRequired,
    changeChapter: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.changeTask(this.props.params.taskID - 1)
    this.props.changeChapter(this.props.params.chapterID - 1)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.taskID !== this.props.params.taskID) {
      this.props.changeTask(nextProps.params.taskID - 1)
    }

    if (nextProps.params.chapterID !== this.props.params.chapterID) {
      this.props.changeChapter(nextProps.params.chapterID - 1)
    }
  }

  render() {
    const { task } = this.props

    if (!task) {
      return null
    }

    return (
      <div className="Task">
        <CourseBar />
        {task.html}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  const task = COURSES_DATA[state.course.courseID].chapters[state.course.currentChapter].tasks[state.course.currentTask]

  return {
    task,
  }
}

export default connect(mapStateToProps, { changeTask, changeChapter })(Task)
