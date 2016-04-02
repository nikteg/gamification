import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'react-router'

export function requireAuth(Comp) {
  class AuthenticatedComponent extends Component {
    componentWillMount () {
      this.checkAuth();
    }

    componentWillReceiveProps (nextProps) {
      this.checkAuth();
    }

    checkAuth () {
      if (!this.props.isAuth) {
        let redirect = this.props.location.pathname;
        this.props.dispatch(pushState(null, `/login?next=${redirect}`))
      }
    }

    render () {
      if (this.props.isAuth) {
        return <Comp {...this.props} />
      }

      return null
    }
  }

  const mapStateToProps = (state) => ({
    token: state.auth.token,
    username: state.auth.username,
    isAuth: state.auth.isAuth,
  })

  return connect(mapStateToProps)(AuthenticatedComponent)
}