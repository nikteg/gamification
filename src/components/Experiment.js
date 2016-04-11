import React, { Component, PropTypes } from 'react'
import ExperimentInstructions from './ExperimentInstructions'
import SizeController from './SizeController'
import classes from '../styles/Experiment.scss'

class Experiment extends Component {
  constructor(props) {
    super(props)
    this.state = { dividerPosition: 35 } // in percentage
    this.handleResize = this.handleResize.bind(this)
  }

  get dividerPosition() {
    return this.props.screenWidth * this.state.dividerPosition / 100
  }

  handleResize(newPosition) {
    this.setState({ dividerPosition: newPosition })
  }

  render() {
    const { instructions, screenHeight, title } = this.props
    const dividerPosition = this.dividerPosition

    return (
      <div className={classes['container']} style={{ minHeight: screenHeight - 80 }}>

        <ExperimentInstructions
          instructions={instructions}
          title={title}
          width={dividerPosition}
        />

        <SizeController translate={this.handleResize} position={dividerPosition} />

        <div className={classes['main']}>
          <h1>Hej</h1>
        </div>

      </div>
    )
  }
}

Experiment.propTypes = {
  instructions: PropTypes.string.isRequired,
  screenWidth: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default Experiment
