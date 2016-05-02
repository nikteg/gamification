import React, { Component, PropTypes } from 'react'
import { calcProgress } from '../selectors/chapter-progress.js'
import ChapterBox from './ChapterBox'
import CourseBar from './CourseBar'

import '../styles/chapters.scss'

class Chapters extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    chapters: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,

    changeTask: PropTypes.func.isRequired,
    changeChapter: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.changeChapter(null)
    this.props.changeTask(null)
  }

  render() {
    const { chapters, location } = this.props

    return (
      <div className="Chapters">

        <CourseBar />

        <div className="Chapters-container">
          {chapters.map((chapter, i) => (
            <ChapterBox
              key={i}
              number={i + 1}
              title={chapter.name}
              finished={calcProgress(chapter)}
              url={`${location.pathname}/chapter/${i + 1}`}
            />
          ))}
        </div>

      </div>
    )
  }
}

export default Chapters
