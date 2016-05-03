import d3 from 'd3'

export function createAxis(node, graphSize, x, y) {
  const xAxis = d3
    .svg
    .axis()
    .scale(x)
    .orient('bottom')

  const yAxis = d3
    .svg
    .axis()
    .scale(y)
    .orient('left')

  node
    .append('g')
    .attr('class', 'Graph-axis')
    .attr('transform', 'translate(0,' + graphSize.height + ')')
    .call(xAxis)

  node
    .append('g')
    .attr('class', 'Graph-axis')
    .call(yAxis)
}

