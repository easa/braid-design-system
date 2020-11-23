import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Rating } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  examples: [
    {
      label: 'Default',
      Example: () => <Rating rating={3} />,
    },
    {
      label: 'Hide the text rating',
      Example: () => <Rating rating={4.2} showTextRating={false} />,
    },
    {
      label: 'large',
      Example: () => <Rating rating={3} size="large" />,
    },
    {
      label: 'small',
      Example: () => <Rating rating={2} size="small" />,
    },
    {
      label: 'xsmall',
      Example: () => <Rating rating={1.5} size="xsmall" />,
    },
  ],
};

export default docs;
