import React from 'react'
import TeX from '../../../../components/TeX'

export default () => (
  <div>
    <div className="Experiment-part">
      <h3 className="Experiment-subTitle">General information</h3>
		<p>Once the random sample has been graphed as in the previous step, we can see that our graph is not continuous, as it should be (because our random variable is a continuous random variable). We can make the graph continuous by approximating our sample distribution to a known distribution. One can usually tell which known distribution to approximate to by comparing the shape of the sample distribution graph to the known distribution. In our experiment we decide to approximate to the normal distribution since our random sample form a bell shape.</p>
		<p>Since the normal distribution is continuous, once approximated, one can use this to cover the frequency of all possible values of the random variable (even values our random sample does not cover).</p>
		<p>To be able to calculate the density function of the normal distribution, we first need to calculate the:</p>
		<ol>
			<li>Expectation</li>
			<li>Standard deviation</li>
		</ol>
		<p>Once that is calculated, we can use the definition below to calculate the probability density for any value x.</p>
		<div className = "Experiment-formula">
      <b>Definition of the probability density function</b>
      <p>A random variable with the density:</p>
      <p><TeX data={'f(x) = \\frac{1}{\\sqrt(2\\pi\\sigma)}e^{1/2((x-\\mu)\\sigma)^2}'} /></p>
      <p><TeX data={'-\\infty < \\mu < \\infty'}/></p>
      <p><TeX data={'-\\infty < x < \\infty'}/></p>
      <p><TeX data={'0 < \\sigma'}/></p>
      <p>is said to have a normal distribution with parameters <TeX data={'\\mu'} /> and <TeX data={'\\sigma'}/>.</p>
    </div>
  </div>

    <div className="Experiment-part">
		<h3 className="Experiment-subTitle">This experiment</h3>
		<p>[Interactive graph hidden]
		[Give a random sample with a size of 100, grouped by frequency and x value]</p>
		<p>First we calculate the expectation of our random sample using the data provided above:</p>
		<p>[input]</p>
		<p>Secondly we we calculate the standard deviation:</p>
		<p>[If answer is correct, then show graph to the right]</p>
		<p>To the right we have an interactive graph showing the heights and frequency of each height in bars as the one in the previous step. This time we have an approximation using a normal distributed curve behind the bars in gray.</p>
		<div className="Experiment-instructions">
      <b>Graph instructions:</b>
      <p>To adjust the cumulative distribution of the normal distributed chart, use the big slider.</p>
    </div>
	</div>

    <div className="Experiment-answer">
      <b>Now compare the values of the two charts when using different sample sizes.</b>
      <ol className="Experiment-listMargin">
        <li>How good is the normal approximation of our sample distribution? With large sample size. With small sample size.</li>
        <li>What does the expectation tell us? </li>
        <li>What does the standard deviation mean. And what does it tell us?</li>
        <li>How do we know which distribution to approximate our data to?(In our case we used the normal distribution, there are others like: Poisson distribution, etc)</li>
        <li>Confirm the shorthands</li>
        <ul>
          <li>68% chance that an observed value of of a random variable with a normal distribution will be within 1 standard deviation from the expectation</li>
          <li>a 95% chance that it is within 2 standard deviations from the expected value</li>
          <li>a 99% chance it is within 3 standard deviations of the expected value</li>
        </ul>
        <li>How do you calculate the probability a person that is less than 180 cm tall? (Just explain with words)</li>
        <li>What is the probability for a person to be exactly 170.00 cm tall?</li>
      </ol>
    </div>
  </div>
)
