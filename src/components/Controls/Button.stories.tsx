import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Controls/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const ButtonExpample = Template.bind({});
ButtonExpample.args = {
  title: 'play',
  path: <path d="m35.353 0 424.236 247.471-424.236 247.471z" />,
};
