import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { changeTask, changeChapter, toggleAvatarMenu } from '../actions/avatar'

import Avatar from './Avatar'

const DID_YOU_KNOW = [
  {
    text: 'Did you know that the poisson distribution can often used to broadly predict the outcome of a professional soccer game?',
    url: 'http://www.pinnaclesports.com/en/betting-articles/soccer/how-to-calculate-poisson-distribution',
  },
  {
    text: 'The first application of the normal distribution was applied by Galileo Galilei during an analysis of errors of astronomical observations due to errors in measurement of instrument and observer.',
    url: 'http://onlinestatbook.com/2/normal_distribution/history_normal.html',
  },
  {
    text: 'Did you know that human characteristics such as length, weight and strength is often said to be normal distributed?',
    url: 'http://onlinestatbook.com/2/normal_distribution/history_normal.html',
  },
  {
    text: 'The Central Limit Theorem states that sampling distribution of the mean of any independent random variable behaves like a normal distribution given the sample size is large enough.',
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
    const { name, currentChapter, currentTask, started, chapters } = course

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
        {started && <div className="CourseBar-nav">
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
        </div>}
        <div className="CourseBar-didyouknow"><DidYouKnow /></div>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  course: state.course,
})

export default connect(mapStateToProps, { changeTask, changeChapter, toggleAvatarMenu })(CourseBar)
