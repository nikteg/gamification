import React, { PropTypes } from 'react'
import '../styles/study-streak.scss'

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function isSameDate(date1, date2) {
  return (
    date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate()
  )
}

function getDaysInMonth(month, year) {
  const date = new Date(year, month, 1)
  const days = []

  while (date.getMonth() === month) {
    days.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }

  return days
}

const StudyStreak = ({ monthsToDisplay = 4, studyDays = [] }) => {
  const today = new Date()
  const currentYear = today.getYear()
  const currentMonth = today.getMonth()
  const months = []

  for (let i = monthsToDisplay; i >= 0; i--) {
    const monthNumber = (currentMonth - i >= 0)
      ? currentMonth - i
      : monthNames.length + (currentMonth - i)

    months.push(monthNumber)
  }

  return (
    <div className="StudyStreak">
      {months.map(month => (
        <div className="StudyStreak-month" key={month}>

          <p className="StudyStreak-monthName">{monthNames[month]}</p>

          <div className="StudyStreak-days">

            {getDaysInMonth(month, currentYear).map(day => (
              <div
                className="StudyStreak-day"
                key={day}
                style={{
                  background: (isSameDate(day, today)) ? '#BBFFCD' : '#ddd',
                  borderColor: (isSameDate(day, today)) ? '#2BC253' : 'white',
                }}
              />
            ))}

          </div>

        </div>
      ))}
    </div>
  )
}

StudyStreak.propTypes = {
  monthsToDisplay: PropTypes.number.isRequired,
  studyDays: PropTypes.array.isRequired,
}

export default StudyStreak
