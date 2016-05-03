import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Modal from 'react-modal'

import { actions as authActions } from '../actions/auth'

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

class AuthBox extends Component {
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
        <div className="AuthBox">
          <Link to={`/users/${auth.username}`}>{auth.username}<div className="AuthBox-image" /></Link>
          <button onClick={logoutUser}>Logout</button>
        </div>
      )
    } else {
      return (
        <div className="AuthBox">
          <Modal isOpen={auth.registerModal} onRequestClose={hideRegisterModal} style={customStyles}>
            <div className="AuthBox-modal">
              {auth.registerFail && <p>Something went wrong, username already in use perhaps?</p>}
              <p><input type="text" ref={this.registerPasswordRef} placeholder="Username" /></p>
              <p><input type="password" ref={node => this.registerPasswordInput = node} placeholder="Password" /></p>
              <p><button onClick={this.register}>Register</button></p>
            </div>
          </Modal>
          <p>{auth.statusText}</p>
          <input type="text" ref={node => this.usernameInput = node} placeholder="Username" />
          <input type="password" ref={node => this.passwordInput = node} placeholder="Password" />
          <button onClick={this.login} disabled={auth.isAuthenticating}>Login</button>
          <button onClick={showRegisterModal}>Register</button>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, authActions)(AuthBox)
