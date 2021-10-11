import React from 'react';
import { render, screen } from '@testing-library/react';
import { Board } from './Board';
import { Field } from '@/helpers/Field';
import { Ant } from '@/helpers/Ant';

const cells: Field = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
];

const ant: Ant = {
  xAnt: 0,
  yAnt: 0,
  rotation: 0,
};

it('Renders Board', () => {
  const { asFragment } = render(<Board cells={cells} ant={ant} />);
  expect(asFragment()).toMatchSnapshot();
});

it('Renders Board role', () => {
  render(<Board cells={cells} ant={ant} />);
  expect(screen.getByRole('grid')).toBeInTheDocument();
});
