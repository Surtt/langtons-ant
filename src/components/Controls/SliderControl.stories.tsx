import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SliderControl } from './SliderControl';

export default {
  title: 'Controls/SliderControl',
  component: SliderControl,
} as Meta;

const Template: Story = () => <SliderControl />;

export const SliderExpample = Template.bind({});
