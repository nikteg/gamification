import React, { Component, PropTypes } from 'react'
import { Route, IndexRoute, Redirect, Link } from 'react-router'
import HomeContainer from '../containers/HomeContainer'
import NotFound from '../components/NotFound'
import Chart from '../containers/ChartContainer'
// import Navbar from '../components/Navbar'
import Avatar from '../containers/AvatarContainer'
import AuthBox from '../containers/AuthBoxContainer'
import User from '../containers/UserContainer'
import Users from '../containers/UsersContainer'
import requireAuth from '../components/AuthenticatedComponent'

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
            <Link to="/users" activeClassName={classes['active']}>Users</Link>
          </nav>
          <AuthBox />
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
    <IndexRoute component={HomeContainer} />
    <Route path="/404" component={NotFound} />
    <Route path="/users">
      <IndexRoute component={Users} />
      <Route path=":username" component={User} />
    </Route>
    <Route path="/stats" component={requireAuth(Chart)} />
    <Redirect from="*" to="/404" />
  </Route>
)
