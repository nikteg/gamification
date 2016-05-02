import React, { PropTypes } from 'react'
import './styles/GraphInfo.scss'

function dataObjectToArray(dataObject, domain) {
  const array = []

  for (let i = domain.x.min; i < domain.x.max; i++) {
    const occurences = dataObject[i]
    array[i - domain.x.min] = occurences || 0
  }

  return array
}

const GraphInfo = ({ data, domain, mean, variance }) => {
  const dataArray = dataObjectToArray(data, domain)

  const sampleSize = dataArray
    .reduce((sum, next) => sum + next, 0)

  const totalSum = dataArray
    .reduce((sum, next, i) => (
      sum + ((i + domain.x.min) * next)
    ), 0)

  const sampleMean = sampleSize > 0 ? (totalSum / sampleSize).toFixed(0) : '-'

  const standardDeviationSample = 0
  const standardDeviationNormal = Math.sqrt(variance).toFixed(2)
  const cumulativeDistributionSample = 0
  const cumulativeDistributionNormal = 0
  const xPosition = 0

  return (
    <div className="GraphInfo">
      <div className="GraphInfo-box">
        <h2>Normal Distribution</h2>
        <p>Mean: {mean}</p>
        <p>Standard deviation: {standardDeviationNormal}</p>
        <p>Cumulative distribution: {cumulativeDistributionNormal}</p>
        <p>x position: {xPosition}</p>
      </div>

      <div className="GraphInfo-box">
        <h2>Sample Distribution</h2>
        <p>Mean: {sampleMean}</p>
        <p>Standard deviation: {standardDeviationSample}</p>
        <p>Cumulative distribution: {cumulativeDistributionSample}</p>
        <p>Sample size: {sampleSize}</p>
      </div>
    </div>
  )
}

GraphInfo.propTypes = {
  data: PropTypes.object.isRequired,
  domain: PropTypes.object.isRequired,
  mean: PropTypes.number.isRequired,
  variance: PropTypes.number.isRequired,
}

export default GraphInfo
