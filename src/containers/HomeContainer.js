import { connect } from 'react-redux'
import { actions as counterActions } from '../actions/counter'
import Home from '../components/Home'

const mapStateToProps = (state) => ({
  counter: state.counter,
})

export default connect(mapStateToProps, counterActions)(Home)
