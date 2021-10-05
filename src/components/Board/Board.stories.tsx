import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Board, BoardProps } from './Board';
import { StretchWrap } from '@/App';

export default {
  title: 'Board/Board',
  component: Board,
  decorators: [
    (Story) => <StretchWrap>
      <Story />
    </StretchWrap>
  ]
} as Meta;

const Template: Story<BoardProps> = (args) => <Board {...args} />;

export const BoardWithAnt = Template.bind({});
BoardWithAnt.args = {
  cells: [
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
  ],
  ant: { xAnt: 4, yAnt: 4, rotation: 0 }
};
