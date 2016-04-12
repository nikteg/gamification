import { connect } from 'react-redux'
import { actions as userActions } from '../actions/user'
import Users from '../components/Users'

const mapStateToProps = (state) => ({
  users: state.user.users,
  fetching: state.user.fetching,
})

export default connect(mapStateToProps, userActions)(Users)
