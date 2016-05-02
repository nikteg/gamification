import React from 'react'

export default () => (
  <div>
    <div className="Experiment-part">
      <h3 className="Experiment-subTitle">General information</h3>

      <p>
       The first step of a statistical experiment is deciding on the subject to experiment on. 
	   The subject must fulfill these points in order for such an experiment to be successful:
      </p>

      <ol className="Experiment-listMargin">
        <li>The observed subject has more than one possible outcome</li>
        <li>The experiment can be repeated indefinitely under unchanged conditions</li>
        <li>Each outcome of the subject can be determined before the experiment</li>
        <li>The outcome of the subject is dependent on probability</li>
      </ol>
    </div>

    <div className="Experiment-part">
      <h3 className="Experiment-subTitle">This experiment</h3>

      <p>In this specific experiment, the subject we choose to observe is the height of different human individuals. 
	  It can be narrowed down even further by defining a gender, nationality or age. However we will not do that in this experiment, 
	  instead we will compare the heights of people despite of their background or gender.</p> 

      <p>To be sure that we can actually use the human height as an experiment, 
	  we need to check whether the experiment fulfills the four points above. Does it?</p>
    </div>

    <div className="Experiment-answer">
      Answer:
      <ol className="Experiment-listMargin">
        <li>
          The subject has an unlimited amount of different outcomes between 0 and infinity.</li>
        <li>
          It can be repeated indefinitely as long as there’s enough people to measure
        </li>
        <li>
          Each outcome can be determined, we know that a person’s height should probably be between 0 and 250 cm. Let’s set the maximum to 300 cm.
        </li>
        <li>
          The outcome of the subject is actually dependent many different factors such as genetics, environment, etc. 
		  However, all factors combined are so complex that it may be considered to be dependent on probability.
        </li>
      </ol>
    </div>

    <div className="Experiment-part">
      <p className="Experiment-question">Once we have concluded that the subject is fit for conducting a statistical experiment.
	  Now there are a few questions we may want to find the answers to. Here are a few examples:
      </p>
      <ul className="Experiment-listMargin">
        <li className="Experiment-question">What is the most common height?</li>
        <li className="Experiment-question">How does the height vary from person to person? Are there large variations or do many people have the same height?</li>
        <li className="Experiment-question">What is the probability that a person is less than 180 cm tall?</li>
        <li className="Experiment-question">What is the probability for a person to be between 170 cm and 190 cm tall?</li>
      </ul>
    </div>

  </div>
)
