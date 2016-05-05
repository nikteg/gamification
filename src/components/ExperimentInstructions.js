import React, { Component, PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { completeTask } from '../actions/avatar'

class ExperimentInstructions extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    instructions: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired,
    taskNumber: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,

    completeTask: PropTypes.func.isRequired,
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  onDone = (num) => (e) => {
    this.props.completeTask()

    if (num < 4) {
      this.context.router.push(`/study/mathematical-statistics/chapter/1/experiment/${num}`)
    }
  };

  render() {
    const { instructions, title, width, taskNumber, done } = this.props

    return (
      <Motion style={{ width: spring(width), opacity: spring(width > 300 ? 1 : 0) }}>
        {({ opacity, width }) =>
          <div className="Experiment-sidebar" style={{ width, opacity }}>

            <h1 className="Experiment-title">{title}</h1>

            <div className="Experiment-content">{instructions}</div>

            <a className={classnames('Experiment-button', { 'Experiment-button-done': done })} onClick={this.onDone(taskNumber + 1)}>Done</a>
          </div>
        }
      </Motion>
    )
  }

}

const mapStateToProps = (state, props) => {
  const { currentChapter, currentTask, progress } = state.course
  const done = progress[currentChapter][currentTask]

  return {
    done,
  }
}

export default connect(mapStateToProps, { completeTask })(ExperimentInstructions)
