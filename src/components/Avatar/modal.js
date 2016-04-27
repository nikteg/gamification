import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Modal from 'react-modal'
import classnames from 'classnames'

import { toggleAvatarMenu, changeChapter } from '../../actions/avatar'

import Avatar from './index'

const modalStyle = {
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

class AvatarModal extends Component {

  static propTypes = {
    course: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleAvatarMenu: PropTypes.func.isRequired,
    changeChapter: PropTypes.func.isRequired,
  };

  onAvatarClick = (chapterID) => (e) => {
    this.props.changeChapter(chapterID)
    this.props.toggleAvatarMenu()
  };

  render() {
    const { course, isOpen, toggleAvatarMenu } = this.props

    return (
      <Modal isOpen={isOpen} onRequestClose={toggleAvatarMenu} style={modalStyle}>
        <div className="AvatarModal">
          <h1>{course.name}</h1>
          <div className="AvatarModal-chapters">
            {course.chapters.map((chapter, i) => (
              <Link
                to={`/study/mathematical-statistics/chapter/${i + 1}`}
                className={classnames('AvatarModal-chapters-avatar', { 'AvatarModal-chapters-avatar-active': course.currentChapter === i })}>
                <Avatar chapter={chapter} onClick={this.onAvatarClick(i)} />
                <div className="AvatarModal-chapters-avatar-title">{chapter.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </Modal>
    )
  }

}

const mapStateToProps = (state) => ({
  course: state.course,
  isOpen: state.avatar,
})

export default connect(mapStateToProps, { toggleAvatarMenu, changeChapter })(AvatarModal)
