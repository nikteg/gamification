import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeChapter, changeTask } from '../actions/avatar'

import CourseBar from './CourseBar'

class Chapter extends Component {

  static propTypes = {
    chapter: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    changeChapter: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.changeChapter(this.props.params.chapterID - 1)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.chapterID !== this.props.params.chapterID) {
      this.props.changeChapter(nextProps.params.chapterID - 1)
    }
  }

  render() {
    const { chapter } = this.props

    if (!chapter) {
      return null
    }

    return (
      <div className="Chapter">
        <CourseBar />
        {chapter.name}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  const chapter = state.course.chapters[state.course.currentChapter]

  return {
    chapter,
  }
}

export default connect(mapStateToProps, { changeChapter })(Chapter)
