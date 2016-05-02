import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { changeTask, changeChapter, toggleAvatarMenu, completeTask } from '../actions/avatar'
import { showAwardPopup } from '../actions/awards'

import Avatar from './Avatar'
import AwardPopup from './AwardPopup'

import * as AwardTypes from '../constants/AwardTypes'

import COURSES_DATA from '../courses'

const NAVBAR_HEIGHT = 64

class CourseBar extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    chapters: PropTypes.array.isRequired,
    chapterProgress: PropTypes.array.isRequired,
    chapter: PropTypes.object.isRequired,
    task: PropTypes.object.isRequired,
    currentChapter: PropTypes.number.isRequired,
    currentTask: PropTypes.number.isRequired,

    changeTask: PropTypes.func.isRequired,
    changeChapter: PropTypes.func.isRequired,
    toggleAvatarMenu: PropTypes.func.isRequired,
    showAwardPopup: PropTypes.func.isRequired,
    completeTask: PropTypes.func.isRequired,
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  state = {
    sticky: false,
  };

  componentDidMount() {
    // TODO: This is all temporary
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 65) { // A
        this.props.showAwardPopup({
          name: 'Gamed the system',
          type: Math.random() > 0.5 ? AwardTypes.PACMAN : AwardTypes.TIME,
          date: new Date(),
        })
      }

      if (e.keyCode === 83) { // S
        this.props.completeTask()
      }
    })

    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = (e) => {
    if (document.body.scrollTop > NAVBAR_HEIGHT) {
      if (!this.state.sticky) {
        this.setState({ sticky: true })
      }
    } else if (this.state.sticky) {
      this.setState({ sticky: false })
    }
  };

  navigate = (relativeIndex) => {
    const { chapters, chapter, currentChapter, currentTask } = this.props
    const numChapters = chapters.length
    const numTasks = chapter.tasks.length

    let newTask = currentTask + relativeIndex
    let newChapter = currentChapter

    // new task (-1) -> prev last task
    if (newTask < 0) {
      if (currentChapter > 0) {
        newChapter = currentChapter - 1
        newTask = chapters[newChapter].tasks.length - 1
        console.log('here', chapters[newChapter].tasks)
      }
    // new task (num tasks) -> next first task
    } else if (newTask >= numTasks) {
      if (currentChapter + 1 < numChapters) {
        newChapter = currentChapter + 1
        newTask = 0
      }
    }

    const type = chapters[newChapter].tasks[newTask].type

    this.context.router.push(`/study/mathematical-statistics/chapter/${newChapter + 1}/${type}/${newTask + 1}`)
  };

  previousTask = (e) => {
    this.navigate(-1)
  };

  nextTask = (e) => {
    this.navigate(1)
  };

  taskTitle = (task) => {
    let taskTitle = task.name

    if (task.type) {
      const taskPrefix = {
        'exercise': 'Exercise',
        'experiment': 'Experiment',
        'overview': 'Overview',
      }[task.type]

      taskTitle = `${taskPrefix}: ${task.name}`
    }

    return taskTitle
  };

  render() {
    const { name, chapterProgress, chapter, task, currentTask, toggleAvatarMenu } = this.props

    const numTasks = chapter && chapter.tasks.length || 0

    const prevDisabled = !task || currentTask === 0
    const nextDisabled = !task || currentTask === numTasks - 1

    const courseColor = '#5677fc'

    return (
      <div>
        <div className={classnames('CourseBar', { 'sticky': this.state.sticky })} style={{ backgroundColor: courseColor }}>
          <AwardPopup />
          <div className="CourseBar-course-title">{name}</div>
          {chapter && <div className="CourseBar-nav">
            <button
              className={classnames('CourseBar-nav-button CourseBar-nav-button-left', { 'CourseBar-nav-button-disabled': prevDisabled })}
              title="Go back"
              onClick={this.previousTask}>►</button>
            <div className="CourseBar-nav-avatarbox" onClick={toggleAvatarMenu}>
              <Avatar chapter={chapter} chapterProgress={chapterProgress} />
              <div className="CourseBar-nav-avatarbox-info">
                <span className="CourseBar-nav-avatarbox-info-course-title">{chapter.name}</span>
                {task && <span className="CourseBar-nav-avatarbox-info-task-title">{this.taskTitle(task)}{task.done && ' ✓'}</span>}
              </div>
            </div>
            <button
              className={classnames('CourseBar-nav-button CourseBar-nav-button-right', {
                'CourseBar-nav-button-disabled': nextDisabled,
                'CourseBar-nav-button-bright': task && task.done,
              })}
              title="Go forward"
              onClick={this.nextTask}>►</button>
          </div>}
          <div className="CourseBar-didyouknow">{'Did you know?'}</div>
        </div>
        <div className="CourseBar-sticky-padding" />
      </div>
    )
  }

}

const mapStateToProps = (state, props) => {
  const { courseID, currentChapter, currentTask, progress } = state.course
  const { name, description, chapters } = COURSES_DATA[courseID]

  const chapter = currentChapter != null && chapters[currentChapter]
  const task = currentTask != null && chapter.tasks[currentTask]
  const chapterProgress = currentChapter != null && progress[currentChapter]

  return {
    name,
    description,
    chapters,
    chapterProgress,
    chapter,
    task,
    currentChapter,
    currentTask,
  }
}

export default connect(mapStateToProps, { changeTask, changeChapter, toggleAvatarMenu, showAwardPopup, completeTask })(CourseBar)
