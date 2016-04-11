import { connect } from 'react-redux'
import { actions as authActions } from '../actions/auth'
import AuthBox from '../components/AuthBox'

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, authActions)(AuthBox)
