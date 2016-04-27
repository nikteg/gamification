import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
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
    chapter: PropTypes.object.isRequired,
  };

  render() {
    const { chapter } = this.props

    const progress = chapter.tasks.reduce((progress, task) => progress + (task.done ? 1 : 0), 0) / chapter.tasks.length

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
