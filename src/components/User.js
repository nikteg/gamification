import React, { Component, PropTypes } from 'react'
import Award, { AWARD_TYPES } from './Award'

export default class User extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    fetchUser: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.props.fetchUser(this.props.params.username)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.username !== this.props.params.username) {
      this.props.fetchUser(nextProps.params.username)
    }
  }

  render() {
    const { user } = this.props

    if (user.fetching) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div>
        <ul>
          <li>ID: {user.id}</li>
          <li>Username: {user.username}</li>
          <Award type={AWARD_TYPES.PACMAN} />
          <Award type={AWARD_TYPES.TIME} />
        </ul>
      </div>
    )
  }
}
