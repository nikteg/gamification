import React, { Component, PropTypes } from 'react'
import ExperimentInstructions from './ExperimentInstructions'
import ExperimentTask from './ExperimentTask'
import SizeController from './SizeController'
import '../styles/components/Experiment.scss'

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
    const { instructions, screenHeight, screenWidth, title } = this.props
    const dividerPosition = this.dividerPosition

    return (
      <div className="Experiment" style={{ minHeight: screenHeight - 80 }}>

        <ExperimentInstructions
          instructions={instructions}
          title={title}
          width={dividerPosition}
        />

        <SizeController translate={this.handleResize} position={dividerPosition} />

        <ExperimentTask width={screenWidth - dividerPosition} />

      </div>
    )
  }
}

Experiment.propTypes = {
  instructions: PropTypes.object.isRequired,
  screenWidth: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default Experiment
