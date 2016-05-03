import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import AvatarModal from './Avatar/modal'
import AuthBox from './AuthBox'

import COURSES_DATA from '../courses'

class NavBar extends Component {

  static propTypes = {
    course: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
  };

  render() {
    const { course, isAuthenticated, color } = this.props

    return (
      <div className="NavBar">
        <AvatarModal course={course} />
        <div className="NavBar-logo">Gejmifü</div>
        <div className="NavBar-nav">
          {!isAuthenticated && <Link to="/" onlyActiveOnIndex className="NavBar-nav-link" activeClassName="NavBar-nav-link-active">Home</Link>}
          {isAuthenticated && <Link to="/dashboard" className="NavBar-nav-link" activeClassName="NavBar-nav-link-active">Dashboard</Link>}
          {isAuthenticated && <Link to="/study/mathematical-statistics" className="NavBar-nav-link" activeStyle={{ backgroundColor: color, color: 'white' }}>Study</Link>}
        </div>
        <AuthBox />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  const { course, auth } = state
  const { isAuthenticated } = auth
  const { courseID } = course

  const color = COURSES_DATA[courseID].color

  return {
    course,
    isAuthenticated,
    color,
  }
}

export default connect(mapStateToProps, null, null, { pure: false })(NavBar)
