import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Clear } from './Clear';

export default {
  title: 'Controls/Clear',
  component: Clear,
} as Meta;

const Template: Story = () => <Clear />;

export const ClearExpample = Template.bind({});
