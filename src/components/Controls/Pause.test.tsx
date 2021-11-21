import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch } from 'react-redux';
import { Pause } from './Pause';

jest.mock('react-redux', () => ({
  __esModule: true,
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Test on button pause', () => {
  it('Checking by role and title', () => {
    const mockDispatch = jest.fn();

    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    render(<Pause />);
    userEvent.click(screen.getByTitle('pause'));
    expect(screen.getByRole('pause')).toBeInTheDocument;
    expect(mockDispatch).toHaveBeenCalled();
  });
});
