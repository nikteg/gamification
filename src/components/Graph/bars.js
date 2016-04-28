import d3 from 'd3'
import colors from '../../helpers/colors'

export function drawBars(node, graphSize, domain, data, isVisible) {
  const bars = []

  for (let i = domain.x.min; i < domain.x.max; i++) {
    const occurences = data[i]

    bars[i - domain.x.min] = occurences || 0
  }

  const barWidth = graphSize.width / bars.length
  console.log(barWidth)
  const barHeight = graphSize.height / domain.y.max

  node
    .selectAll('rect')
    .data(bars)
    .enter()
    .append('rect')
    .attr('fill', colors.green)
    .attr('stroke', '#000')
    .attr('opacity', isVisible ? 1 : 0)
    .attr('x', function(d, i) {
      return (i * (barWidth - 2)) + 2
    })
    .attr('y', function(d, i) {
      return graphSize.height - (d * barHeight)
    })
    .attr('width', barWidth)
    .attr('height', function(d) {
      return d * barHeight
    })
}
