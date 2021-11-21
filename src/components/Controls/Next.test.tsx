import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch } from 'react-redux';
import { Next } from './Next';

jest.mock('react-redux', () => ({
  __esModule: true,
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Test on button next', () => {
  it('Checking by role and title', () => {
    const mockDispatch = jest.fn();

    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    render(<Next />);
    userEvent.click(screen.getByTitle('next'));
    expect(screen.getByRole('next')).toBeInTheDocument;
    expect(mockDispatch).toHaveBeenCalled();
  });
});
