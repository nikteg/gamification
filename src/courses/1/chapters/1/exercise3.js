import React from 'react'

export default () => (
  <div>
    <div className="Experiment-part">
      <h3 className="Experiment-subTitle">General information</h3>
      <p>Now it is time to perform the statistical experiment from the previous step iteratively until enough data has been gathered. 
	  The larger the sample size, the more accurate conclusions we can draw from the data. When measuring attributes of the subject of the experiment one 
	  should be mindful of the fact that certain interval of errors in measurement will occur.</p>
	  <p>Graphing can be done once we have gathered our random sample. Let X be a random variable containing the
	  distribution of the subject and x be one of the values of X. The sample distribution can then be graphed by: </p>
      <p>Y axis: frequency of X = x</p>
      <p>X axis: x</p>
      <p>Whether X is discrete or continuous, it is often necessary to group the sample units in 
	  intervals to make sure the data on the graph isn’t too spread out, especially if the sample size is small in comparison 
	  to its variance. The most common groups are 10 integer intervals (e.g the interval located at x = 0 contains all values of x from -5 to 
	  5) and 1 integer intervals (e.g the interval located at x = 0 contains all values of x from -0.5 to 0.5). </p>
	  </div>

    <div className="Experiment-part">
      <h3 className="Experiment-subTitle">This experiment</h3>
      <p>In this experiment, we would begin with measuring the height of different people. Luckily, we already have a dataset of measured heights available to us.</p>
      <a href="http://socr.ucla.edu/docs/resources/SOCR_Data/SOCR_Data_Dinov_020108_HeightsWeights.html">Link to dataset</a>
      <p>If you take a look at the data-set, you can see that the dataset has a size of about 20 000 measures. 
	  With some educated guesses, we conclude that the heights would probably range from about 140 to 240 cm. 
	  his means the variance is rather small in contrast to the sample size. Thus, we decide to group the values to 1 integer. </p>	
	  <p>To the right we have an interactive bar chart. Use it to explore the distribution of the data with different sample sizes.</p>
	  <p>Instructions:</p>
	  <ul>
		<li>To add more sample units to the graph, press “Add sample units”.
		<li>In order to change the amount of new sample units added, use the slider to the left of the button. 
		<li>By hovering the mouse over a bar it shows the x and y value of the bar on top of the bar.
		<li>By pressing a hovered bar, it shows the cumulative probability distribution P[X < x], where x is the x value of the bar clicked on.
	  </ul>
  </div>

    <div className="Experiment-answer">
      <p>Experiments and observations</p>
      <ol className="Experiment-listMargin">
        <li>How does the distribution look when we use a small sample size? Say, 25.</li>
        <li>What happens when we use a  bigger sample size? Say, 5000.</li>
        <li>What would happen if we don’t group the data(Imagine each sample unit has infinite decimals)? Why does this happen?</li>
        <li>What happens if we group the data too much?</li>
        <li>How is the data distributed? What kind of distribution does it resemble?</li>
        <li>Is the distribution continuous or discrete? How do we know?</li>
        <li>What is the probability that a person is less than 180 cm tall (according to our random sample)?</li>
        <li>What is the probability that a person is more than 200 cm tall (according to our random sample)?</li>
        <li>What is the probability that a person is between 140-160 cm tall (according to our random sample)? </li>
        <li>Is it possible to find out the probability for a person to be exactly 150 cm tall with this graph? Why or why not? </li>
      </ol>
    </div>

  </div>
)
