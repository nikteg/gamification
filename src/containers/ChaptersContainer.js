import { connect } from 'react-redux'
import Chapters from '../components/Chapters'

import COURSES_DATA from '../courses'

const mapStateToProps = (state) => {
  const { courseID, chapterProgress } = state.course

  const { name, description, chapters } = COURSES_DATA[courseID]

  return {
    name,
    description,
    chapters,
  }
}

export default connect(mapStateToProps)(Chapters)
