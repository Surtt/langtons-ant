import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch } from 'react-redux';
import { Clear } from './Clear';

jest.mock('react-redux', () => ({
  __esModule: true,
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Test on button clear', () => {
  it('Checking by role and title', () => {
    const mockDispatch = jest.fn();

    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    render(<Clear />);
    userEvent.click(screen.getByTitle('clear'));
    expect(screen.getByRole('clear')).toBeInTheDocument;
    expect(mockDispatch).toHaveBeenCalled();
  });
});
