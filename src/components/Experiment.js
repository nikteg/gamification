import React, { Component, PropTypes } from 'react'
import ExperimentInstructions from './ExperimentInstructions'
import ExperimentTask from './ExperimentTask'
import SizeController from './SizeController'
import '../styles/components/Experiment.scss'

class Experiment extends Component {
  constructor(props) {
    super(props)
    this.state = { dividerPosition: 50 } // in percentage
    this.handleResize = this.handleResize.bind(this)
  }

  get dividerPosition() {
    return this.props.screenWidth * this.state.dividerPosition / 100
  }

  handleResize(newPosition) {
    this.setState({ dividerPosition: newPosition })
  }

  render() {
    const { displayGraph, instructions, screenHeight, screenWidth, title } = this.props
    const dividerPosition = this.dividerPosition

    return (
      <div className="Experiment" style={{ height: screenHeight - 240 }}>

        <ExperimentInstructions
          instructions={instructions}
          title={title}
          width={dividerPosition}
        />

        <SizeController translate={this.handleResize} position={dividerPosition} />

        <ExperimentTask
          isVisible={displayGraph}
          width={screenWidth - dividerPosition}
        />

      </div>
    )
  }
}

Experiment.propTypes = {
  displayGraph: PropTypes.bool.isRequired,
  instructions: PropTypes.object.isRequired,
  screenWidth: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default Experiment
