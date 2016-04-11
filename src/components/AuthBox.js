import React, { Component, PropTypes } from 'react'

import classes from '../styles/Home.scss'

export default class AuthBox extends Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };

  componentDidMount() {
    // DEBUG STUFF
    if (this.usernameInput && this.passwordInput) {
      this.usernameInput.value = 'nikteg'
      this.passwordInput.value = 'test'
    }
  }

  login = (e) => {
    const username = this.usernameInput.value
    const password = this.passwordInput.value

    this.props.loginUser(username, password)
  };

  logout = (e) => {
    this.props.logoutUser()
  };

  render() {
    const { auth } = this.props

    if (auth.isAuthenticated) {
      return (
        <div className={classes['profile']}>
          {`Logged in as ${auth.username}`}
          <div className={classes['profile-image']} />
          <input type="button" value="Logout" onClick={this.logout} />
        </div>
      )
    } else {
      return (
        <div className={classes['profile']}>
          <p>{auth.statusText}</p>
          <input type="text" ref={node => this.usernameInput = node} />
          <input type="password" ref={node => this.passwordInput = node} />
          <input type="button" value="Login" onClick={this.login} disabled={auth.isAuthenticating} />
        </div>
      )
    }
  }
}
