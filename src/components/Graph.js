import React, { Component, PropTypes } from 'react'
import { LineChart } from 'rd3'

const lineData = [
  {
    name: 'series1',
    values: [ { x: 0, y: 20 }, { x: 10, y: 30 }, { x: 20, y: 0 }, { x: 30, y: 50 }, { x: 40, y: 30 }, { x: 50, y: 40 }, { x: 60, y: 50 }, { x: 70, y: 20 } ],
    strokeWidth: 3,
    strokeDashArray: '5,5',
  },
]

const Graph = ({ width }) => (
  <LineChart
    data={lineData}
    height={400}
    interpolationType="cardinal"
    legend={false}
    margins={{ top: 20, right: 70, bottom: 50, left: 80 }}
    xAxisLabel=""
    gridHorizontal
    yAxisLabel=""
    width={width}
  />
)

export default Graph
