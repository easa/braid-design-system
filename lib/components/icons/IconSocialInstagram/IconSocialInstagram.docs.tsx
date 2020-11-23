import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconSocialInstagram } from './IconSocialInstagram';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconSocialInstagram />,
    },
  ],
};

export default docs;
