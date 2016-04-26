import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Motion, spring } from 'react-motion'
import Modal from 'react-modal'

import Award from './Award'

import { hideAwardPopup } from '../actions/awards'

const modalStyle = (y, opacity) => ({
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
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
      <Motion defaultStyle={{ y: -200, opacity: 0 }} style={{ y: spring(0, { stiffness: 200, damping: 15 }), opacity: spring(1) }}>
        {({ y, opacity }) =>
          <Modal isOpen onRequestClose={hideAwardPopup} style={modalStyle(y, opacity)}>
            <div className="AwardPopup">
              <svg viewBox="0 0 24 24" className="AwardPopup-close" onClick={hideAwardPopup}>
                <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
              </svg>
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
