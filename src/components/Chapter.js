import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { changeChapter, changeTask } from '../actions/avatar'

import CourseBar from './CourseBar'

import COURSES_DATA from '../courses'

class Chapter extends Component {

  static propTypes = {
    chapter: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    chapterProgress: PropTypes.array.isRequired,

    changeChapter: PropTypes.func.isRequired,
    changeTask: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.changeChapter(this.props.params.chapterID - 1)
    this.props.changeTask(0)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.chapterID !== this.props.params.chapterID) {
      this.props.changeChapter(nextProps.params.chapterID - 1)
    }
  }

  render() {
    const { chapter, chapterProgress, location } = this.props

    if (!chapter) {
      return null
    }

    return (
      <div className="Chapter">
        <CourseBar />
        <h1 className="Chapter-title">{chapter.name}</h1>
        <h2 className="Chapter-title-tasks">Tasks</h2>
        <ul>
          {chapter.tasks.map((task, i) => <li><Link to={`${location.pathname}/${task.type}/${i + 1}`}>{task.name}</Link>{chapterProgress[i] && ' Done!'}</li>)}
        </ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  const chapter = COURSES_DATA[state.course.courseID].chapters[state.course.currentChapter]
  const chapterProgress = state.course.progress[state.course.currentChapter]

  return {
    chapter,
    chapterProgress,
  }
}

export default connect(mapStateToProps, { changeChapter, changeTask })(Chapter)
