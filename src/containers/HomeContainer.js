import { connect } from 'react-redux'
import { actions as counterActions } from '../actions/counter'
import { actions as authActions } from '../actions/auth'
import Home from '../components/Home'

const mapStateToProps = (state) => ({
  counter: state.counter,
  auth: state.auth,
})

export default connect(mapStateToProps, Object.assign({}, counterActions, authActions))(Home)
