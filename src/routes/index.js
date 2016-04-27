import React from 'react'
import { Route, IndexRoute, Redirect, Link } from 'react-router'
import HomeContainer from '../containers/HomeContainer'
import NotFound from '../components/NotFound'
import ExperimentContainer from '../containers/ExperimentContainer'
import Chart from '../containers/ChartContainer'
import User from '../containers/UserContainer'
import ChaptersContainer from '../containers/ChaptersContainer'
import Users from '../containers/UsersContainer'
import requireAuth from '../components/AuthenticatedComponent'
import Chapters from '../containers/ChaptersContainer'
import TeX from '../components/TeX'
import CourseBar from '../components/CourseBar'
import Chapter from '../components/Chapter'

import { Wrapper } from '../layout'

const TeXTest = (props) => (
  <div className="TeXTest">
    Component with formulas: <TeX data={'c = \\pm\\sqrt{a^2 + b^2}'} />. Cool.
  </div>
)

const Study = (props) => (
  <div className="Study">
    <CourseBar />
    <Link to="/study/mathematical-statistics">Mathematical Statistics</Link>
  </div>
)

const Exercise = (props) => (
  <div className="Exercise">
    Exercise goes here
  </div>
)

const Experiment = (props) => (
  <div className="Experiment">
    Experiment goes here
  </div>
)

export default (
  <Route path="/" component={Wrapper}>
    <IndexRoute component={HomeContainer} />
    <Route path="experiment" component={ExperimentContainer} />
    <Route path="chapters" component={ChaptersContainer} />
    <Route path="404" component={NotFound} />
    <Route path="study">
      <IndexRoute component={Study} />
      <Route path=":courseSlug">
        <IndexRoute component={Chapters} />
        <Route path="chapter/:chapterID">
          <IndexRoute component={Chapter} />
          <Route path="exercise/:taskID" component={Exercise} />
          <Route path="experiment/:taskID" component={Experiment} />
        </Route>
      </Route>
    </Route>
    <Route path="tex" component={TeXTest} />
    <Route path="users">
      <IndexRoute component={Users} />
      <Route path=":username" component={User} />
    </Route>
    <Route path="stats" component={requireAuth(Chart)} />
  </Route>
)
