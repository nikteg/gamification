export function drawBars(
  node,
  graphSize,
  domain,
  data,
  selectedDataRange,
  isVisible,
  colors,
  handleClick,
  maxY,
) {
  const barWidth = graphSize.width / data.length
  const barHeight = graphSize.height / maxY

  node
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'Graph-bar')
    .attr('fill', (d, i) => {
      if (Object.keys(selectedDataRange).length > 0) {
        const { start, end } = selectedDataRange
        return (start <= i && i <= end) ? colors.selected.fill : colors.fill
      }
      return colors.fill
    })
    .attr('stroke', (d, i) => {
      if (Object.keys(selectedDataRange).length > 0) {
        const { start, end } = selectedDataRange
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

