import React, { Component, PropTypes } from 'react'
import { Circle } from './ProgressBar'

import classes from '../styles/Home.scss'

export default class Avatar extends Component {
  static PropTypes = {
    counter: PropTypes.number.isRequired,
  };

  render() {
    console.log(this.props)
    return (
      <div className={classes['avatar']}>
        <Circle
          progress={this.props.counter / 10}
          options={{
            strokeWidth: 12,
            color: '#5677fc',
            duration: 500,
          }}
        initialAnimate />
      </div>
    )
  }
}
