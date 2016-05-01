import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Motion, spring } from 'react-motion'
import Modal from 'react-modal'

import Award from './Award'
import ModalCloseButton from './ModalCloseButton'

import { hideAwardPopup } from '../actions/awards'

const modalStyle = (y) => ({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 11,
  },
  content: {
    width: '480px',
    bottom: 'auto',
    left: '50%',
    right: 'auto',
    marginRight: '-50%',
    transform: `translate3d(-50%, ${y}px, 0)`,
  },
})

class AwardPopup extends Component {

  static propTypes = {
    award: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    hideAwardPopup: PropTypes.func.isRequired,
  };

  render() {
    const { award, hideAwardPopup } = this.props

    if (!award) {
      return null
    }

    return (
      <Motion defaultStyle={{ y: -200 }} style={{ y: spring(0, { stiffness: 200, damping: 15 }) }}>
        {({ y }) =>
          <Modal isOpen onRequestClose={hideAwardPopup} style={modalStyle(y)}>
            <div className="AwardPopup">
              <ModalCloseButton onClick={hideAwardPopup} />
              <div className="AwardPopup-title">Congrats!</div>
              <div className="AwardPopup-subtitle">New achievement</div>
              <Award award={award} />
              <div className="AwardPopup-name">{award.name}</div>
            </div>
          </Modal>
        }
      </Motion>
    )
  }

}

const mapStateToProps = (state) => ({
  award: state.awardPopup,
})

export default connect(mapStateToProps, { hideAwardPopup })(AwardPopup)
