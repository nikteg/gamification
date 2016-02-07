import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import HomeContainer from '../containers/HomeContainer'
import NotFound from '../components/NotFound'

export default (
  <Route path="/">
    <IndexRoute component={HomeContainer} />
    <Route path="/404" component={NotFound} />
    <Redirect from="*" to="/404" />
  </Route>
)
