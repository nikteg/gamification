import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { changeTask, changeChapter } from '../actions/avatar'

import Avatar from './Avatar'

class CourseBar extends Component {

  static propTypes = {
    course: PropTypes.object.isRequired,
    changeTask: PropTypes.func.isRequired,
    changeChapter: PropTypes.func.isRequired,
  };

  navigate = (relativeIndex) => {
    const { currentTask, currentChapter, chapters } = this.props.course
    const numChapters = chapters.length
    const numTasks = chapters[currentChapter].tasks.length

    let newTask = currentTask + relativeIndex

    if (newTask < 0) {
      let newChapter = currentChapter - 1

      if (newChapter >= 0) {
        // Go to previous chapter

        let newNumTask = chapters[newChapter].tasks.length

        this.props.changeChapter(newChapter)
        this.props.changeTask(newNumTask - 1)
      }
    } else if (newTask >= numTasks) {
      let newChapter = currentChapter + 1

      if (newChapter < numChapters) {
        // Go to next chapter

        this.props.changeChapter(newChapter)
        this.props.changeTask(0)
      }
    } else {
      this.props.changeTask(newTask)
    }
  };

  previousTask = (e) => {
    this.navigate(-1)
  };

  nextTask = (e) => {
    this.navigate(1)
  };

  render() {
    const { course } = this.props
    const { name, currentChapter, currentTask, chapters } = course

    const chapter = chapters[currentChapter]
    const task = chapter.tasks[currentTask]

    const numChapters = chapters.length
    const numTasks = chapter.tasks.length

    const taskPrefix = {
      'exercise': 'Exercise',
      'experiment': 'Experiment',
      'start': 'Information',
    }[task.type]

    const taskTitle = `${taskPrefix}: ${task.name}`

    const prevDisabled = currentChapter === 0 && currentTask === 0
    const nextDisabled = currentChapter === numChapters - 1 && currentTask === numTasks - 1

    return (
      <div className="CourseBar">
        <div className="CourseBar-course-title">{name}</div>
        <div className="CourseBar-nav">
          <button
            className={classnames('CourseBar-nav-button', { 'CourseBar-nav-button-disabled': prevDisabled })}
            title="Go back"
            onClick={this.previousTask}>&lt;</button>
          <div className="CourseBar-nav-box">
            <Avatar task={task} />
            <div className="CourseBar-nav-box-info">
              <span className="CourseBar-nav-box-info-course-title">{chapter.name}</span>
              <span className="CourseBar-nav-box-info-task-title">{taskTitle}</span>
            </div>
          </div>
          <button
            className={classnames('CourseBar-nav-button', { 'CourseBar-nav-button-disabled': nextDisabled })}
            title="Go forward"
            onClick={this.nextTask}>&gt;</button>
        </div>
        <div className="CourseBar-didyouknow">{'Did you know?'}</div>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  course: state.course,
})

export default connect(mapStateToProps, { changeTask, changeChapter })(CourseBar)
