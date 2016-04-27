import React, { PropTypes } from 'react'
import { Circle } from '../ProgressBar'
import classnames from 'classnames'

const Icons = {
  'exercise': (
    <svg viewBox="0 0 24 24">
      <path d="M12 3l11.016 6v8.016h-2.016v-6.938l-9 4.922-11.016-6zM5.016 13.172l6.984 3.844 6.984-3.844v4.031l-6.984 3.797-6.984-3.797v-4.031z"></path>
    </svg>
  ),
  'experiment': (
    <svg id="icon-extension" viewBox="-1 0 24 24">
      <path d="M20.484 11.016c1.359 0 2.531 1.125 2.531 2.484s-1.172 2.484-2.531 2.484h-1.5v4.031c0 1.078-0.891 1.969-1.969 1.969h-3.797v-1.5c0-1.5-1.219-2.672-2.719-2.672s-2.719 1.172-2.719 2.672v1.5h-3.797c-1.078 0-1.969-0.891-1.969-1.969v-3.797h1.5c1.5 0 2.672-1.219 2.672-2.719s-1.172-2.719-2.672-2.719h-1.5v-3.797c0-1.078 0.891-1.969 1.969-1.969h4.031v-1.5c0-1.359 1.125-2.531 2.484-2.531s2.484 1.172 2.484 2.531v1.5h4.031c1.078 0 1.969 0.891 1.969 1.969v4.031h1.5z"></path>
    </svg>
  ),
  'info': (
    <svg id="icon-extension" viewBox="0 0 24 24">
      <path d="M20.016 12v-8.016h-5.016v8.016l2.484-1.5zM20.016 2.016c1.078 0 1.969 0.891 1.969 1.969v12c0 1.078-0.891 2.016-1.969 2.016h-12c-1.078 0-2.016-0.938-2.016-2.016v-12c0-1.078 0.938-1.969 2.016-1.969h12zM3.984 6v14.016h14.016v1.969h-14.016c-1.078 0-1.969-0.891-1.969-1.969v-14.016h1.969z"></path>
    </svg>
  ),
  'challenge': (
    <svg id="icon-extension" viewBox="0 0 24 24">
      <path d="M16.5 9c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM16.5 18c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM12 13.5c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM7.5 9c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM7.5 18c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM18.984 3c1.078 0 2.016 0.938 2.016 2.016v13.969c0 1.078-0.938 2.016-2.016 2.016h-13.969c-1.078 0-2.016-0.938-2.016-2.016v-13.969c0-1.078 0.938-2.016 2.016-2.016h13.969z"></path>
    </svg>
  ),
}

const ProgressCircle = function(props) {
  return (
    <div className={classnames('ProgressCircle', { 'ProgressCircle-active': props.active }) }>
      <div className="ProgressCircle-circle">
        <div className="ProgressCircle-circle-icon">{Icons[props.type] || Icons['info']}</div>
        <Circle
          progress={props.progress}
          options={{
            strokeWidth: 12,
            color: '#8BC34A',
            duration: 500,
            trailColor: '#263238',
          }} />
      </div>
    </div>
  )
}

ProgressCircle.propTypes = {
  type: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
}

export default ProgressCircle
