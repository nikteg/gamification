import React, { PropTypes } from 'react'
import { calcProgress } from '../selectors/chapter-progress.js'
import ChapterBox from './ChapterBox'
import '../styles/chapters.scss'

const Chapters = ({ name, description, chapters }) => (
  <div className="Chapters">

    <div className="Chapters-header">
      <div className="Chapters-wrap">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>

    <div className="Chapters-container">
      {chapters.map((chapter, i) => (
        <ChapterBox
          key={i}
          number={i + 1}
          title={chapter.name}
          finished={calcProgress(chapter)}
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
