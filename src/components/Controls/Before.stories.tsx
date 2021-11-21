import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Before } from './Before';

export default {
  title: 'Controls/Before',
  component: Before,
} as Meta;

const Template: Story = () => <Before />;

export const BeforeExpample = Template.bind({});
