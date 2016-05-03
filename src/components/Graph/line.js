import d3 from 'd3'
import { dataObjectToArray } from './utils'

export default function(node, domain, graphSize, data, distribution, isVisible) {
  const dataArray = dataObjectToArray(data, domain)

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

  const sampleSize = dataArray.reduce((sum, next) => (sum + next), 0)

  const line = d3
    .svg
    .line()
    .interpolate('cardinal')
    .x((d, i) => (scaleX(domain.x.min + i) + 20 * 2))
    .y((d, i) => (
      scaleY(distribution.pdf(domain.x.min + i) * sampleSize)
    ))

  node
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', 'black')
    .attr('stroke-width', 1)
    .attr('d', line(dataArray))
}
