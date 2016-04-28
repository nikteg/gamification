import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ProgressCircle from './ProgressCircle'

class Avatar extends Component {
  static propTypes = {
    chapterProgress: PropTypes.array.isRequired,
  };

  render() {
    const { chapterProgress } = this.props

    const progress = chapterProgress.reduce((progress, done) => progress + (done ? 1 : 0), 0) / chapterProgress.length

    return (
      <div className="Avatar">
        <ProgressCircle progress={progress} type={'info'} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  avatarMenu: state.avatar,
})

export default connect(mapStateToProps)(Avatar)
