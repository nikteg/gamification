import { connect } from 'react-redux'
import { actions as counterActions } from '../actions/counter'
import Home from '../components/Home'

const mapStateToProps = (state) => {
  const { currentChapter, chapters } = state.course

  return {
    currentChapter,
    chapters,
  }
}

export default connect(mapStateToProps, counterActions)(Home)
