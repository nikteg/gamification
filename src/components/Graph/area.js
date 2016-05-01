import d3 from 'd3'
import _ from 'lodash'
import ReactFauxDOM from 'react-faux-dom'
import colors from '../../helpers/colors'
import line from './line'
import { drawBars } from './bars.js'
import { createAxis } from './axis.js'

export function createGraph(size, margin, domain) {
  const DOMNode = ReactFauxDOM.createElement('svg')
  const width = size.width - margin.left - margin.right - 50
  const height = size.height - margin.top - margin.bottom
  const graphElements = {}

  const graphSize = {
    height,
    width,
  }

  const graph = d3
    .select(DOMNode)
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  const addAxises = function() {
    createAxis(graph, graphSize, domain)
    return this
  }

  const addData = function(id, data) {
    graphElements[id] = data

    return this
  }

  const addBars = function(
    id,
    isVisible = true,
    barColors = { fill: 'none', stroke: colors.orange },
    handleClick,
    selectedData
  ) {
    if (!_.isEmpty(graphElements[id])) {
      drawBars(
        graph,
        id,
        graphSize,
        domain,
        graphElements[id],
        selectedData,
        isVisible,
        barColors,
        handleClick
      )
    }

    return this
  }

  const addLine = function(id, showLine) {
    line(graph, domain, graphSize, graphElements[id], showLine)

    return this
  }

  const render = function() {
    return DOMNode.toReact()
  }

  return {
    addAxises,
    addData,
    addBars,
    addLine,
    render,
  }
}
