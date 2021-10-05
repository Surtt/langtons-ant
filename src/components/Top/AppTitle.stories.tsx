import React from 'react';
import { Story, Meta } from '@storybook/react';

import { AppTitle, AppTitleProps } from './AppTitle';

export default {
  title: 'Top/AppTitle',
  component: AppTitle,
} as Meta;

const Template: Story<AppTitleProps> = (args) => <AppTitle {...args} />;

export const AntAppTitle = Template.bind({});
AntAppTitle.args = {
  children: "Langton's Ant",
};
