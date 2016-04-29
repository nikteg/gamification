import React from 'react'

import TeX from '../../../../components/TeX'

export default {
  name: 'Normal distribution',
  tasks: [
    {
      name: 'Introduction',
      type: 'overview',
      html: (
        <div className="Introduction">

          <h1>Normal distribution</h1>

          <h2>Introduction to the concept</h2>

          <div className="Introduction-part">
            <h3>What is it?</h3>

            <div className="Introduction-part-content">
              <p>A normal distribution is a continuous probability distribution whose pattern is commonly
              found in the real world, often in the form of random errors. A few examples of real world phenomena that
              act like a normal distribution are the size of living tissue in different individuals of the same species,
              and errors in machine produced objects.</p>
              <p>When graphing the distribution of some gathered data or statistic, the graph sometimes form a
              bell-shape (figure 1). Any distribution with a graph resembling this bell-shape is said to have a normal
              distribution. Alternatively, the normal distribution is also called a gaussian distribution or less formally
              a bell curve because of its shape.</p>
              <img src="/bellcurve.gif" alt="" />
            </div>
          </div>

          <div className="Introduction-part">
            <h3>Why is it important?</h3>

            <div className="Introduction-part-content">
              <p>Lorem ipsum Eiusmod est cupidatat ut voluptate qui sit eiusmod quis consectetur quis est
              aliquip commodo esse Ut sit occaecat enim velit dolore velit dolor irure ut proident.</p>
            </div>
          </div>

          <div className="Introduction-part">
            <h3>Examples of uses</h3>

            <div className="Introduction-part-content">
              <ul>
                <li>Measure of living tissue</li>
                <li>Financial sciences</li>
                <li>For evaluating scores</li>
                <li>Astronomy</li>
              </ul>
            </div>
          </div>

          <div className="Introduction-part">
            <h3>Other examples of continuous distributions</h3>

            <div className="Introduction-part-content">
              <ul>
                <li>Exponential distribution</li>
                <li>Poisson distribution</li>
                <li>Gamma distribution</li>
                <li>Chi-squared distribution</li>
              </ul>
            </div>
          </div>

          <h2>Properties and functions</h2>

          <div className="Introduction-part">
            <h3>Definition</h3>

            <div className="Introduction-part-content">
              <p>Since the area under the probability density function should always be equal to 1, it implicates
              that <TeX data={'-12e-(1/2)[(x-)/]2= 1'} />. The link to the proof for this is given here: [link to proof].</p>

              <p>As you can see, the probability density function of the normal distribution requires only that mu is
              a real number and sigma is positive. And as you may already suspect, mu and sigma corresponds to the mean
              and standard deviation of the normal random variable. The graph of the density function of the normal random
              variable is symmetric, with the mean mu in its center. At mu+-sigma, one can find the points of inflection.</p>
            </div>
          </div>

          <div className="Introduction-part">
            <h3>How is it commonly used?</h3>

            <div className="Introduction-part-content">
              <p>In many cases, the normal distribution can be discovered directly by conducting an experiment of a chosen
              random variable and observing the frequency of the outcomes. By graphing it and looking at the shape of the graph,
              one can determine whether it resembles a normal distribution or not. In such a case, it is easy to use
              the normal distribution directly to approximate the distribution of the samples.</p>

              <p>However, sometimes the sample distribution of a random variable, say X, does not resemble a normal distribution.
              In these cases, it is possible to observe the distribution of a statistic (such as the mean or standard deviation)
              of X to see if it resembles a normal distribution. This is called point estimation.</p>

              <p>Once a normal distribution is discovered, it may be of interest to find out the cumulative probability
              distribution of the normal random variable. However, to find this, an integration over the probability density
              function is required. This process is rather complex. Thus the normal random variable is often translated into a
              standard normal random variable, with a standard normal distribution. The reason for this is simply because the
              standard normal distribution has a single table that describes the cumulative probability distribution for
              different standard deviations. [Link].</p>

            </div>
          </div>

          <div className="Introduction-part">
            <h3>Rule of thumb</h3>

            <div className="Introduction-part-content">
              <p>Because of its symmetricality and frequency of use, a shorthand for the distribution has been developed. As you can see in the figure below there is:</p>

              <ul>
                <li>a 68% chance that a random sample with a normal distribution to fall within 1 standard deviation from the expected value</li>
                <li>a 95% chance that it falls within 2 standard deviations from the expected value</li>
                <li>a 99% chance it falls between 3 standard deviations of the expected value</li>
              </ul>

              <img src="/emperical_rule.png" alt="Rule of thumb" />
            </div>
          </div>

          <div className="Introduction-part">
            <h3>Explanation of variables</h3>

            <div className="Introduction-part-content">
              <p>Lorem ipsum Eiusmod est cupidatat ut voluptate qui sit eiusmod quis consectetur quis est
              aliquip commodo esse Ut sit occaecat enim velit dolore velit dolor irure ut proident.</p>
            </div>
          </div>

          <h2>Mathematical proofs</h2>

          <div className="Introduction-part">
            <h3>Mathematical proofs</h3>

            <div className="Introduction-part-content">
              <p>Lorem ipsum Eiusmod est cupidatat ut voluptate qui sit eiusmod quis consectetur quis est
              aliquip commodo esse Ut sit occaecat enim velit dolore velit dolor irure ut proident.</p>
            </div>
          </div>

          <div className="Introduction-part">
            <h3>Prerequisites</h3>

            <div className="Introduction-part-content">
              <ul>
                <li>Expectation</li>
                <li>Stochastic variable</li>
                <li>Distribution</li>
                <li>Standard deviation</li>
                <li>Variance</li>
                <li>Continuous probability distribution</li>
                <li>Density functions</li>
                <li>Cumulative distribution</li>
              </ul>
            </div>
          </div>

        </div>
      ),
    },
    {
      name: 'Something else',
      type: 'exercise',
      html: (
        <div className="Introduction">
          All of my wats
        </div>
      ),
    },
  ],
}
