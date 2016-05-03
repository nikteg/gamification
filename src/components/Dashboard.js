import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import DashboardBox from './DashboardBox'
import StudyStreak from './StudyStreak'
import RecentActivity from './RecentActivity'
import { calcProgress } from '../selectors/chapter-progress.js'

import COURSES_DATA from '../courses'

const Dashboard = ({ chapters, currentChapter, progress }) => (
  <div className="Dashboard">

    {chapters.length > 0 && <div className="Dashboard-section">
      <h2 className="Dashboard-sectionTitle">Resume Learning</h2>
      {chapters.map((chapter, i) => (
          <DashboardBox
            key={chapter.number}
            chapter={chapter.number + 1}
            title={chapter.name}
            styles={{}}
            completed={calcProgress(progress[chapter.number])}
            url={`/study/mathematical-statistics/chapter/${chapter.number + 1}`}
          />
      ))}
    </div>}

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

Dashboard.propTypes = {
  chapters: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  const { currentChapter, progress } = state.course
  const chapters = COURSES_DATA[state.course.courseID].chapters.filter((chapter, i) => {
    chapter.number = i

    const chapterProgress = calcProgress(progress[i])

    return chapterProgress > 0 && chapterProgress < 100
  })

  return {
    currentChapter,
    chapters,
    progress,
  }
}

export default connect(mapStateToProps)(Dashboard)
