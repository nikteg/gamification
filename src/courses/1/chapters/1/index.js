import React from 'react'

export default {
  name: 'Normal distribution',
  tasks: [
    {
      name: 'Introduction',
      progress: 0,
      html: (props) => (
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
              that -12e-(1/2)[(x-)/]2= 1. The link to the proof for this is given here: [link to proof].</p>

              <p>As you can see, the probability density function of the normal distribution requires only that mu is
              a real number and sigma is positive. And as you may already suspect, mu and sigma corresponds to the mean
              and standard deviation of the normal random variable. The graph of the density function of the normal random
              variable is symmetric, with the mean mu in its center. At mu+-sigma, one can find the points of inflection.</p>
            </div>
          </div>
        </div>
      ),
    },
  ],
}
