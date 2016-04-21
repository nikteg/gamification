import React from 'react'
import '../styles/recent-activity.scss'

const RecentActivity = ({ activities }) => (
  <ul className="RecentActivity">
    {activities.map((activity, i) => (
      <li key={i} className="RecentActivity-item">{activity}</li>
    ))}
  </ul>
)

export default RecentActivity
