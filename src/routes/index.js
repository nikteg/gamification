import React, { Component, PropTypes } from 'react'
import { Route, IndexRoute, Redirect, Link } from 'react-router'
import HomeContainer from '../containers/HomeContainer'
import NotFound from '../components/NotFound'
import Chart from '../components/Chart'
import Navbar from '../components/Navbar'
import Avatar from '../components/Avatar'

import classes from '../styles/Home.scss'

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <div className={classes['header']}>
          <Avatar />
          <nav>
            <Link to="/" onlyActiveOnIndex activeClassName={classes['active']}>Startsida</Link>
            <Link to="/stats" activeClassName={classes['active']}>Statistik</Link>
            <Link to="/404" activeClassName={classes['active']}>404 not found</Link>
          </nav>
          <div className={classes['profile']}>
            Anders Andersson
            <div className={classes['profile-image']} />
          </div>
        </div>
        <div className={classes['content']}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ HomeContainer } />
    <Route path="/404" component={ NotFound } />
    <Route path="/stats" component={ Chart } />
    <Redirect from="*" to="/404" />
  </Route>
)
