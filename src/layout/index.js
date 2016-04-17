import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import AuthBox from '../containers/AuthBoxContainer'
import Avatar from '../components/Avatar'

import '../styles/index.scss'

export const Header = (props) => (
  <div className="main-header">
    <Avatar />
    <nav>
      <Link to="/" onlyActiveOnIndex activeClassName="active">Startsida</Link>
      <Link to="/stats" activeClassName="active">Statistik</Link>
      <Link to="/404" activeClassName="active">404 not found</Link>
      <Link to="/users" activeClassName="active">Users</Link>
    </nav>
    <AuthBox />
  </div>
)

export const Footer = (props) => (
  <div className="main-footer">
    Footer #yolo
  </div>
)

export const Wrapper = (props) => (
  <div className="main-outer-wrapper">
    <div className="main-inner-wrapper">
      <Header />
      <div className="main-content">
        {props.children}
      </div>
    </div>
    <Footer />
  </div>
)

Wrapper.propTypes = {
  children: PropTypes.node,
}
