import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Play } from './Play';

export default {
  title: 'Controls/Play',
  component: Play,
} as Meta;

const Template: Story = () => <Play />;

export const PlayExpample = Template.bind({});
