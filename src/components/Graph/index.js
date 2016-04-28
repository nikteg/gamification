import React, { Component, PropTypes } from 'react'
import d3 from 'd3'
import ReactFauxDOM from 'react-faux-dom'
import Controls from './Controls'
import { createGraph } from './area.js'
import { createAxis } from './axis.js'
import bars from './bars.js'
import './styles/Graph.scss'

class Graph extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      showBars: true,
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
  }

  generateSamples(samplesToGenerate) {
    const { data, domain } = this.state
    const newData = {}

    for (let i = 0; i < samplesToGenerate; i++) {
      const value = Math.floor(Math.random() * (domain.x.max - domain.x.min)) + domain.x.min
      console.log(value)

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

  render() {
    const { data, domain, showBars } = this.state
    const { width } = this.props
    const margin = { top: 20, right: 50, bottom: 30, left: 80 }

    const graph = createGraph({ width, height: 400 }, margin, domain)
      .addAxises()
      .addBars(data, showBars)

    return (
      <div>
        {graph.render()}

        <div style={{ marginLeft: margin.left, marginRight: margin.right }}>
          <Controls
            data={data}
            addSamples={(samplesToAdd) => this.generateSamples(samplesToAdd)}
            showBars={showBars}
            toggleBars={() => this.setState({ showBars: !showBars })}
            clearGraph={() => this.setState({
              data: {},
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

