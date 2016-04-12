import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import classes from '../styles/SizeController.scss'

const SizeController = ({ position, translate }) => (
  <Motion style={{ left: spring(position) }}>
    {({ left }) =>
      <div style={{ height: '100%', left: left }} className={classes['container']}>

        <div className={classes['controls']}>

          <div className={classes['control']} onClick={() => translate(5)}>
            <span className={classes['arrow-left']}>◀</span>
          </div>

          <div className={classes['control']} onClick={() => translate(50)}>
            <span className={classes['half-icon']}></span>
          </div>

          <div className={classes['control']} onClick={() => translate(95)}>
            <span className={classes['arrow-right']}>▶</span>
          </div>

        </div>

      </div>
    }
  </Motion>
)

SizeController.propTypes = {
  position: PropTypes.number.isRequired,
  translate: PropTypes.func.isRequired,
}

export default SizeController
