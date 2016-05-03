import React, { PropTypes } from 'react'
import { dataObjectToArray } from './utils'
import gaussian from 'gaussian'
import './styles/GraphInfo.scss'

const GraphInfo = ({ data, selectedData, domain, mean, variance }) => {
  const dataArray = dataObjectToArray(data, domain)

  const sampleSize = dataArray.reduce((sum, next) => sum + next, 0)

  const totalSum = dataArray.reduce((sum, next, i) => (
      sum + ((i + domain.x.min) * next)
    ), 0)

  const sampleMean = sampleSize > 0 ? (totalSum / sampleSize).toFixed(0) : '-'

  const sampleVariance = dataArray.reduce((sum, next, i) => (
    sum + Math.pow((i + domain.x.min) - sampleMean, 2) * next
  ), 0) / sampleSize

  const standardDeviationSample = sampleVariance > 0
    ? Math.sqrt(sampleVariance).toFixed(2)
    : '-'

  const standardDeviationNormal = Math.sqrt(variance).toFixed(2)

  const selectedSum = dataArray
    .reduce((sum, next, i) => (
      (selectedData.start <= i && i <= selectedData.end)
        ? sum + ((i + domain.x.min) * next)
        : sum
    ), 0)

  const cumulativeDistributionSample = (selectedSum / totalSum).toFixed(3)

  const normalDistribution = gaussian(mean, variance)

  const cumulativeDistributionNormal = normalDistribution.cdf()

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
