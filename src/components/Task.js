import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeTask, changeChapter, completeTask } from '../actions/avatar'

import CourseBar from './CourseBar'

import COURSES_DATA from '../courses'

class Task extends Component {

  static propTypes = {
    task: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,

    changeTask: PropTypes.func.isRequired,
    changeChapter: PropTypes.func.isRequired,
    completeTask: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.changeTask(this.props.params.taskID - 1)
    this.props.changeChapter(this.props.params.chapterID - 1)

    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.taskID !== this.props.params.taskID) {
      this.props.changeTask(nextProps.params.taskID - 1)
    }

    if (nextProps.params.chapterID !== this.props.params.chapterID) {
      this.props.changeChapter(nextProps.params.chapterID - 1)
    }
  }

  onScroll = (e) => {
    if (this.props.task.type !== 'overview') {
      return
    }

    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      this.props.completeTask()
    }
  };

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
  const task = COURSES_DATA[state.course.courseID]
    .chapters[state.course.currentChapter]
    .tasks[state.course.currentTask]

  return {
    task,
  }
}

export default connect(mapStateToProps, { changeTask, changeChapter, completeTask })(Task)
