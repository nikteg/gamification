import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Modal from 'react-modal'
import classnames from 'classnames'

import { toggleAvatarMenu, changeChapter } from '../../actions/avatar'

import COURSES_DATA from '../../courses'

import Avatar from './index'
import ModalCloseButton from '../ModalCloseButton'

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 11,
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

class AvatarModal extends Component {

  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    chapters: PropTypes.array.isRequired,
    progress: PropTypes.array.isRequired,
    currentChapter: PropTypes.number,
    currentTask: PropTypes.number,

    toggleAvatarMenu: PropTypes.func.isRequired,
    changeChapter: PropTypes.func.isRequired,
  };

  render() {
    const { isOpen, name, chapters, progress, currentChapter, toggleAvatarMenu } = this.props

    return (
      <Modal isOpen={isOpen} onRequestClose={toggleAvatarMenu} style={modalStyle}>
        <div className="AvatarModal">
          <ModalCloseButton onClick={toggleAvatarMenu} />
          <div className="AvatarModal-title">{name}</div>
          <div className="AvatarModal-chapters">
            {chapters.map((chapter, i) => (
              <Link
                key={i}
                to={`/study/mathematical-statistics/chapter/${i + 1}`}
                className={classnames('AvatarModal-chapters-avatar', { 'AvatarModal-chapters-avatar-active': currentChapter === i })}>
                <Avatar chapter={chapter} chapterProgress={progress[i]} />
                <div className="AvatarModal-chapters-avatar-title">{chapter.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </Modal>
    )
  }

}

const mapStateToProps = (state) => {
  const { courseID, currentChapter, currentTask, progress } = state.course
  const { name, description, chapters } = COURSES_DATA[courseID]

  const isOpen = state.avatar

  return {
    isOpen,
    name,
    description,
    chapters,
    progress,
    currentChapter,
    currentTask,
  }
}

export default connect(mapStateToProps, { toggleAvatarMenu, changeChapter })(AvatarModal)
