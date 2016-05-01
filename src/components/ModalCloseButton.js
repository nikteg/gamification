import React, { PropTypes } from 'react'

const ModalCloseButton = (props) => (
  <svg viewBox="0 0 24 24" className="ModalCloseButton" onClick={props.onClick}>
    <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
  </svg>
)

ModalCloseButton.propTypes = {
  onClick: PropTypes.func,
}

export default ModalCloseButton
