import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import AvatarModal from './Avatar/modal'
import AuthBox from './AuthBox'

class NavBar extends Component {

  static propTypes = {
    course: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  };

  render() {
    const { course, isAuthenticated } = this.props

    const courseColor = '#5677fc'

    return (
      <div className="NavBar">
        <AvatarModal course={course} />
        <div className="NavBar-logo">Gejmifü</div>
        <div className="NavBar-nav">
          <Link to="/" onlyActiveOnIndex className="NavBar-nav-link" activeClassName="NavBar-nav-link-active">Home</Link>
          {isAuthenticated && <Link to="/dashboard" className="NavBar-nav-link" activeClassName="NavBar-nav-link-active">Dashboard</Link>}
          {isAuthenticated && <Link to="/study/mathematical-statistics" className="NavBar-nav-link" activeStyle={{ backgroundColor: courseColor, color: 'white' }}>Study</Link>}
        </div>
        <AuthBox />
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  course: state.course,
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, null, null, { pure: false })(NavBar)
