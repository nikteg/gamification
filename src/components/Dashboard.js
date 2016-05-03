import React, { PropTypes } from 'react'
import DashboardBox from './DashboardBox'
import StudyStreak from './StudyStreak'
import RecentActivity from './RecentActivity'
import { calcProgress } from '../selectors/chapter-progress.js'

const Home = ({ chapters, currentChapter, progress }) => (
  <div className="Dashboard">

    <div className="Dashboard-section">
      <h2 className="Dashboard-sectionTitle">Resume Learning</h2>
      {chapters
        .filter((chapter, i) => {
          if (currentChapter === i || i === 2) {
            chapter.number = i
            return chapter
          }
        })
        .map((chapter, i) => (
          <DashboardBox
            key={chapter.number}
            chapter={chapter.number + 1}
            title={chapter.name}
            styles={{}}
            completed={calcProgress(progress[chapter.number])}
            url={`/study/mathematical-statistics/chapter/${chapter.number + 1}`}
          />
      ))}
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

Home.propTypes = {
  chapters: PropTypes.array.isRequired,
}

export default Home
