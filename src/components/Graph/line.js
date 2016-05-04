import d3 from 'd3'

export function line(node, domain, graphSize, data, distribution, isVisible, x, y) {
  const sampleSize = data.reduce((sum, next) => (sum + next), 0)

  const line = d3
    .svg
    .line()
    .interpolate('cardinal')
    .x((d, i) => x(domain.x.min + i))
    .y((d, i) => (
      y(distribution.pdf(domain.x.min + i) * sampleSize)
    ))

  node
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', 'black')
    .attr('stroke-width', 1)
    .attr('d', line(data))
    .attr('opacity', isVisible ? 1 : 0)
}

export function filledCurve(node, domain, graphSize, data, distribution, x, y, xPosition) {
  const sampleSize = data.reduce((sum, next) => (sum + next), 0)

  node
    .append('defs')
    .append('linearGradient')
    .attr('id', 'area-gradient')
    .attr('gradientUnits', 'userSpaceOnUse')
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', x(xPosition))
    .attr('y2', 0)
    .selectAll('stop')
    .data([
      { offset: '100%', color: 'rgba(0, 0, 0, .7)' },
      { offset: '100%', color: 'transparent' },
    ])
    .enter()
    .append('Stop')
    .attr('offset', d => d.offset)
    .attr('stop-color', d => d.color)

  const areaSVG = d3
    .svg
    .area()
    .interpolate('cardinal')
    .x((d, i) => x(domain.x.min + i))
    .y0(graphSize.height)
    .y1((d, i) => y(distribution.pdf(domain.x.min + i) * sampleSize))

  node
    .append('path')
    .attr('id', 'graphArea')
    .attr('d', areaSVG(data))
    .attr('fill', 'url(#area-gradient)')
}

