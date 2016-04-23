import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { changeTask, changeChapter, toggleAvatarMenu } from '../actions/avatar'

import Avatar from './Avatar'

class CourseBar extends Component {

  static propTypes = {
    course: PropTypes.object.isRequired,
    changeTask: PropTypes.func.isRequired,
    changeChapter: PropTypes.func.isRequired,
    toggleAvatarMenu: PropTypes.func.isRequired,
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
    const { course, toggleAvatarMenu } = this.props
    const { name, currentChapter, currentTask, chapters } = course

    const chapter = chapters[currentChapter]
    const task = chapter.tasks[currentTask]

    const numChapters = chapters.length
    const numTasks = chapter.tasks.length

    let taskTitle = task.name

    if (task.type != null) {
      const taskPrefix = {
        'exercise': 'Exercise',
        'experiment': 'Experiment',
        'info': 'Information',
      }[task.type]

      taskTitle = `${taskPrefix}: ${task.name}`
    }

    const prevDisabled = currentChapter === 0 && currentTask === 0
    const nextDisabled = currentChapter === numChapters - 1 && currentTask === numTasks - 1

    return (
      <div className="CourseBar">
        <div className="CourseBar-course-title">{name}</div>
        <div className="CourseBar-nav">
          <button
            className={classnames('CourseBar-nav-button', { 'CourseBar-nav-button-disabled': prevDisabled })}
            title="Go back"
            onClick={this.previousTask}>◀</button>
          <div className="CourseBar-nav-avatarbox" onClick={toggleAvatarMenu}>
            <Avatar task={task} />
            <div className="CourseBar-nav-avatarbox-info">
              <span className="CourseBar-nav-avatarbox-info-course-title">{chapter.name}</span>
              <span className="CourseBar-nav-avatarbox-info-task-title">{taskTitle}</span>
            </div>
          </div>
          <button
            className={classnames('CourseBar-nav-button', {
              'CourseBar-nav-button-disabled': nextDisabled,
              'CourseBar-nav-button-bright': task.progress === 100,
            })}
            title="Go forward"
            onClick={this.nextTask}>▶</button>
        </div>
        <div className="CourseBar-didyouknow">{'Did you know?'}</div>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  course: state.course,
})

export default connect(mapStateToProps, { changeTask, changeChapter, toggleAvatarMenu })(CourseBar)
