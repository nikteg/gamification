import React from 'react'

export default () => (
  <div>
    <div className="Experiment-part">
      <h3 className="Experiment-subTitle">General information</h3>
		<p>In order to calculate a cumulative probability distribution of the normal distribution using its density 
		function one must integrate over this density function. Calculating this is both time consuming and complex. To overcome this problem, a simple 
		algebraic transformation is used. By transforming the normal distribution into a standard normal (called standardizing), the cumulative probability 
		distribution of can be looked up in a predefined table. The standard normal is simply a normal distribution with expectation 0 and standard deviation 1.</p>
		<p>Here’s the formula on how to standardize the normal distribution:</p>
		<p><TeX data={'Z = \\frac{X-\\mu}{\\sigma}'}/></p>
		<p>Example:</p>
		<p>Normal: <TeX data={'P(X < x)'}/></p>
		<p>Standard normal: <TeX data={'P(Z < z) = P(Z < \\frac{x-\\mu}{\\sigma} = P(\\frac{X-\\mu}{\\sigma} < \\frac{x-\\mu}{\\sigma}'}/></p>
		<p>If you read the formula carefully, you can picture what it does, it is actually not that complicated.</p>
		<p>Let’s begin with looking at X - mu. This shifts the graph in the x axis so it is centered around 0 instead of mu. 
		Secondly we divide with sigma, this scales the x values. Now all x values in horizontal plane of the graph is in the unit sigma instead. 
		This means whatever value that is 1 standard deviation away from the expectation is now valued 1 in the graph, and 2 standard deviations gives us 2, 
		and so on. </p>
		<p>Our distribution is now standardized. It doesn’t matter anymore what our expectation or standard deviation is, 
		to find the cumulative distribution from -∞ to z, we just have to look up z in the table to the right. </p>
    </div>

    <div className="Experiment-part">
      <h3 className="Experiment-subTitle">This experiment</h3>
		<p>In order to calculate cumulative probability distributions, 
		we must standardize our normal distribution. Translate the following expression into a standard normal using the formula above:</p>
		<p>Answer:</p>
		<p>[Input]</p>
	</div>

    <div className="Experiment-answer">
      <p>Now compare the values of the two charts when using different sample sizes.</p>
      <ol className="Experiment-listMargin">
        <li>What is P(Z < 180.23)? </li>
        <li>What is P(130 < Z < 150)?</li>
        <li>What is P(Z > 165.54)? </li>
      </ol> 
    </div>
  </div>
)
