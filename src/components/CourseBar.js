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

const DID_YOU_KNOW = [
  {
    text: 'the poisson distribution can often used to broadly predict the outcome of a professional soccer game',
    url: 'http://www.pinnaclesports.com/en/betting-articles/soccer/how-to-calculate-poisson-distribution',
  },
  {
    text: 'the first application of the normal distribution was applied by Galileo Galilei during an analysis of errors of astronomical observations due to errors in measurement of instrument and observer',
    url: 'http://onlinestatbook.com/2/normal_distribution/history_normal.html',
  },
  {
    text: 'human characteristics such as length, weight and strength is often said to be normal distributed',
    url: 'http://onlinestatbook.com/2/normal_distribution/history_normal.html',
  },
  {
    text: 'the Central Limit Theorem states that sampling distribution of the mean of any independent random variable behaves like a normal distribution given the sample size is large enough',
    url: 'http://stattrek.com/statistics/dictionary.aspx?definition=Central%20limit%20theorem',
  },
]

class DidYouKnow extends Component {

  state = {
    element: null,
  };

  componentWillMount() {
    this.setState({ element: DID_YOU_KNOW[Math.floor(Math.random() * DID_YOU_KNOW.length)] })
  }

  render() {
    return (
      <a href={this.state.element.url}>{this.state.element.text}</a>
    )
  }

}

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

    // Just navigate chapters when no task is selected
    if (currentTask == null) {
      const newChapter = Math.max(0, Math.min(numChapters - 1, currentChapter + relativeIndex))

      this.context.router.push(`/study/mathematical-statistics/chapter/${newChapter + 1}`)

      return
    }

    const newTask = Math.max(0, Math.min(numTasks - 1, currentTask + relativeIndex))

    const type = chapters[currentChapter].tasks[newTask].type

    this.context.router.push(`/study/mathematical-statistics/chapter/${currentChapter + 1}/${type}/${newTask + 1}`)
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
    const { name, chapters, chapterProgress, chapter, task, currentChapter, currentTask, toggleAvatarMenu } = this.props

    let prevDisabled = chapter && currentChapter === 0
    let nextDisabled = chapter && currentChapter === chapters.length - 1

    if (task) {
      prevDisabled = currentTask === 0
      nextDisabled = currentTask === chapter.tasks.length - 1
    }

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
                {task && <span className="CourseBar-nav-avatarbox-info-task-title">{this.taskTitle(task)}{chapterProgress[currentTask] && ' ✓'}</span>}
              </div>
            </div>
            <button
              className={classnames('CourseBar-nav-button CourseBar-nav-button-right', {
                'CourseBar-nav-button-disabled': nextDisabled,
              })}
              title="Go forward"
              onClick={this.nextTask}>►</button>
          </div>}
          <div className="CourseBar-didyouknow"><DidYouKnow /></div>
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
