import React, { Component } from 'react'
import DashboardBox from './DashboardBox'
import StudyStreak from './StudyStreak'
import RecentActivity from './RecentActivity'
import '../styles/home.scss'

export default class Home extends Component {
  render() {
    return (
      <div className="Dashboard">

        <div className="Dashboard-section">
          <h2 className="Dashboard-sectionTitle">Resume Learning</h2>
          <DashboardBox chapter={2} title="Probability" completed={22} />
          <DashboardBox chapter={3} title="Distributions" completed={78} />
        </div>

        <div className="Dashboard-section">

          <div className="Dashboard-subSection">
            <h2 className="Dashboard-sectionTitle">Study Streak</h2>
            <StudyStreak monthsToDisplay={5} studyDays={[]} />
          </div>

          <div className="Dashboard-subSection">
            <h2 className="Dashboard-sectionTitle">Recent Activity</h2>
            <RecentActivity activities={[
              'Completed task in chapter 3',
              'Received the "Geek" achievemet',
              'Received the "Experiment" achievemet',
              'Completed chapther 2',
            ]} />
          </div>

        </div>

      </div>
    )
  }
}
