import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'redux-simple-router'

export default function requireAuth(Comp) {
  class AuthenticatedComponent extends Component {
    static propTypes = {
      isAuthenticated: PropTypes.bool.isRequired,
      location: PropTypes.object.isRequired,
      dispatch: PropTypes.func.isRequired,
    };

    componentWillMount() {
      this.checkAuth()
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth()
    }

    checkAuth() {
      if (!this.props.isAuthenticated) {
        alert('Authenticated users only!')

        const redirect = this.props.location.pathname
        this.props.dispatch(routeActions.push(`/404?next=${redirect}`))
      }
    }

    render() {
      if (this.props.isAuthenticated) {
        return <Comp {...this.props} />
      }

      return null
    }
  }

  const mapStateToProps = (state) => ({
    token: state.auth.token,
    username: state.auth.username,
    isAuthenticated: state.auth.isAuthenticated,
    location: state.router.location,
    dispatch: state.router.dispatch,
  })

  return connect(mapStateToProps)(AuthenticatedComponent)
}
