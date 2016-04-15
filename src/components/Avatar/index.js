import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as avatarActions } from '../../actions/avatar'
import ProgressCircle, { ProgressTypes } from './ProgressCircle'

import Modal from 'react-modal'

import classes from '../../styles/Avatar.scss'

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

class Avatar extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    avatarMenu: PropTypes.bool.isRequired,
    toggleAvatarMenu: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired,
    changeChapter: PropTypes.func.isRequired,
  };

  chapterProgress = (tasks) => tasks.reduce((tot, task) => tot + task.progress, 0) / tasks.length / 100

  menu = () => {
    return this.props.course.chapters.map((chapter, i) => {
      return (
        <div className={classes['menuItem']}>
          <ProgressCircle
            key={i}
            progress={this.chapterProgress(chapter.tasks)}
            type={chapter.icon}
            active={i === this.props.course.currentChapter}
            label={chapter.name}
            onClick={() => this.changeChapter(i)} />
          <div className={classes['separator']} />
        </div>
      )
    })
  };

  changeChapter = (index) => {
    this.props.changeChapter(index)
    this.props.toggleAvatarMenu()
  };

  render() {
    const { avatarMenu, toggleAvatarMenu, course } = this.props

    const currentChapter = course.chapters[course.currentChapter]

    return (
      <div className={classes['avatar']}>
        <Modal isOpen={avatarMenu} onRequestClose={toggleAvatarMenu} style={customStyles}>
          <h1>{course.name}</h1>
          <div className={classes['avatarMenu']}>
            {this.menu()}
          </div>
        </Modal>
        <a onClick={toggleAvatarMenu}>
          <ProgressCircle
            progress={this.chapterProgress(currentChapter.tasks)}
            type={currentChapter.icon}
            label={currentChapter.name}
            active />
        </a>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  avatarMenu: state.avatar,
  course: state.course,
})

export default connect(mapStateToProps, avatarActions)(Avatar)
