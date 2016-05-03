import React, { Component, PropTypes } from 'react'
import Controls from './Controls'
import GraphInfo from './GraphInfo'
import gaussian from 'gaussian'
import colorPalette from '../../helpers/colors'
import { createGraph } from './area.js'
import './styles/Graph.scss'

class Graph extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      selectedData: {},
      showBars: true,
      mean: 180,
      variance: 50,
      colors: {
        bars: {
          fill: 'transparent',
          stroke: colorPalette.orange,
          selected: {
            fill: colorPalette.green,
            stroke: '#000000',
          },
        },
      },
      domain: {
        x: {
          label: '',
          min: 155,
          max: 205,
        },
        y: {
          label: '',
          min: 0,
          max: 15,
        },
      },
    }

    this.handleBarClick = this.handleBarClick.bind(this)
  }

  generateSamples(samplesToGenerate) {
    const { mean, variance } = this.state
    const distribution = gaussian(mean, variance)

    const { data } = this.state
    const newData = {}

    for (let i = 0; i < samplesToGenerate; i++) {
      const value = distribution
        .ppf(Math.random())
        .toFixed(0)

      const currentValue = newData[value] ? newData[value] : data[value]
      newData[value] = currentValue ? currentValue + 1 : 1
    }

    this.setState({
      data: {
        ...data,
        ...newData,
      },
    })
  }

  handleBarClick(d, i) {
    const selectedData = {}

    if (this.state.selectedData.end !== i) {
      selectedData.start = 0
      selectedData.end = i
    }

    this.setState({ selectedData })
  }

  render() {
    const { data, mean, variance, selectedData, domain, colors, showBars } = this.state
    const { width } = this.props
    const margin = { top: 20, right: 30, bottom: 30, left: 40 }

    const graph = createGraph({ width, height: 400 }, margin, domain)
      .addData(1, data)
      .addAxises(1)
      .addBars(1, showBars, colors.bars, this.handleBarClick, selectedData)
      .addLine(1, gaussian(mean, variance), showBars)

    return (
      <div>
        {graph.render()}

        <div style={{ marginLeft: margin.left, marginRight: margin.right }}>
          <Controls
            data={data}
            selectedData={selectedData}
            deselectData={() => this.setState({ selectedData: {} })}
            addSamples={(samplesToAdd) => this.generateSamples(samplesToAdd)}
            showBars={showBars}
            toggleBars={() => this.setState({ showBars: !showBars })}
            clearGraph={() => this.setState({
              data: {},
              selectedData: {},
              showBars: true,
            })}
          />

        <GraphInfo
          data={data}
          selectedData={selectedData}
          domain={domain}
          mean={mean}
          variance={variance}
        />

        </div>
      </div>
    )
  }
}

Graph.propTypes = {
  width: PropTypes.number.isRequired,
}

export default Graph

