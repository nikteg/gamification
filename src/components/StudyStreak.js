import React from 'react'

const months = [ 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
const weeks = [ 1, 2, 3, 4 ]
const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]

function getDaysInMonth(month, year) {
  const date = new Date(year, month, 1)
  const days = []

  while (date.getMonth() === month) {
    days.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }

  return days
}

const StudyStreak = () => (
  <div>
    {months.map(month => {
      weeks.map(week => (
        <div className="StudyStreak-week" key={week}>
          {days.map(day => (
            <div className="StudyStreak-day" key={day}></div>
          ))}
        </div>
      ))

      return (
        <div className="StudyStreak-month" key={month}>

          <p>{month}</p>

          <div className="StudyStreak-weeks">
            {weeks}
          </div>

        </div>
      )
    })}
  </div>
)

export default StudyStreak
