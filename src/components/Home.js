import React, { Component, PropTypes } from 'react'
import classes from '../styles/Home.scss'

export default class Home extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
  };

  render() {
    const { counter, increment, loginUser } = this.props

    console.log(this.props)

    return (
      <div className="container text-center">
        <h1>Welcome to the React Redux Starter Kit</h1>
        <h2>
          Sample Counter:
          <span className={classes['counter--green']}> {counter}</span>
        </h2>
        <button onClick={() => increment(1)}>
          Increment
        </button>
        <button onClick={() => loginUser('username', 'password')}>
          Login
        </button>
      </div>
    )
  }
}
