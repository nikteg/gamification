import React, { Component, PropTypes } from 'react'

// const Icons = {
//   'exercise': (
//     <svg viewBox="0 0 24 24">
//       <path d="M12 3l11.016 6v8.016h-2.016v-6.938l-9 4.922-11.016-6zM5.016 13.172l6.984 3.844 6.984-3.844v4.031l-6.984 3.797-6.984-3.797v-4.031z"></path>
//     </svg>
//   ),
//   'experiment': (
//     <svg viewBox="-1 0 24 24">
//       <path d="M20.484 11.016c1.359 0 2.531 1.125 2.531 2.484s-1.172 2.484-2.531 2.484h-1.5v4.031c0 1.078-0.891 1.969-1.969 1.969h-3.797v-1.5c0-1.5-1.219-2.672-2.719-2.672s-2.719 1.172-2.719 2.672v1.5h-3.797c-1.078 0-1.969-0.891-1.969-1.969v-3.797h1.5c1.5 0 2.672-1.219 2.672-2.719s-1.172-2.719-2.672-2.719h-1.5v-3.797c0-1.078 0.891-1.969 1.969-1.969h4.031v-1.5c0-1.359 1.125-2.531 2.484-2.531s2.484 1.172 2.484 2.531v1.5h4.031c1.078 0 1.969 0.891 1.969 1.969v4.031h1.5z"></path>
//     </svg>
//   ),
//   'info': (
//     <svg viewBox="0 0 24 24" width="100" height="100" x="72" y="72">
//       <path d="M20.016 12v-8.016h-5.016v8.016l2.484-1.5zM20.016 2.016c1.078 0 1.969 0.891 1.969 1.969v12c0 1.078-0.891 2.016-1.969 2.016h-12c-1.078 0-2.016-0.938-2.016-2.016v-12c0-1.078 0.938-1.969 2.016-1.969h12zM3.984 6v14.016h14.016v1.969h-14.016c-1.078 0-1.969-0.891-1.969-1.969v-14.016h1.969z"></path>
//     </svg>
//   ),
//   'challenge': (
//     <svg viewBox="0 0 24 24">
//       <path d="M16.5 9c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM16.5 18c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM12 13.5c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM7.5 9c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM7.5 18c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM18.984 3c1.078 0 2.016 0.938 2.016 2.016v13.969c0 1.078-0.938 2.016-2.016 2.016h-13.969c-1.078 0-2.016-0.938-2.016-2.016v-13.969c0-1.078 0.938-2.016 2.016-2.016h13.969z"></path>
//     </svg>
//   ),
// }

const checkIcon = (
  <svg viewBox="-12 -12 40 40" className="ProgressCircle-check">
    <path d="M13.5 2l-7.5 7.5-3.5-3.5-2.5 2.5 6 6 10-10z" fill="8BC34A#"></path>
  </svg>
)

class ProgressCircle extends Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
  };

  render() {
    const { progress } = this.props

    const radius = 90
    const circumference = (Math.PI * (2 * radius))
    const strokePercentage = circumference - ((progress) * circumference)

    return (
      <svg width="240" height="240" className="ProgressCircle" viewBox="0 0 240 240">
        <circle
          className="ProgressCircle-background"
          r="90"
          cy="120"
          cx="120"
          strokeWidth="30"
          stroke="#263238"
          fill="#263238" />
        <circle
          ref={c => this.circle = c}
          className="ProgressCircle-progress"
          r="90"
          cy="120"
          cx="120"
          stroke="#8A6FD5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          fill="none"
          style={{ strokeWidth: 6 + 12 * progress, strokeDashoffset: strokePercentage }} />
        {progress !== 1 && <text x="120" y="120" fontSize="55" dy="16" textAnchor="middle" fill="#E0E0E0">{`${parseInt(progress * 100, 10)}%`}</text>}
        {progress === 1 && checkIcon}
      </svg>
    )
  }

}

export default ProgressCircle
