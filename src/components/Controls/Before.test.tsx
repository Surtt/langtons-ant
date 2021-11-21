import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch } from 'react-redux';
import { Before } from './Before';

jest.mock('react-redux', () => ({
  __esModule: true,
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Test on button before', () => {
  it('Checking by role and title', () => {
    const mockDispatch = jest.fn();

    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    render(<Before />);
    userEvent.click(screen.getByTitle('before'));
    expect(screen.getByRole('before')).toBeInTheDocument;
    expect(mockDispatch).toHaveBeenCalled();
  });
});
