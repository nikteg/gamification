import React, { Component, PropTypes } from 'react'

export default class Home extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
  };

  render() {
    const { counter, increment } = this.props

    return (
      <div className="container text-center">
        <h1>Welcome to the React Redux Starter Kit</h1>
        <h2>
          Sample Counter:
          <span> {counter}</span>
        </h2>
        <button onClick={() => increment(1)}>
          Increment
        </button>
      </div>
    )
  }
}
