import React, { Component, PropTypes } from 'react'
import Slider from 'rc-slider'
import './styles/Controls.scss'
import 'rc-slider/assets/index.css'

class Controls extends Component {
  constructor(props) {
    super(props)

    this.state = {
      samplesToAdd: 1,
    }
  }

  render() {
    const { samplesToAdd } = this.state
    const {
      data,
      selectedData,
      deselectData,
      addSamples,
      toggleBars,
      clearGraph,
      showBars,
    } = this.props

    const hasData = Object.keys(data).length > 0
    const hasSelectedData = Object.keys(selectedData).length > 0

    return (
      <div className="Controls">
        <div className="Slider">

          <Slider
            className="Slider-slider"
            min={1}
            max={2000}
            value={samplesToAdd}
            onChange={(value) => {
              this.setState({ samplesToAdd: value })
            }}
          />

          <button
            className="Controls-button"
            onClick={() => addSamples(samplesToAdd)}
          >
            {`Add ${samplesToAdd} ${samplesToAdd > 1 ? 'samples' : 'sample'}`}
          </button>

        </div>

        <div>
          { hasData && <button
            className="Controls-button"
            onClick={() => toggleBars()}
          >
            {`${showBars ? 'Hide' : 'Show'} Bars`}
          </button>
          }

          { hasSelectedData && <button
            className="Controls-button"
            onClick={() => deselectData()}
          >
            Deselect Bars
          </button>
          }

          { hasData && <button
            className="Controls-button"
            onClick={() => clearGraph()}
          >
            Reset Graph
          </button>
          }
        </div>

      </div>
    )
  }
}

Controls.propTypes = {
  data: PropTypes.object.isRequired,
  selectedData: PropTypes.object.isRequired,
  deselectData: PropTypes.func.isRequired,
  addSamples: PropTypes.func.isRequired,
  toggleBars: PropTypes.func.isRequired,
  clearGraph: PropTypes.func.isRequired,
  showBars: PropTypes.bool.isRequired,
}

export default Controls
