import React, { PropTypes } from 'react'

import CourseBar from './CourseBar'

const Graph = (props) => <div className="graph" />

const Navigation = (props) => (
  <ul className="navigation">
    {props.entries.map(entry => (
      <li>
        <h1>{`${entry.index}. ${entry.title}`}</h1>
        <ul>
          {entry.parts.map(part => (
            <li><h2>{`${entry.index}.${part.index} ${part.title}`}</h2></li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
)

Navigation.propTypes = {
  entries: PropTypes.array.isRequired,
}

const TaskCreator = (props) => (
  <div>
    <Navigation entries={React.Children.map(props.children, (part, index) => {
      return {
        title: part.props.title,
        index: index + 1,
        parts: React.Children.map(part.props.children, (box, index) => ({ title: box.props.title, index: index + 1 })),
      }
    })} />
    {React.Children.map(props.children, (part, index) => React.cloneElement(part, { index: index + 1 }))}
  </div>
)

TaskCreator.propTypes = {
  children: PropTypes.element.isRequired,
}

const Part = (props) => (
  <div className="part">
    <h2>{`${props.index}. ${props.title}`}</h2>
    <ul>
      {React.Children.map(props.children, (box, index) => React.cloneElement(box, { parentIndex: props.index, index: index + 1 }))}
    </ul>
  </div>
)

Part.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  boxes: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired,
}

const PartBox = (props) => (
  <li className="part">
    <div className="left">{`${props.parentIndex}.${props.index} ${props.title}`}</div>
    <div className="right">{props.children}</div>
  </li>
)

PartBox.propTypes = {
  index: PropTypes.number.isRequired,
  parentIndex: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

const Task = (props) => (
  <div className="Task">
    <CourseBar />
    <h1>Normal distribution</h1>
    <Graph />
    <TaskCreator>
      <Part title="Introduction to the concept">
        <PartBox title="What is it?">
          <p>A normal distribution is a continuous probability distribution whose pattern is commonly
          found in the real world, often in the form of random errors. A few examples of real world phenomena that
          act like a normal distribution are the size of living tissue in different individuals of the same species,
          and errors in machine produced objects.</p>

          <p>When graphing the distribution of some gathered data or statistic, the graph sometimes form a
          bell-shape (figure 1). Any distribution with a graph resembling this bell-shape is said to have a normal
          distribution. Alternatively, the normal distribution is also called a gaussian distribution or less formally
          a bell curve because of its shape.</p>

          <img src="/bellcurve.gif" alt="" />
        </PartBox>
        <PartBox title="Why is it important?">
          <p>Lorem ipsum Eiusmod est cupidatat ut voluptate qui sit eiusmod quis consectetur quis est
          aliquip commodo esse Ut sit occaecat enim velit dolore velit dolor irure ut proident.</p>
        </PartBox>
        <PartBox title="Examples of uses">
          <ul>
            <li>Measure of living tissue</li>
            <li>Financial sciences</li>
            <li>For evaluating scores</li>
            <li>Astronomy</li>
          </ul>
        </PartBox>
        <PartBox title="Other examples of continuous distributions">
          <ul>
            <li>Exponential distribution</li>
            <li>Poisson distribution</li>
            <li>Gamma distribution</li>
            <li>Chi-squared distribution</li>
          </ul>
        </PartBox>
      </Part>
      <Part title="Properties and functions">
        <PartBox title="Definition">
          <p>Since the area under the probability density function should always be equal to 1, it implicates
          that -12e-(1/2)[(x-)/]2= 1. The link to the proof for this is given here: [link to proof].</p>

          <p>As you can see, the probability density function of the normal distribution requires only that mu is
          a real number and sigma is positive. And as you may already suspect, mu and sigma corresponds to the mean
          and standard deviation of the normal random variable. The graph of the density function of the normal random
          variable is symmetric, with the mean mu in its center. At mu+-sigma, one can find the points of inflection.</p>
        </PartBox>
      </Part>
    </TaskCreator>
  </div>
)

export default Task
