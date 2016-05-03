import React, { PropTypes } from 'react'
import Slider from 'rc-slider'
import gaussian from 'gaussian'
import colors from '../../helpers/colors'
import { dataObjectToArray } from './utils'
import VisibilityControl from './VisibilityControl'
import './styles/GraphInfo.scss'

const GraphInfo = ({
  data,
  selectedData,
  domain,
  mean,
  variance,
  addData,
  showSampleDistribution,
  showNormalDistribution,
  toggleSampleDistributionVisibility,
  toggleNormalDistributionVisibility,
  xPosition,
  updateXPosition,
}) => {
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

  const cumulativeDistributionSample = (selectedSum / totalSum).toFixed(2)

  const normalDistribution = gaussian(mean, variance)

  const cumulativeDistributionNormal = normalDistribution
    .cdf(xPosition)
    .toFixed(2)

  const hasData = Object.keys(data).length > 0

  return (
    <div className="GraphInfo">

      <div
        className="GraphInfo-box"
        style={{
          borderColor: (hasData && showSampleDistribution)
            ? colors.green
            : 'transparent',
        }}
      >

        <div>
          <h2>Sample Distribution</h2>
          <p><span className="GraphInfo-label">Mean:</span> {sampleMean}</p>
          <p><span className="GraphInfo-label">Standard deviation:</span> {standardDeviationSample}</p>
          <p><span className="GraphInfo-label">Cumulative distribution:</span> {cumulativeDistributionSample}</p>
          <p><span className="GraphInfo-label">Sample size:</span> {sampleSize}</p>
          {addData}
        </div>

        <VisibilityControl
          isVisible={showSampleDistribution}
          handleChange={() => toggleSampleDistributionVisibility()}
        />

      </div>

      <div
        className="GraphInfo-box"
        style={{
          borderColor: (hasData && showNormalDistribution)
            ? '#000000'
            : 'transparent',
        }}
      >

        <div>
          <h2>Normal Distribution</h2>
          <p><span className="GraphInfo-label">Mean:</span> {mean}</p>
          <p><span className="GraphInfo-label">Standard deviation:</span> {standardDeviationNormal}</p>
          <p><span className="GraphInfo-label">Cumulative distribution:</span> {cumulativeDistributionNormal}</p>
        </div>

        <div className="Slider-row">
          <p className="Slider-label" style={{ marginRight: 7 }}>x:</p>

          <Slider
            className="Slider-slider"
            min={domain.x.min}
            max={domain.x.max}
            onChange={updateXPosition}
          />

          <input
            type="number"
            value={xPosition}
            max={domain.x.max}
            className="Slider-textField"
            onChange={(e) => {
              const text = e.target.value
              let value = text ? parseInt(text, 0) : 0

              if (value > domain.x.max) {
                value = domain.x.max
              } else if (value < domain.x.min) {
                value = domain.x.min
              }

              updateXPosition(value)
            }}
          />
        </div>

        <VisibilityControl
          isVisible={showNormalDistribution}
          handleChange={() => toggleNormalDistributionVisibility()}
        />

      </div>

    </div>
  )
}

GraphInfo.propTypes = {
  data: PropTypes.object.isRequired,
  domain: PropTypes.object.isRequired,
  mean: PropTypes.number.isRequired,
  variance: PropTypes.number.isRequired,
  showSampleDistribution: PropTypes.bool.isRequired,
  showNormalDistribution: PropTypes.bool.isRequired,
  toggleSampleDistributionVisibility: PropTypes.func.isRequired,
  toggleNormalDistributionVisibility: PropTypes.func.isRequired,
  xPosition: PropTypes.number.isRequired,
  updateXPosition: PropTypes.func.isRequired,
}

export default GraphInfo
