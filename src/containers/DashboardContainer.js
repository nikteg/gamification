import { connect } from 'react-redux'
import { actions as counterActions } from '../actions/counter'
import Dashboard from '../components/Dashboard'

import COURSES_DATA from '../courses'

const mapStateToProps = (state) => {
  const { currentChapter, progress } = state.course
  const chapters = COURSES_DATA[state.course.courseID].chapters

  return {
    currentChapter,
    chapters,
    progress,
  }
}

export default connect(mapStateToProps, counterActions)(Dashboard)
