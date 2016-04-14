import React, { PropTypes } from 'react'
import { Circle } from '../ProgressBar'
import classnames from 'classnames'

import classes from '../../styles/Avatar.scss'

export const ProgressTypes = {
  DICE: 'DICE',
  LIBRARY: 'LIBRARY',
  CHART: 'CHART',
}

const Icons = {
  [ProgressTypes.DICE]: (
    <svg viewBox="0 0 16 16">
      <path d="M13.5 3h-8c-1.375 0-2.5 1.125-2.5 2.5v8c0 1.375 1.125 2.5 2.5 2.5h8c1.375 0 2.5-1.125 2.5-2.5v-8c0-1.375-1.125-2.5-2.5-2.5zM6.5 14c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5zM6.5 8c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5zM9.5 11c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5zM12.5 14c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5zM12.5 8c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5zM12.949 2c-0.233-1.138-1.245-2-2.449-2h-8c-1.375 0-2.5 1.125-2.5 2.5v8c0 1.204 0.862 2.216 2 2.449v-9.949c0-0.55 0.45-1 1-1h9.949z"></path>
    </svg>
  ),
  [ProgressTypes.LIBRARY]: (
    <svg viewBox="0 0 17 16">
      <path d="M16 15v-1h-1v-6h1v-1h-3v1h1v6h-3v-6h1v-1h-3v1h1v6h-3v-6h1v-1h-3v1h1v6h-3v-6h1v-1h-3v1h1v6h-1v1h-1v1h17v-1h-1z"></path>
      <path d="M8 0h1l8 5v1h-17v-1l8-5z"></path>
    </svg>
  ),
  [ProgressTypes.CHART]: (
    <svg id="icon-pie-chart" viewBox="0 0 16 16">
      <path d="M7 9v-7c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7c0-1.126-0.266-2.189-0.738-3.131l-6.262 3.131zM14.262 3.869c-1.149-2.294-3.521-3.869-6.262-3.869v7l6.262-3.131z"></path>
    </svg>
  ),
}

const ProgressCircle = function(props) {
  return (
    <div className={classnames(classes['progressCircle'], { [classes['active']]: props.active }) }>
      <div className={classes['icon']}>{Icons[props.type]}</div>
      <Circle
        progress={props.progress}
        options={{
          strokeWidth: 12,
          color: '#5677fc',
          duration: 500,
          trailColor: '#ccc',
        }}
      initialAnimate />
    </div>
  )
}

ProgressCircle.propTypes = {
  type: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
}

export default ProgressCircle
