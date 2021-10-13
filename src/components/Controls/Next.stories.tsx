import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Next } from './Next';

export default {
  title: 'Controls/Next',
  component: Next,
} as Meta;

const Template: Story = () => <Next />;

export const NextExpample = Template.bind({});
