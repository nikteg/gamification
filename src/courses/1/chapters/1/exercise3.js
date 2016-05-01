import React from 'react'

export default () => (
  <div>
    <div className="Experiment-part">
      <h3 className="Experiment-subTitle">General information</h3>
      <p>Now it is time to perform the statistical experiment from the previous step iteratively until enough data has been gathered. The more samples gathered, the more accurate the information will be. When measuring attributes of the subject of the experiment one should be mindful of the fact that certain interval of errors of measurement will occur.</p>
      <p>Graphing can be done once enough data has been gathered. Let X be a random variable containing the distribution of the subject and x be one of the values of X. The sample distribution can then be graphed by:</p>
      <p>Y axis: frequency of X = x</p>
      <p>X axis: x</p>
      <p>Whether X is discrete or continuous, it is often necessary to group the data in intervals to make sure the data isn’t too spread out, especially if the sample size is small in comparison to its variance. The most common groups are 10 integer intervals (e.g the group 1 contains all values from -5 to 5) and 1 integer intervals (e.g the group 1 contains -0.5 to 0.5).</p>
    </div>

    <div className="Experiment-part">
      <h3 className="Experiment-subTitle">This experiment</h3>
      In this experiment, we would begin with measuring the height of different people. Luckily, we already have a dataset of measured heights available to us.
      <a href="http://socr.ucla.edu/docs/resources/SOCR_Data/SOCR_Data_Dinov_020108_HeightsWeights.html">Link to dataset</a>
      If you take a look at the data-set, you can see that the dataset has a size of about 20 000 measures. With some educated guesses, we conclude that the height would probably range from about 140 to 240 cm. This means the variance is rather small in contrast to the sample size. Thus, we decide to group the values to 1 integer.
      Let us graph it by frequency on the y axis and by height on the x axis:
    </div>

    <div className="Experiment-answer">
      Experiments and observations
      <ol className="Experiment-listMargin">
        <li>How does the distribution look when we use a smaller sample size?</li>
        <li>What would happen if we had an even bigger sample size?</li>
        <li>What happens if we do not round the data(Imagine we have infinite decimals)? Why does this happen?</li>
        <li>What happens if we round the data too much?</li>
        <li>How is the data distributed? What kind of distribution does it resemble?</li>
        <li>Is the distribution continuous or discrete? How do we know?</li>
        <li>What is the probability that a person is less than 180 cm tall (according to our samples)?</li>
        <li>What is the probability that a person is more than 200 cm tall (according to our samples)?</li>
        <li>What is the probability that a person is between 140-160 cm tall (according to our samples)? </li>
        <li>Is it possible to find out the probability to be less than 180.001 cm tall? </li>
      </ol>
    </div>

  </div>
)
