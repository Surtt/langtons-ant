import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default {
  title: 'Controls/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const ButtonExpample = Template.bind({});
ButtonExpample.args = {
  title: 'play',
  children: <PlayArrowIcon />,
};
