import React, { PropTypes } from 'react'
import { calcProgress } from '../selectors/chapter-progress.js'
import ChapterBox from './ChapterBox'
import CourseBar from './CourseBar'

import '../styles/chapters.scss'

const Chapters = ({ name, description, chapters, location }) => (
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

Chapters.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  chapters: PropTypes.array.isRequired,
}

export default Chapters
