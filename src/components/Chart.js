import d3 from 'd3'
import { Component, PropTypes } from 'react'
import ReactFauxDOM from 'react-faux-dom'

import chartData from '../chart.json'

import classes from '../styles/Home.scss' // WHAT TO DO HERE YO

export default class Chart extends Component {
  static propTypes = {
    data: PropTypes.array,
  };

  static defaultProps = {
    data: chartData,
  };

  render() {
    const data = this.props.data
    const margin = { top: 20, right: 20, bottom: 30, left: 50 }
    const width = 960 - margin.left - margin.right
    const height = 500 - margin.top - margin.bottom

    const parseDate = d3.time.format('%Y-%m-%d').parse

    const x = d3.time.scale()
    .range([ 0, width ])

    const y = d3.scale.linear()
    .range([ height, 0 ])

    const xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom')

    const yAxis = d3.svg.axis()
    .scale(y)
    .orient('left')

    const line = d3.svg.line()
    .x(function(d) { return x(d.date) })
    .y(function(d) { return y(d.close) })

    const node = ReactFauxDOM.createElement('svg')
    const svg = d3.select(node)
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    data.forEach(function(d) {
      d.date = parseDate(d.date)
      d.close = +d.close
    })

    x.domain(d3.extent(data, function(d) { return d.date }))
    y.domain(d3.extent(data, function(d) { return d.close }))

    svg.append('g')
    .attr('class', [ classes['x'], classes['axis'] ].join(' '))
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis)

    svg.append('g')
    .attr('class', classes['axis'])
    .call(yAxis)
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '.71em')
    .style('text-anchor', 'end')
    .text('Price ($)')

    svg.append('path')
    .datum(data)
    .attr('class', classes['line'])
    .attr('d', line)

    return node.toReact()
  }
}
