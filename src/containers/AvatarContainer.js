import { connect } from 'react-redux'
import { actions as counterActions } from '../actions/counter'
import Avatar from '../components/Avatar'

const mapStateToProps = (state) => ({
  counter: state.counter,
})

export default connect(mapStateToProps, counterActions)(Avatar)
