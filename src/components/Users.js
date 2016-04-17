import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Users extends Component {
  static propTypes = {
    fetching: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.fetchUsers()
  }

  render() {
    const { users, fetching } = this.props

    if (fetching) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div>
        <ul>
          {users.map(user => <li key={user.id}><Link to={`/users/${user.username}`}>{user.username}</Link></li>)}
        </ul>
      </div>
    )
  }
}
