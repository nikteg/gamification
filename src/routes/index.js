import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import HomeContainer from '../containers/HomeContainer'
import NotFound from '../components/NotFound'
import ExperimentContainer from '../containers/ExperimentContainer'
import Chart from '../containers/ChartContainer'
import User from '../containers/UserContainer'
import Users from '../containers/UsersContainer'
import requireAuth from '../components/AuthenticatedComponent'
import Task from '../components/Task'

import { Wrapper } from '../layout'

export default (
  <Route path="/" component={Wrapper}>
    <IndexRoute component={HomeContainer} />
    <Route path="/experiment" component={ExperimentContainer} />
    <Route path="/404" component={NotFound} />
    <Route path="/work" component={Task} />
    <Route path="/users">
      <IndexRoute component={Users} />
      <Route path=":username" component={User} />
    </Route>
    <Route path="/stats" component={requireAuth(Chart)} />
    <Redirect from="*" to="/404" />
  </Route>
)
