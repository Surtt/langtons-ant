import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Line, LineProps } from './Line';
import { BoardTable } from '../Board/Board';

export default {
  title: 'Board/Line',
  component: Line,
  decorators: [
    (Story) => (
      <BoardTable style={{ width: '15rem' }}>
        <Story />
      </BoardTable>
    ),
  ],
} as Meta;

const Template: Story<LineProps> = (args) => <Line {...args} />;

export const LineExample = Template.bind({});
LineExample.args = {
  line: [false, false, false, false, false, false, false, false, false, false],
  index: 0,
  ant: { xAnt: 0, yAnt: 4, rotation: 0 },
};
