import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as avatarActions } from '../../actions/avatar'
import ProgressCircle from './ProgressCircle'

// import Modal from 'react-modal'

// <Modal isOpen={avatarMenu} onRequestClose={toggleAvatarMenu} style={customStyles}>
//   <div className="avatar-modal">
//     <h1>{course.name}</h1>
//     {this.menu()}
//   </div>
// </Modal>

// const customStyles = {
//   overlay: {
//     backgroundColor: 'rgba(0, 0, 0, 0.75)',
//   },
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// }

class Avatar extends Component {
  static propTypes = {
    task: PropTypes.object.isRequired,
    toggleAvatarMenu: PropTypes.func.isRequired,
  };

  render() {
    const { task, toggleAvatarMenu } = this.props

    return (
      <div className="Avatar">
        <a onClick={toggleAvatarMenu}>
          <ProgressCircle progress={task.progress / 100} type={task.type} />
        </a>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  avatarMenu: state.avatar,
})

export default connect(mapStateToProps, avatarActions)(Avatar)
