import React, { Component, PropTypes } from 'react'
import GraphInfo from './GraphInfo'
import AddData from './AddData'
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
      showSampleDistribution: true,
      showNormalDistribution: true,
      mean: 173,
      variance: 23.544,
      xPosition: 153,
      colors: {
        bars: {
          fill: 'transparent',
          stroke: colorPalette.green,
          selected: {
            fill: colorPalette.green,
            stroke: colorPalette.greenDark,
          },
        },
      },
      domain: {
        x: {
          label: 'Height (cm)',
          min: 153,
          max: 190,
        },
        y: {
          label: 'Persons',
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
    const {
      data,
      mean,
      variance,
      selectedData,
      domain,
      colors,
      showSampleDistribution,
      showNormalDistribution,
      xPosition,
    } = this.state

    const { width } = this.props
    const margin = { top: 20, right: 40, bottom: 30, left: 50 }
    const graphSize = { width, height: 360 }
    const normalDistribution = gaussian(mean, variance)

    const graph = createGraph(graphSize, margin, domain, data, selectedData)
      .addAxises()

    if (xPosition > domain.x.min && showNormalDistribution) {
      graph.addFilledCurve(normalDistribution, xPosition)
    }

    graph.addBars(showSampleDistribution, colors.bars, this.handleBarClick)
    graph.addLine(normalDistribution, showNormalDistribution)

    return (
      <div>

        <div className="Graph">

          <p className="Graph-label">{domain.y.label}</p>

          { Object.keys(data).length === 0 &&
            <p className="Graph-noDataText">No data</p>
          }

          {graph.render()}

          <p className="Graph-label" style={{ paddingLeft: margin.left }}>
            {domain.x.label}
          </p>

        </div>

        <GraphInfo
          data={data}
          selectedData={selectedData}
          domain={domain}
          mean={mean}
          variance={variance}
          showSampleDistribution={showSampleDistribution}
          showNormalDistribution={showNormalDistribution}
          toggleSampleDistributionVisibility={() => this.setState({
            showSampleDistribution: !showSampleDistribution,
          })}
          toggleNormalDistributionVisibility={() => this.setState({
            showNormalDistribution: !showNormalDistribution,
          })}
          xPosition={xPosition}
          updateXPosition={(xPosition) => this.setState({ xPosition })}
          addData={(
            <AddData
              domain={domain}
              addSamples={(samplesToAdd) => this.generateSamples(samplesToAdd)}
              data={data}
              clearGraph={() => this.setState({
                data: {},
                selectedData: {},
              })}
            />
          )}
        />
      </div>
    )
  }
}

Graph.propTypes = {
  width: PropTypes.number.isRequired,
}

export default Graph

