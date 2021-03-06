import React, { Component, PropTypes } from 'react'
import Award from './Award'

import * as AwardTypes from '../constants/AwardTypes'

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

    const awards = [
      { name: '', type: AwardTypes.PACMAN, date: new Date() },
      { name: '', type: AwardTypes.TIME, date: new Date() },
    ]

    return (
      <div>
        <ul>
          <li>ID: {user.id}</li>
          <li>Username: {user.username}</li>
          {awards.map((award, i) => <Award key={i} award={award} />)}
        </ul>
      </div>
    )
  }
}
