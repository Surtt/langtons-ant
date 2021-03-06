import React from 'react';
import { render, screen } from '@testing-library/react';
import { Line } from './Line';
import { Line as LineType } from '@/helpers/Field';

const line: LineType = [false, false, false, false, false];
const index = 0;
const ant = {
  xAnt: 0,
  yAnt: 0,
  rotation: 0,
};

it('Renders Line', () => {
  const { asFragment } = render(
    <table>
      <tbody>
        <Line line={line} index={index} ant={ant} />
      </tbody>
    </table>
  );
  expect(asFragment()).toMatchSnapshot();
});

it('renders Line role', () => {
  render(
    <table>
      <tbody>
        <Line line={line} index={index} ant={ant} />
      </tbody>
    </table>
  );
  expect(screen.getByRole('line')).toBeInTheDocument();
});
