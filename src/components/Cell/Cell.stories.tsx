import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Cell, CellProps } from './Cell';
import { BoardTable } from '../Board/Board';

export default {
  title: 'Board/Cell',
  component: Cell,
  decorators: [
    (Story) => (
      <BoardTable style={{ width: '2vw', height: '2vw' }}>
        <tr>
          <Story />
        </tr>
      </BoardTable>
    ),
  ],
} as Meta;

const Template: Story<CellProps> = (args) => <Cell {...args} />;

export const CellExample = Template.bind({});
CellExample.args = {
  cell: false,
};
