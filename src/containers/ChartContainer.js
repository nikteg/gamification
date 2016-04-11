import { connect } from 'react-redux'
import Chart from '../components/Chart'

import chartData from '../chart.json'

const mapStateToProps = (state) => ({
  chartData: chartData,
})

export default connect(mapStateToProps)(Chart)
