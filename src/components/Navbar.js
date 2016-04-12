import React, { Component, PropTypes } from 'react'
import Avatar from './Avatar'

export default class Navbar extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  };

  render() {
    console.log(this.props)

    return (
      <nav className="navbar">
        <Avatar />
      </nav>
    )
  }
}
