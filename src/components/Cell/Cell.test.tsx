import React from 'react';
import { render, screen } from '@testing-library/react';
import { Cell } from './Cell';
import { Cell as CellType } from '@/helpers/Field';

const cell: CellType = false;
const ant = {
  xAnt: 0,
  yAnt: 0,
  rotation: 0,
};

it('Renders Cell', () => {
  const { asFragment } = render(
    <table>
      <tbody>
        <tr>
          <Cell ant={ant} cell={cell} />
        </tr>
      </tbody>
    </table>
  );
  expect(asFragment()).toMatchSnapshot();
});

it('renders Line role', () => {
  render(
    <table>
      <tbody>
        <tr>
          <Cell ant={ant} cell={cell} />
        </tr>
      </tbody>
    </table>
  );
  expect(screen.getByRole('cell')).toBeInTheDocument();
});
