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

    return (
      <div className="NavBar">
        <AvatarModal course={course} />
        <div className="NavBar-logo">Gamif</div>
        <div className="NavBar-nav">
          <Link to="/" onlyActiveOnIndex className="NavBar-nav-link" activeClassName="NavBar-nav-link-active">Startsida</Link>
          <Link to="/work" className="NavBar-nav-link NavBar-nav-link-work" activeClassName="NavBar-nav-link-work-active">Plugga</Link>
          <Link to="/users" className="NavBar-nav-link" activeClassName="NavBar-nav-link-active">Medlemmar</Link>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  course: state.course,
})

export default connect(mapStateToProps, null, null, { pure: false })(NavBar)
