import { connect } from 'react-redux'
import Experiment from '../components/Experiment'

const mapStateToProps = (state, props) => console.log(props) || ({
  instructions: 'Probability is the measure of the likelihood that an event will occur.[1] Probability is quantified as a number between 0 and 1 (where 0 indicates impossibility and 1 indicates certainty).[2][3] The higher the probability of an event, the more certain we are that the event will occur. A simple example is the tossing of a fair (unbiased) coin. Since the coin is unbiased, the two outcomes ("head" and "tail") are equally probable; the probability of "head" equals the probability of "tail." Since no other outcome is possible, the probability is 1/2 (or 50%) of either "head" or "tail". In other words, the probability of "head" is 1 out of 2 outcomes and the probability of "tail" is also, 1 out of 2 outcomes.',
  screenHeight: state.screenSize.height,
  screenWidth: state.screenSize.width,
  title: 'Probability',
})

export default connect(mapStateToProps)(Experiment)
