import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'

import { toggleAvatarMenu } from '../../actions/avatar'

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
  };

  render() {
    const { course, isOpen, toggleAvatarMenu } = this.props

    return (
      <Modal isOpen={isOpen} onRequestClose={toggleAvatarMenu} style={modalStyle}>
        <div className="AvatarModal">
          <h1>{course.name}</h1>
        </div>
      </Modal>
    )
  }

}

const mapStateToProps = (state) => ({
  course: state.course,
  isOpen: state.avatar,
})

export default connect(mapStateToProps, { toggleAvatarMenu })(AvatarModal)
