import React, { Component, PropTypes } from 'react'
import Controls from './Controls'
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
    const { data, domain } = this.state
    const newData = {}

    for (let i = 0; i < samplesToGenerate; i++) {
      const value = Math.floor(Math.random() * (domain.x.max - domain.x.min)) + domain.x.min
      const currentValue = data[value]
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
    this.setState({
      selectedData: {
        start: 0,
        end: i,
      },
    })
  }

  render() {
    const { data, selectedData, domain, colors, showBars } = this.state
    const { width } = this.props
    const margin = { top: 20, right: 30, bottom: 30, left: 40 }

    const graph = createGraph({ width, height: 400 }, margin, domain)
      .addAxises()
      .addData(1, data)
      .addBars(1, showBars, colors.bars, this.handleBarClick, selectedData)
      // .addLine(1, showBars)

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
        </div>
      </div>
    )
  }
}

Graph.propTypes = {
  width: PropTypes.number.isRequired,
}

export default Graph

