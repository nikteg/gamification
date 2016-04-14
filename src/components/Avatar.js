import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as avatarActions } from '../actions/avatar'
import { Circle } from './ProgressBar'

import Modal from 'react-modal'

import classes from '../styles/Home.scss'

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
  };

  render() {
    const { avatarMenu, toggleAvatarMenu } = this.props

    console.log(this.props)

    return (
      <div className={classes['avatar']}>
        <Modal isOpen={avatarMenu} onRequestClose={toggleAvatarMenu} style={customStyles}>
          <div className={classes['avatarMenu']}>
            <Circle
              progress={this.props.counter / 10}
              options={{
                strokeWidth: 12,
                color: '#5677fc',
                duration: 500,
              }}
            initialAnimate />
          </div>
        </Modal>
        <a onClick={toggleAvatarMenu}>
          <Circle
            progress={this.props.counter / 10}
            options={{
              strokeWidth: 12,
              color: '#5677fc',
              duration: 500,
            }}
          initialAnimate />
        </a>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  avatarMenu: state.avatar,
})

export default connect(mapStateToProps, avatarActions)(Avatar)
