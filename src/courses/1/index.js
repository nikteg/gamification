import React from 'react'

import normalDistribution from './chapters/1'

export default {
  name: 'Mathematical Statistics',
  description: 'Probability and statistics are two related but separate academic disciplines.' +
               'Statistical analysis often uses probability distributions, and the two topics are often studied together.',
  chapters: [
    normalDistribution,
    {
      name: 'Sample chapter',
      tasks: [
        {
          name: 'Sample task',
          type: 'exercise',
          html: (<div>Sample exercise is cool</div>),
        },
      ],
    },
  ],
}
