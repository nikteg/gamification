import React, { PropTypes } from 'react'
import ChapterBox from './ChapterBox'
import '../styles/chapters.scss'

const Chapters = ({ chapters }) => (
  <div className="Chapters">

    {chapters.map((chapter, i) => (
      <ChapterBox
        key={i}
        number={i}
        title={chapter.title}
        finished={chapter.finished}
      />
    ))}

  </div>
)

Chapters.propTypes = {
  chapters: PropTypes.array.isRequired,
}

export default Chapters
