import React, { Component, PropTypes } from 'react'

class TaskIcon extends Component {

  static propTypes = {
    type: PropTypes.oneOf('overview', 'exercise', 'experiment'),
  };

  render() {
    const { type } = this.props

    switch (type) {
      case 'overview':
        return (
          <svg className="TaskIcon" viewBox="0 0 24 24" title="Overview">
            <path d="M3 3h18v2.016h-18v-2.016zM3 21v-2.016h18v2.016h-18zM3 12.984v-1.969h18v1.969h-18zM15 6.984v2.016h-12v-2.016h12zM15 15v2.016h-12v-2.016h12z"></path>
          </svg>
        )
      case 'exercise':
        return (
          <svg className="TaskIcon" viewBox="0 0 24 24" title="Exercise">
            <path d="M6.984 5.016h14.016v1.969h-14.016v-1.969zM6.984 12.984v-1.969h14.016v1.969h-14.016zM6.984 18.984v-1.969h14.016v1.969h-14.016zM3.984 16.5c0.844 0 1.5 0.703 1.5 1.5s-0.703 1.5-1.5 1.5-1.5-0.703-1.5-1.5 0.656-1.5 1.5-1.5zM3.984 4.5c0.844 0 1.5 0.656 1.5 1.5s-0.656 1.5-1.5 1.5-1.5-0.656-1.5-1.5 0.656-1.5 1.5-1.5zM3.984 10.5c0.844 0 1.5 0.656 1.5 1.5s-0.656 1.5-1.5 1.5-1.5-0.656-1.5-1.5 0.656-1.5 1.5-1.5z"></path>
          </svg>
        )
      case 'experiment':
        return (
          <svg className="TaskIcon" viewBox="0 0 24 24" title="Experiment">
            <path d="M20.484 11.016c1.359 0 2.531 1.125 2.531 2.484s-1.172 2.484-2.531 2.484h-1.5v4.031c0 1.078-0.891 1.969-1.969 1.969h-3.797v-1.5c0-1.5-1.219-2.672-2.719-2.672s-2.719 1.172-2.719 2.672v1.5h-3.797c-1.078 0-1.969-0.891-1.969-1.969v-3.797h1.5c1.5 0 2.672-1.219 2.672-2.719s-1.172-2.719-2.672-2.719h-1.5v-3.797c0-1.078 0.891-1.969 1.969-1.969h4.031v-1.5c0-1.359 1.125-2.531 2.484-2.531s2.484 1.172 2.484 2.531v1.5h4.031c1.078 0 1.969 0.891 1.969 1.969v4.031h1.5z"></path>
          </svg>
        )
      default:
        return null
    }
  }

}

export default TaskIcon
