import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Modal from 'react-modal'

import classes from '../styles/Home.scss'

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

export default class AuthBox extends Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
    showRegisterModal: PropTypes.func.isRequired,
    hideRegisterModal: PropTypes.func.isRequired,
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

  register = (e) => {
    const username = this.registerUsernameInput.value
    const password = this.registerPasswordInput.value

    this.props.registerUser(username, password)
  };

  registerPasswordRef = (node) => {
    this.registerUsernameInput = node

    // Focus the username field when the registration modal is opened
    if (node) {
      setTimeout(() => node.focus(), 0)
    }
  };

  render() {
    const { auth, showRegisterModal, hideRegisterModal, logoutUser } = this.props

    if (auth.isAuthenticated) {
      return (
        <div className={classes['profile']}>
          <Link to={`/users/${auth.username}`}>{auth.username}</Link>
          <div className={classes['profile-image']} />
          <input type="button" value="Logout" onClick={logoutUser} />
        </div>
      )
    } else {
      return (
        <div className={classes['profile']}>
          <Modal isOpen={auth.registerModal} onRequestClose={hideRegisterModal} style={customStyles}>
            <div className={classes['register']}>
              {auth.registerFail && <p>Something went wrong, username already in use perhaps?</p>}
              <p><input type="text" ref={this.registerPasswordRef} placeholder="Username" /></p>
              <p><input type="password" ref={node => this.registerPasswordInput = node} placeholder="Password" /></p>
              <p><button onClick={this.register}>Register</button></p>
            </div>
          </Modal>
          <p>{auth.statusText}</p>
          <input type="text" ref={node => this.usernameInput = node} placeholder="Username" />
          <input type="password" ref={node => this.passwordInput = node} placeholder="Password" />
          <input type="button" value="Login" onClick={this.login} disabled={auth.isAuthenticating} />
          <button onClick={showRegisterModal}>Register</button>
        </div>
      )
    }
  }
}
