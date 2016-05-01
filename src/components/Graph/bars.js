import _ from 'lodash'

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
  const bars = []

  for (let i = domain.x.min; i < domain.x.max; i++) {
    const occurences = data[i]

    bars[i - domain.x.min] = occurences || 0
  }

  const barWidth = graphSize.width / bars.length
  const barHeight = graphSize.height / domain.y.max

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
      return i * barWidth
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

