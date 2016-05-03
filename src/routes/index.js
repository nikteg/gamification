import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'
import DashboardContainer from '../containers/DashboardContainer'
import NotFound from '../components/NotFound'
import ExperimentContainer from '../containers/ExperimentContainer'
import Chart from '../containers/ChartContainer'
import User from '../containers/UserContainer'
import ChaptersContainer from '../containers/ChaptersContainer'
import Users from '../containers/UsersContainer'
import requireAuth from '../components/AuthenticatedComponent'
import Chapters from '../containers/ChaptersContainer'
import CourseBar from '../components/CourseBar'
import Chapter from '../components/Chapter'
import Task from '../components/Task'

import { Wrapper } from '../layout'

const Home = (props) => (
  <div className="Home">
    Welcome to this website
  </div>
)

const Study = (props) => (
  <div className="Study">
    <CourseBar />
    <Link to="/study/mathematical-statistics">Mathematical Statistics</Link>
  </div>
)

export default (
  <Route path="/" component={Wrapper}>
    <IndexRoute component={Home} />
    <Route path="experiment" component={ExperimentContainer} />
    <Route path="chapters" component={ChaptersContainer} />
    <Route path="404" component={NotFound} />
    <Route path="dashboard" component={requireAuth(DashboardContainer)} />
    <Route path="study">
      <IndexRoute component={requireAuth(Study)} />
      <Route path=":courseSlug">
        <IndexRoute component={requireAuth(Chapters)} />
        <Route path="chapter/:chapterID">
          <IndexRoute component={requireAuth(Chapter)} />
          <Route path="overview/:taskID" component={requireAuth(Task)} />
          <Route path="exercise/:taskID" component={requireAuth(Task)} />
          <Route path="experiment/:taskID" component={requireAuth(Task)} />
        </Route>
      </Route>
    </Route>
    <Route path="users">
      <IndexRoute component={Users} />
      <Route path=":username" component={User} />
    </Route>
    <Route path="stats" component={requireAuth(Chart)} />
    <Route path="*" component={NotFound} />
  </Route>
)
