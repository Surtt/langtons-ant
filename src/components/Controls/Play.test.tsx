import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch } from 'react-redux';
import { Play } from './Play';

jest.mock('react-redux', () => ({
  __esModule: true,
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Test on button play', () => {
  it('Checking by role and title', () => {
    const mockDispatch = jest.fn();

    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    render(<Play />);
    userEvent.click(screen.getByTitle('play'));
    expect(screen.getByRole('play')).toBeInTheDocument;
    expect(mockDispatch).toHaveBeenCalled();
  });
});
