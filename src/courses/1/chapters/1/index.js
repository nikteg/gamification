import React from 'react'
import Exercise2 from './exercise2'
import Exercise3 from './exercise3'
import Exercise4 from './exercise4'

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
              <p>
              When graphing the distribution of some gathered data or statistic, the graph sometimes form a bell-shape (figure 1).
              Any distribution with a graph resembling this bell-shape is said to have a normal distribution.
              Alternatively, the normal distribution is also called a gaussian distribution or less formally a bell curve; because of its shape.
              </p>
              <p>
              The normal distribution is a continuous probability distribution whose pattern is commonly found in the real world, often in the form of random errors.
              Two examples where we can find a normal distribution are the size of living tissue in different individuals of the same species, and errors in machine produced objects.
              </p>
              <img src="/bellcurve.gif" alt="" />
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

          <div className="Introduction-part">
            <h3>Why is it important?</h3>

            <div className="Introduction-part-content">
              <p>The main reason the normal distribution is useful is because of the Central Limit Theorem,
              which in short, states: even if we do not know the real distribution for a random variable <TeX data={'X'} />,
              the sample distribution of its mean will in many cases act in a way that resembles the normal
              distribution, as long as the sample size is large enough.
              This property is one of the reasons that the normal distribution is commonly used to describe the
              behaviour of certain subjects in various sciences, such as biology, physics, astronomy and finance.</p>
              <p>Secondly, the normal distribution is also very easy to use. Here are a few points explaining why:</p>
              <ul>
                <li>Its probability density function depends only on the expectation and standard deviation of the random variable of the distribution.
                Since the expectation and standard deviation are rather easy to calculate, so is the probability density.</li>
                <li>It is symmetrical.
                This often means that when calculating various probability densities sometimes it is enough to only calculate one half of the distribution.</li>
                <li>It has a standard which it can be translated into. This is called the standard normal distribution.
                The standard normal distribution has a table where the cumulative probability for a large range of values is already
                calculated. This means that it is not always necessary to calculate this by hand.
                Instead, it can be looked up in the table, speeding up the process considerably.</li>
              </ul>
            </div>
          </div>

          <div className="Introduction-part">
            <h3>Examples of uses</h3>

            <div className="Introduction-part-content">
              <ul>
                <li>Measure of living tissue</li>
                <li>Financial sciences</li>
                <li>For evaluating test scores</li>
                <li>Astronomy</li>
              </ul>
            </div>
          </div>

          <h2>Properties and functions</h2>

          <div className="Introduction-part">
            <h3>Definition</h3>

            <div className="Introduction-part-content">
              <h4>Definition of the probability density function</h4>
              <p>A random variable with the density:</p>

              <p><TeX data={'f(x) = \\frac{1}{\\sqrt(2\\pi\\sigma)}e^{1/2((x-\\mu)\\sigma)^2}'} /></p>

              <p><TeX data={'-\\infty < \\mu < \\infty'}/></p>
              <p><TeX data={'-\\infty < x < \\infty'}/></p>
              <p><TeX data={'0 < \\sigma'}/></p>

              <p>is said to have a normal distribution with parameters <TeX data={'\\mu'} /> and <TeX data={'\\sigma'}/>.</p>

              <p>Since the area under the probability density function should always be equal to 1,
              it implicates that <TeX data={'\\int_{-\\infty}^{\\infty}{\\frac{1}{\\sqrt(2\\pi\\sigma)}e^{1/2((x-\\mu/)\\sigma)^2}}'} />
              The link to the proof for this is given here: [link to proof].</p>

              <p>As you can see, the probability density function of the normal distribution requires
              only that mu is a real number and sigma is positive. And as you may already suspect, mu and
              sigma corresponds to the expectation and standard deviation of the normal random variable.</p>

              <p>The graph of the density function of the normal random variable is symmetric,
              with the expectation mu in its center. At <TeX data={'\\mu\\pm\\sigma'}/>, one can find the points of inflection.</p>
            </div>
          </div>

          <div className="Introduction-part">
            <h3>How is it commonly used?</h3>

            <div className="Introduction-part-content">
              <p>In some cases, the normal distribution can be discovered directly when conducting an experiment of
              a chosen random variable and plotting its distribution. By graphing it and looking at the shape of
              the graph, one can determine whether it resembles a normal distribution or not.</p>

              <div className="Introduction-part-content-example">
                <p>Say we are conducting an experiment where we wish to know
                how the weight of children in Sweden is distributed.</p>

                <p>Now, we don’t know the real distribution of the weight of children in Sweden,
                thus we name a random variable <TeX data={'X'} />, which we imagine, contains all the possible weights for children in Sweden.</p>

                <p>We call a specific weight in the random variable <TeX data={'X'} />, <TeX data={'x'} /> (Note the lowercase).</p>

                <p>Each specific <TeX data={'x'} /> in <TeX data={'X'} /> also has a probability associated with it,
                which we call <TeX data={'P(X)'} />, which describes the chance for any randomly chosen child to have the weight <TeX data={'x'} />.</p>

                <p>To find an approximation to <TeX data={'P(X)'} /> for all possible <TeX data={'x'} />, a random sample
                size of 10 000 weights of different children are measured during the experiment.</p>

                <p>We can now use this random sample to work out the probability for every
                <TeX data={'x'} /> measured, by dividing the frequency of each <TeX data={'x'} /> by our total sample size. Note that we
                can by no means work out the exact value of the real <TeX data={'P(X)'} /> (which is associated the entire
                population of children in Sweden), however, since our sample size is rather large, we deem it
                a good enough approximation to the real <TeX data={'P(X)'} />.</p>

                <p>By graphing <TeX data={'P(x)'} /> on the vertical axis and each <TeX data={'x'} /> on the horizontal axis,
                we can see the distribution of our random sample. The shape of this graph may look something alike a
                bell-shape. If it does, we can conclude that the weights of children are normal distributed.</p>
              </div>

              <p>The normal distribution can also be used to approximate other distributions such as the binomial distribution.
              In the case of the binomial distribution it is called a normal approximation to the binomial distribution,
              and is often done since it is much easier to find out the cumulative distribution of a normal distribution
              using something called a standard normal, than finding out the cumulative distribution of a binomial distribution.
              </p>

              <p>
              Once a normal distribution is discovered, it is often of interest to find out the cumulative
              distribution function of the normal distribution. However, to find this, an integration over
              the probability density function is required. This process is rather complex. Thus the normal random
              variable is often translated into a standard normal random variable, with a standard normal distribution.
              The reason for standardizing the normal random variable is simply because the standard normal distribution
              has a single table that describes the cumulative distribution for almost all values. [Link].
              </p>

            </div>
          </div>

          <div className="Introduction-part">
            <h3>Rule of thumb</h3>

            <div className="Introduction-part-content">
              <p>Because of its symmetricality and frequency of use, a shorthand for the distribution has been developed. As you can see in the figure below there is:</p>

              <ul>
                <li>68% chance that an observed value of of a random variable with a normal distribution will be within 1 standard deviation from the expectation</li>
                <li>a 95% chance that it is within 2 standard deviations from the expectation</li>
                <li>a 99% hance that it is within 3 standard deviations from the expectation</li>
              </ul>

              <img src="/emperical_rule.png" alt="Rule of thumb" />
            </div>
          </div>

          <div className="Introduction-part">
            <h3>Explanation of variables</h3>

            <div className="Introduction-part-content">
              <h4><TeX data={'\\sigma'} />: Standard deviation</h4>
              <p>
              The standard deviation is a measure of how spread out from the expectation the numbers are.
              A distribution with a larger standard deviation means that the values are spread out more
              than a distribution with a small standard deviation.</p>

              <h4><TeX data={'\\mu'} />: Expectation</h4>
              <p>
              This describes the expectation from the random variable <TeX data={'X'} />.
              The expectation is the value of <TeX data={'X'} /> that is most probable.
              </p>

              <h4><TeX data={'X'} />: Random variable</h4>
              <p>
              A random variable is a variable that can assume many different values, <TeX data={'x'} />. For each <TeX data={'x'} /> in <TeX data={'X'} />,
              there is a probability <TeX data={'P(X = x)'} /> which describes the probability
              the random variable <TeX data={'X'} /> assumes the value <TeX data={'x'} />
              </p>

              <h4><TeX data={'x'} />: specific value of <TeX data={'X'} /></h4>
              <p>
              This is a specific value of the random variable <TeX data={'X'} />.
              </p>

              <h4><TeX data={'P(X = x)'} />: Probability for <TeX data={'x'} /></h4>
              <p>
              This describes the probability that the random variable <TeX data={'X'} /> assumes the value <TeX data={'x'} />.
              </p>
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
      name: 'Choosing a subject to observe',
      type: 'exercise',
      html: <Exercise2 />,
    },
    {
      name: 'Approximation',
      type: 'exercise',
      html: <Exercise3 />,
    },
    {
      name: 'Standard Normal',
      type: 'exercise',
      html: <Exercise4 />,
    },
  ],
}
