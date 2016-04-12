import { connect } from 'react-redux'
import { actions as userActions } from '../actions/user'
import User from '../components/User'

const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps, userActions)(User)
