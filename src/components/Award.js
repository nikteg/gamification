import React, { Component, PropTypes } from 'react'

export const AWARD_TYPES = {
  PACMAN: 'PACMAN',
  TIME: 'TIME',
}

const awards = {
  [AWARD_TYPES.PACMAN]: <path d="M15.074 2.794c-1.467-1.71-3.644-2.794-6.074-2.794-4.418 0-8 3.582-8 8s3.582 8 8 8c2.43 0 4.607-1.084 6.074-2.794l-5.074-5.206 5.074-5.206zM11 1.884c0.616 0 1.116 0.499 1.116 1.116s-0.499 1.116-1.116 1.116-1.116-0.499-1.116-1.116c0-0.616 0.499-1.116 1.116-1.116z"></path>,
  [AWARD_TYPES.TIME]: <path d="M10.293 11.707l-3.293-3.293v-4.414h2v3.586l2.707 2.707zM8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6z"></path>,
}

export default class Award extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
  };

  render() {
    return (
      <svg className="award" viewBox="0 0 160 160">
        <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#726ca0" />
              <stop offset="100%" stopColor="#5370a3" />
            </linearGradient>
        </defs>
        <circle cx="50%" cy="50%" r="80" fill="url(#gradient)" />
        <svg viewBox="0 0 16 16" width="50%" height="50%" x="25%" y="25%">
          {awards[this.props.type]}
        </svg>
      </svg>
    )
  }
}
