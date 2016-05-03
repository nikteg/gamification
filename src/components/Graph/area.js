import d3 from 'd3'
import { dataObjectToArray } from './utils'
import ReactFauxDOM from 'react-faux-dom'
import { line, filledCurve } from './line'
import { drawBars } from './bars.js'
import { createAxis } from './axis.js'

function createArea(node, width, height, margin) {
  return d3
    .select(node)
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
}

function getYMax(domain, data) {
  const yMaxInData = Math.max.apply(Math, data)
  return (yMaxInData > 5) ? yMaxInData : domain.y.max
}

function createX(domain, graphWidth) {
  return d3
    .scale
    .linear()
    .domain([ domain.x.min, domain.x.max ])
    .range([ 0, graphWidth ])
}

function createY(domain, graphHeight, yMax) {
  return d3
    .scale
    .linear()
    .domain([ domain.y.min, yMax ])
    .range([ graphHeight, 0 ])
}

export function createGraph(size, margin, domain, data, selectedDataRange) {
  const DOMNode = ReactFauxDOM.createElement('svg')
  const width = size.width - margin.left - margin.right - 50
  const height = size.height - margin.top - margin.bottom
  const graph = createArea(DOMNode, width, height, margin)
  const dataArray = dataObjectToArray(data, domain)
  const graphSize = { height, width }
  const yMax = getYMax(domain, dataArray)
  const x = createX(domain, width)
  const y = createY(domain, height, yMax)

  const addAxises = function() {
    createAxis(graph, graphSize, x, y)
    return this
  }

  const addBars = function(isVisible, barColors, handleClick) {
    if (Object.keys(data).length > 0) {
      drawBars(
        graph,
        graphSize,
        domain,
        dataArray,
        selectedDataRange,
        isVisible,
        barColors,
        handleClick,
        yMax
      )
    }

    return this
  }

  const addLine = function(distribution, showLine) {
    line(graph, domain, graphSize, dataArray, distribution, showLine, x, y)
    return this
  }

  const addFilledCurve = function(distribution, xPosition) {
    filledCurve(graph, domain, graphSize, dataArray, distribution, x, y, xPosition)
    return this
  }

  const render = function() {
    return DOMNode.toReact()
  }

  return {
    addAxises,
    addBars,
    addLine,
    addFilledCurve,
    render,
  }
}
