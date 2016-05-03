import { connect } from 'react-redux'
import Chapters from '../components/Chapters'

import { changeTask, changeChapter } from '../actions/avatar'

import COURSES_DATA from '../courses'

const mapStateToProps = (state) => {
  const { courseID, progress } = state.course

  const { name, description, chapters } = COURSES_DATA[courseID]

  return {
    name,
    description,
    chapters,
    progress,
  }
}

export default connect(mapStateToProps, { changeTask, changeChapter })(Chapters)
