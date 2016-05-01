import React from 'react'

export default () => (
  <div>
    <div className="Experiment-part">
      <h3 className="Experiment-subTitle">General information</h3>
      Once the samples has been graphed correctly, we realize that our graph is not continuous, as it should be (because our random variable is continuous). We can make the graph continuous by approximating the our sample distribution to a known distribution. One can usually tell which known distribution to approximate to by comparing the shape of the sample distribution graph to the known distribution. In our experiment we decide to approximate to the normal distribution.
      Since the normal distribution is continuous, once approximated, one can use this to cover the frequency of the range of all possible values of the random variable (even values we do not have samples on).
      To be able to calculate the density function of the normal distribution, we first need to calculate the:
      Expectation
      Standard deviation
      Once that is calculated, we can use the definition below to calculate the probability density for any value x.
    </div>

    <div className="Experiment-part">
      <h3 className="Experiment-subTitle">This experiment</h3>
      Let us do the above.
      First we calculate the expectation of our samples:
      [input]
      Secondly we we calculate the standard deviation:
      [input]
      Lastly, we graph the probability density function on top of our previous graph.
    </div>

    <div className="Experiment-answer">
      Experiments and observations
      <ol className="Experiment-listMargin">
        <li>What happens with the sample distribution if we lower the sample size? Why does this happen?</li>
        <li>How good is the approximation of our sample distribution? </li>
        <li>What does the expectation mean. And what does the it tell us? </li>
        <li>What does the standard deviation mean. And what does it tell us?</li>
        <li>How do we know which distribution to approximate our data to?</li>
        <li>Normal distribution graph</li>
        <li>Confirm the shorthands</li>
        <ul>
          <li>68% chance that a random sample with a normal distribution to fall within 1 standard deviation from the expected value </li>
          <li>a 95% chance that it falls within 2 standard deviations from the expected value</li>
          <li>a 99% chance it falls between 3 standard deviations of the expected value</li>
        </ul>
        <li>How do you calculate the probability a person is less than 180 cm tall? (Just explain with words)</li>
        <li>What would the probability that a person is exactly 170 cm tall? </li>
      </ol>
    </div>
  </div>
)
