import React, { Component, PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import Modal from 'react-modal'

import Award from './Award'

const modalStyle = (y, opacity) => ({
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    filter: 'blur(16px)',
    opacity: opacity,
  },
  content: {
    backgroundColor: '#263238',
    border: 'none',
    boxShadow: '0 0 16px rgba(0, 0, 0, 0.25)',
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
    award: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func.isRequired,
  };

  render() {
    const { award, onRequestClose } = this.props

    return (
      <Motion defaultStyle={{ y: -200, opacity: 0 }} style={{ y: spring(0, { stiffness: 200, damping: 15 }), opacity: spring(1) }}>
        {({ y, opacity }) =>
          <Modal isOpen onRequestClose={onRequestClose} style={modalStyle(y, opacity)}>
            <div className="AwardPopup">
              <svg viewBox="0 0 24 24" className="AwardPopup-close" onClick={onRequestClose}>
                <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
              </svg>
              <div className="AwardPopup-title">Congrats!</div>
              <div className="AwardPopup-subtitle">New achievement</div>
              <Award type={'PACMAN'} />
              <div className="AwardPopup-name">Gamed the system</div>
            </div>
          </Modal>
        }
      </Motion>
    )
  }

}

export default AwardPopup
