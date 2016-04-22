import React, { PropTypes } from 'react'
import NavBar from '../components/NavBar'

import '../styles/index.scss'

export const Header = (props) => (
  <div className="Header">
    <NavBar />
  </div>
)

export const Footer = (props) => (
  <div className="Footer">
    Footer #yolo
  </div>
)

export const Wrapper = (props) => (
  <div className="Wrapper">
    <div className="Wrapper-inner">
      <Header />
      <div className="Wrapper-inner-content">
        {props.children}
      </div>
    </div>
    <Footer />
  </div>
)

Wrapper.propTypes = {
  children: PropTypes.node,
}
