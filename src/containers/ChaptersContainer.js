import { connect } from 'react-redux'
import Chapters from '../components/Chapters'

const mapStateToProps = (state) => {
  const { name, description, chapters } = state.course

  return {
    name,
    description,
    chapters,
  }
}

export default connect(mapStateToProps)(Chapters)
