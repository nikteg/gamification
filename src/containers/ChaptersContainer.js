import { connect } from 'react-redux'
import Chapters from '../components/Chapters'

const mapStateToProps = (state) => ({
  chapters: [
    {
      title: 'Introduction',
      description: 'Introduction',
      finished: 100,
    },
    {
      title: 'Describing, Exploring, and Comparing Data',
      finished: 100,
    },
    {
      title: 'Probability',
      finished: 90,
    },
    {
      title: 'Distributions',
      finished: 86,
    },
    {
      title: 'Normal Probability Distribution',
      finished: 77,
    },
    {
      title: 'Relations Between Distributions',
      finished: 12,
    },
    {
      title: 'Point and Interval Estimates',
      finished: 0,
    },
    {
      title: 'Hypothesis Testing',
      finished: 0,
    },
    {
      title: 'Inferences From Two Samples',
      finished: 0,
    },
    {
      title: 'Correlation and Regression',
      finished: 0,
    },
    {
      title: 'Analysis of Variance (ANOVA)',
      finished: 0,
    },
    {
      title: 'Complexity regularization',
      finished: 0,
    },
  ],
})

export default connect(mapStateToProps)(Chapters)
