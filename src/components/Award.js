import React, { Component, PropTypes } from 'react'

import * as AwardTypes from '../constants/AwardTypes'

const awardIcons = {
  [AwardTypes.PACMAN]: (
    <svg className="Award-icon" viewBox="-1 -1 17 17" width="80" height="80" x="33" y="24">
      <path d="M15.074 2.794c-1.467-1.71-3.644-2.794-6.074-2.794-4.418 0-8 3.582-8 8s3.582 8 8 8c2.43 0 4.607-1.084 6.074-2.794l-5.074-5.206 5.074-5.206zM11 1.884c0.616 0 1.116 0.499 1.116 1.116s-0.499 1.116-1.116 1.116-1.116-0.499-1.116-1.116c0-0.616 0.499-1.116 1.116-1.116z"></path>
    </svg>
  ),
  [AwardTypes.TIME]: (
    <svg className="Award-icon" viewBox="0 0 16 16" width="80" height="80" x="40" y="26">
      <path d="M10.293 11.707l-3.293-3.293v-4.414h2v3.586l2.707 2.707zM8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6z"></path>
    </svg>
  ),
  [AwardTypes.CHILD]: (
    <svg className="Award-icon" viewBox="0 0 24 24" width="80" height="80" x="40" y="26">
      <path d="M7.5 14.016h9c-0.75 1.781-2.484 3-4.5 3s-3.75-1.219-4.5-3zM12 18.984c3.188 0 5.87-2.101 6.703-5.016 0.094 0 0.188 0.047 0.281 0.047 1.078 0 2.016-0.938 2.016-2.016s-0.938-2.016-2.016-2.016c-0.094 0-0.188 0.047-0.281 0.047-0.833-2.914-3.515-5.016-6.703-5.016s-5.87 2.101-6.703 5.016c-0.094 0-0.188-0.047-0.281-0.047-1.078 0-2.016 0.938-2.016 2.016s0.938 2.016 2.016 2.016c0.094 0 0.188-0.047 0.281-0.047 0.833 2.914 3.515 5.016 6.703 5.016zM22.922 12.656c-0.234 1.5-1.313 2.766-2.766 3.188-1.325 2.771-4.445 5.156-8.156 5.156-3.698 0-6.821-2.346-8.109-5.156-1.453-0.422-2.578-1.688-2.813-3.188-0.047-0.188-0.094-0.422-0.094-0.656s0.047-0.469 0.094-0.656c0.234-1.5 1.359-2.766 2.813-3.188 0.516-1.125 1.219-2.109 2.156-2.906 1.594-1.406 3.656-2.25 5.953-2.25 3.764 0 6.802 2.304 8.109 5.156 1.453 0.422 2.578 1.688 2.813 3.188 0.047 0.188 0.094 0.422 0.094 0.656s-0.047 0.469-0.094 0.656zM8.25 10.5c0-0.703 0.563-1.266 1.266-1.266s1.219 0.563 1.219 1.266-0.516 1.266-1.219 1.266-1.266-0.563-1.266-1.266zM13.266 10.5c0-0.703 0.516-1.266 1.219-1.266s1.266 0.563 1.266 1.266-0.563 1.266-1.266 1.266-1.219-0.563-1.219-1.266z"></path>
    </svg>
  ),
}

export default class Award extends Component {
  static propTypes = {
    award: PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf(Object.keys(AwardTypes)).isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    }),
  };

  render() {
    const { award } = this.props

    return (
      <svg className="Award" viewBox="0 0 160 160">
        <svg className="Award-seal" viewBox="0 0 32 32">
          <circle
            className="Award-seal-background"
            r="11"
            cx="16"
            cy="13"
            fill="#263238" />
          <path className="Award-seal-outer" d="M25.329,20.994c0.132-0.035,0.282-0.045,0.448-0.02c0.716,0.109,1.035-0.33,0.709-0.975c-0.324-0.647,0-1.21,0.722-1.25    c0.724-0.042,0.944-0.538,0.492-1.103c-0.453-0.564-0.253-1.183,0.444-1.373c0.699-0.189,0.812-0.723,0.25-1.18    c-0.561-0.458-0.491-1.104,0.15-1.438c0.645-0.331,0.645-0.871,0-1.204c-0.643-0.332-0.711-0.978-0.15-1.436    c0.562-0.458,0.449-0.988-0.25-1.179c-0.697-0.19-0.897-0.809-0.444-1.374c0.452-0.563,0.231-1.06-0.492-1.101    c-0.722-0.042-1.046-0.604-0.722-1.249c0.326-0.647,0.007-1.087-0.709-0.976c-0.715,0.108-1.149-0.373-0.965-1.073    c0.184-0.7-0.219-1.063-0.896-0.808c-0.678,0.256-1.202-0.125-1.168-0.848c0.035-0.724-0.436-0.995-1.043-0.602    c-0.609,0.391-1.202,0.127-1.318-0.588c-0.117-0.716-0.633-0.883-1.146-0.374c-0.514,0.51-1.15,0.374-1.412-0.3    s-0.803-0.729-1.198-0.126c-0.215,0.328-0.503,0.46-0.787,0.433l0,0c-0.286,0.031-0.577-0.103-0.794-0.433    c-0.396-0.604-0.936-0.548-1.198,0.126s-0.898,0.81-1.412,0.3c-0.515-0.51-1.03-0.343-1.147,0.373    c-0.117,0.715-0.711,0.979-1.319,0.588C9.364,1.413,8.894,1.684,8.929,2.408C8.962,3.129,8.438,3.51,7.761,3.254    C7.084,3,6.681,3.362,6.865,4.062S6.615,5.245,5.9,5.135C5.184,5.024,4.865,5.463,5.191,6.111c0.324,0.646,0,1.207-0.722,1.249    c-0.723,0.041-0.944,0.537-0.492,1.1C4.431,9.026,4.23,9.645,3.533,9.834c-0.699,0.19-0.811,0.721-0.25,1.179    s0.492,1.104-0.15,1.436c-0.645,0.333-0.645,0.873,0,1.204c0.643,0.334,0.711,0.979,0.15,1.438    c-0.561,0.457-0.448,0.989,0.25,1.18c0.698,0.19,0.898,0.809,0.445,1.373c-0.452,0.563-0.231,1.061,0.492,1.103    c0.722,0.04,1.046,0.603,0.722,1.25C4.865,20.64,5.184,21.08,5.9,20.97c0.167-0.026,0.316-0.017,0.448,0.02l-3.977,7.447h4.2    l2.134,3.236l4.018-6.617c0.445-0.231,0.912-0.048,1.127,0.505c0.262,0.675,0.803,0.73,1.198,0.126    c0.215-0.327,0.503-0.459,0.787-0.432v0.005c0.286-0.031,0.577,0.102,0.794,0.432c0.396,0.604,0.936,0.55,1.198-0.126    c0.215-0.553,0.683-0.736,1.127-0.505l4.019,6.617l2.133-3.236h4.201L25.329,20.994z M20.993,22.49l-0.151,0.083    c-1.486,0.788-3.181,1.239-4.979,1.239c-0.007,0-0.02-0.007-0.02-0.007c-0.009,0-0.018,0.001-0.027,0.001    c-1.799,0-3.493-0.451-4.979-1.24l-0.152-0.083c-3.259-1.8-5.472-5.253-5.472-9.214c0-5.809,4.757-10.535,10.603-10.535    c0.007,0,0.02,0.007,0.02,0.007c0.009,0,0.018-0.001,0.027-0.001c5.846,0,10.603,4.727,10.603,10.535    C26.464,17.236,24.252,20.689,20.993,22.49z" />
        </svg>
        {awardIcons[award.type]}
      </svg>
    )
  }
}
