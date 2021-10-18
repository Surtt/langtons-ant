import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Pause } from './Pause';

export default {
  title: 'Controls/Pause',
  component: Pause,
} as Meta;

const Template: Story = () => <Pause />;

export const PauseExpample = Template.bind({});
