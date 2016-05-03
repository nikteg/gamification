import { dataObjectToArray } from './utils'

export function drawBars(
  node,
  id,
  graphSize,
  domain,
  data,
  selectedData,
  isVisible,
  colors,
  handleClick
) {
  const bars = dataObjectToArray(data, domain)

  const maxYInData = Math.max.apply(Math, bars)
  const maxY = (maxYInData > 5) ? maxYInData : domain.y.max

  const barWidth = graphSize.width / bars.length
  const barHeight = graphSize.height / maxY

  node
    .selectAll('rect')
    .data(bars)
    .enter()
    .append('rect')
    .attr('class', 'set-' + id)
    .attr('fill', (d, i) => {
      if (Object.keys(selectedData).length > 0) {
        const { start, end } = selectedData
        return (start <= i && i <= end) ? colors.selected.fill : colors.fill
      }
      return colors.fill
    })
    .attr('stroke', (d, i) => {
      if (Object.keys(selectedData).length > 0) {
        const { start, end } = selectedData
        return (start <= i && i <= end) ? colors.selected.stroke : colors.stroke
      }
      return colors.stroke
    })
    .attr('opacity', isVisible ? 1 : 0)
    .attr('x', (d, i) => {
      return (i * barWidth) - (barWidth / 2) + 1
    })
    .attr('y', (d, i) => {
      return graphSize.height - (d * barHeight)
    })
    .attr('width', barWidth - 2)
    .attr('height', (d) => {
      return d * barHeight
    })
    .on('click', handleClick)
}

export function changeColor() {
}

