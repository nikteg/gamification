import d3 from 'd3'
import { dataObjectToArray } from './utils'

export function createAxis(DOMNode, graphSize, domain, data) {
  const xAxisScale = d3.scale.linear()
    .domain([ domain.x.min, domain.x.max ])
    .range([ 0, graphSize.width ])

  const dataArray = dataObjectToArray(data, domain)
  const maxYInData = Math.max.apply(Math, dataArray)
  const maxY = (maxYInData > 5) ? maxYInData : domain.y.max 

  const yAxisScale = d3.scale.linear()
    .domain([ domain.y.min, maxY])
    .range([ graphSize.height, 0 ])

  const xAxis = d3.svg.axis()
    .scale(xAxisScale)
    .orient('bottom')

  const yAxis = d3.svg.axis()
    .scale(yAxisScale)
    .orient('left')

  DOMNode.append('g')
    .attr('class', 'Graph-axis')
    .attr('transform', 'translate(0,' + graphSize.height + ')')
    .call(xAxis)

  DOMNode.append('g')
    .attr('class', 'Graph-axis')
    .call(yAxis)
}
