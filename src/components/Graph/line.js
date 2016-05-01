import d3 from 'd3'
import gaussian from 'gaussian'

export default function(node, domain, graphSize, data, isVisible) {
  const mean = 0.001
  const variance = 0.001
  const normalDistribution = gaussian(mean, variance)

  const scaleX = d3
    .scale
    .linear()
    .domain([ domain.x.min, domain.x.max ])
    .range([ 0, graphSize.width ])

  const scaleY = d3
    .scale
    .linear()
    .domain([ domain.y.min, domain.y.max ])
    .range([ graphSize.height, 0 ])

  const line = d3
    .svg
    .line()
    .interpolate('cardinal')
    .x((d) => (scaleX(d[0]) + 20 * 2))
    .y((d) => (scaleY(normalDistribution.pdf(d[0]))))

  const bars = []

  for (let i = domain.x.min; i < domain.x.max; i++) {
    const occurences = data[i]

    bars[i - domain.x.min] = occurences || 0
  }

  node
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', 'black')
    .attr('stroke-width', 1)
    .attr('d', line(bars))
}
