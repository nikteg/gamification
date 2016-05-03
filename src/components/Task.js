import React, { Component, PropTypes } from 'react'
import Experiment from './Experiment'
import { connect } from 'react-redux'
import { changeTask, changeChapter, completeTask } from '../actions/avatar'

import CourseBar from './CourseBar'

import COURSES_DATA from '../courses'

class Task extends Component {

  static propTypes = {
    task: PropTypes.object,
    params: PropTypes.object.isRequired,
    changeTask: PropTypes.func.isRequired,
    changeChapter: PropTypes.func.isRequired,
    completeTask: PropTypes.func.isRequired,
    screenHeight: PropTypes.number.isRequired,
    screenWidth: PropTypes.number.isRequired,
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
    const { task, screenHeight, screenWidth } = this.props

    if (!task) {
      return null
    }

    return (
      <div className="Task">
        <CourseBar />
        {task.type === 'overview'
          ? task.html
          : <Experiment
            title={task.name}
            taskNumber={task.taskNumber}
            screenHeight={screenHeight}
            screenWidth={screenWidth}
            instructions={task.html}
            displayGraph={task.useGraph}
          />
        }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  const { currentTask } = state.course
  const task = currentTask != null ? COURSES_DATA[state.course.courseID].chapters[state.course.currentChapter].tasks[state.course.currentTask] : null

  return {
    task,
    screenHeight: state.screenSize.height,
    screenWidth: state.screenSize.width,
  }
}

export default connect(mapStateToProps, { changeTask, changeChapter, completeTask })(Task)
