import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import AvatarModal from './Avatar/modal'

class NavBar extends Component {

  static propTypes = {
    course: PropTypes.object.isRequired,
  };

  render() {
    const { course } = this.props

    const courseColor = course.started && '#5677fc' || '#37474F'

    return (
      <div className="NavBar">
        <AvatarModal course={course} />
        <div className="NavBar-logo">Gamif</div>
        <div className="NavBar-nav">
          <Link to="/" onlyActiveOnIndex className="NavBar-nav-link" activeClassName="NavBar-nav-link-active">Dashboard</Link>
          <Link to={course.started ? '/study/mathematical-statistics' : '/study'} className="NavBar-nav-link" activeStyle={{ backgroundColor: courseColor, color: 'white' }}>Study</Link>
          <Link to="/users" className="NavBar-nav-link" activeClassName="NavBar-nav-link-active">Members</Link>
          <Link to="/tex" className="NavBar-nav-link" activeClassName="NavBar-nav-link-active">TeX Test</Link>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  course: state.course,
})

export default connect(mapStateToProps, null, null, { pure: false })(NavBar)
