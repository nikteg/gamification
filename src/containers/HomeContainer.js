import { connect } from 'react-redux'
import { actions as counterActions } from '../actions/counter'
import Home from '../components/Home'

import COURSES_DATA from '../courses'

const mapStateToProps = (state) => {
  const { currentChapter } = state.course
  const chapters = COURSES_DATA[state.course.courseID].chapters

  return {
    currentChapter,
    chapters,
  }
}

export default connect(mapStateToProps, counterActions)(Home)
