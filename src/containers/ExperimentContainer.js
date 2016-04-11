import { connect } from 'react-redux'
import Experiment from '../components/Experiment'

const mapStateToProps = (state) => ({
  instructions: 'What is the probability of drawing a number card less than 4 from a standard deck of cards?',
  screenHeight: state.screenSize.height,
  screenWidth: state.screenSize.width,
  title: 'Probability',
})

export default connect(mapStateToProps)(Experiment)
