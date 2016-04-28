import d3 from 'd3'
import ReactFauxDOM from 'react-faux-dom'
import { drawBars } from './bars.js'
import { createAxis } from './axis.js'

export function createGraph(size, margin, domain) {
  const DOMNode = ReactFauxDOM.createElement('svg')
  const width = size.width - margin.left - margin.right - 50
  const height = size.height - margin.top - margin.bottom

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

  const addBars = function(data, isVisible = true) {
    drawBars(graph, graphSize, domain, data, isVisible)

    return this
  }

  const render = function() {
    return DOMNode.toReact()
  }

  return {
    node: DOMNode,
    addAxises,
    addBars,
    render,
  }
}
