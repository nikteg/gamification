import React, { PropTypes } from 'react'
import './styles/VisibilityControl.scss'

const VisibilityControl = ({ isVisible, handleChange, label = 'Show in graph' }) => (
  <div className="VisibilityControl">
    <input
      type="checkbox"
      checked={isVisible}
      onChange={handleChange}
    />
    <label onClick={handleChange}>{label}</label>
  </div>
)

VisibilityControl.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default VisibilityControl
