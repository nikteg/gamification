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
  };

  createMenu = (totalProgress) => {
    return totalProgress.map((item, i) => {
      const type = Object.keys(ProgressTypes)[i % (Object.keys(ProgressTypes).length)]
      return (
        <ProgressCircle progress={item.progress} type={type} active={type === ProgressTypes.DICE} />
      )
    })
  };

  render() {
    const { avatarMenu, toggleAvatarMenu } = this.props

    console.log(this.props)

    return (
      <div className={classes['avatar']}>
        <Modal isOpen={avatarMenu} onRequestClose={toggleAvatarMenu} style={customStyles}>
          <div className={classes['avatarMenu']}>
            {this.createMenu([ { progress: this.props.counter / 10 }, { progress: 0.3 }, { progress: 0.5 } ])}
          </div>
        </Modal>
        <a onClick={toggleAvatarMenu}>
          <ProgressCircle progress={this.props.counter / 10} type={ProgressTypes.DICE} />
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
