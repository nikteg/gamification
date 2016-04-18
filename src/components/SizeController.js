import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'

const SizeController = ({ position, translate }) => (
  <div className="size-controller">
    <Motion style={{ left: spring(position) }}>
      {({ left }) =>
        <div style={{ height: '100%', left: left }} className="container">

          <div className="controls">

            <div className="control" onClick={() => translate(5)}>
              <span className="arrow-left">◀</span>
            </div>

            <div className="control" onClick={() => translate(50)}>
              <span className="half-icon"></span>
            </div>

            <div className="control" onClick={() => translate(95)}>
              <span className="arrow-right">▶</span>
            </div>

          </div>

        </div>
      }
    </Motion>
  </div>
)

SizeController.propTypes = {
  position: PropTypes.number.isRequired,
  translate: PropTypes.func.isRequired,
}

export default SizeController
