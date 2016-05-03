import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { changeChapter, changeTask } from '../actions/avatar'

import CourseBar from './CourseBar'
import TaskIcon from './TaskIcon'

import COURSES_DATA from '../courses'

class Chapter extends Component {

  static propTypes = {
    chapter: PropTypes.object,
    params: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    chapterProgress: PropTypes.array.isRequired,
    chapterIndex: PropTypes.number.isRequired,

    changeChapter: PropTypes.func.isRequired,
    changeTask: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.changeChapter(this.props.params.chapterID - 1)
    this.props.changeTask(null)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.chapterID !== this.props.params.chapterID) {
      this.props.changeChapter(nextProps.params.chapterID - 1)
    }
  }

  render() {
    const { chapter, chapterProgress, location, chapterIndex } = this.props

    if (!chapter) {
      return null
    }

    return (
      <div className="Chapter">
        <CourseBar />
        <h1 className="Chapter-title">{`Chapter ${chapterIndex}: ${chapter.name}`}</h1>
        <ul>
          {chapter.tasks.map((task, i) => (
            <li key={i}>
              <TaskIcon type={task.type} />
              <Link to={`${location.pathname}/${task.type}/${i + 1}`}>
                {task.name}
              </Link>
              {chapterProgress[i] && <span className="Chapter-done">✓</span>}
            </li>
          ))}
        </ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  const chapter = COURSES_DATA[state.course.courseID].chapters[state.course.currentChapter]
  const chapterProgress = state.course.progress[state.course.currentChapter] || []

  const chapterIndex = state.course.currentChapter + 1

  return {
    chapter,
    chapterProgress,
    chapterIndex,
  }
}

export default connect(mapStateToProps, { changeChapter, changeTask })(Chapter)
