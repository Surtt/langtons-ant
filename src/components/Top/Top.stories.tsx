import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Top, TopProps } from './Top';

export default {
  title: 'Top/Top',
  component: Top,
  parameters: {
    backgrounds: {
      default: 'blue',
      values: [{ name: 'blue', value: '#337ab7' }],
    },
  },
} as Meta;

const Template: Story<TopProps> = (args) => <Top {...args} />;

export const AntAppTitle = Template.bind({});
AntAppTitle.args = {
  children: "Langton's Ant",
};
