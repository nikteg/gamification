import React, { Component, PropTypes } from 'react'
import Slider from 'rc-slider'
import colors from '../../helpers/colors'
import './styles/Controls.scss'
import 'rc-slider/assets/index.css'

class AddData extends Component {
  constructor(props) {
    super(props)

    this.state = { samplesToAdd: 250 }
  }

  render() {
    const { samplesToAdd } = this.state
    const {
      domain,
      data,
      clearGraph,
      addSamples,
    } = this.props

    const hasData = Object.keys(data).length > 0

    return (
      <div className="Controls-box">
        <div className="Slider">

          <div className="Slider-row">
            <p className="Slider-label">{domain.y.label}:</p>

            <Slider
              className="Slider-slider"
              min={1}
              max={2000}
              value={samplesToAdd}
              onChange={(value) => {
                this.setState({ samplesToAdd: value })
              }}
            />

            <input
              type="number"
              min={1}
              value={samplesToAdd}
              className="Slider-textField"
              onChange={(e) => {
                const text = e.target.value
                const samplesToAdd = text ? parseInt(text, 0) : 1

                this.setState({ samplesToAdd })
              }}
            />
          </div>

          <button
            style={{
              background: colors.green,
              borderColor: colors.greenDark,
            }}
            className="Controls-button"
            onClick={() => addSamples(samplesToAdd)}
          >
            Add samples
          </button>

          { hasData && <button
            className="Controls-button"
            onClick={() => clearGraph()}
          >
            Clear samples
          </button>
          }

        </div>

      </div>

    )
  }
}

AddData.propTypes = {
  domain: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  addSamples: PropTypes.func.isRequired,
  clearGraph: PropTypes.func.isRequired,
}

export default AddData
