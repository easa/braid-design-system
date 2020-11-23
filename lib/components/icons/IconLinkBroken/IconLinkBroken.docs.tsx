import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconLinkBroken } from './IconLinkBroken';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconLinkBroken />,
    },
  ],
};

export default docs;
