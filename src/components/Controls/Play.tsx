import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { actions, recursiveGenerating } from '@/slices/playSliece';
import { Button } from './Button';

const handleClick = (dispatch: AppDispatch) => {
  dispatch(actions.played());
  dispatch(recursiveGenerating());
};

export const Play: FC = () => {
  const dispatch = useDispatch();
  return (
    <Button
      role={'play'}
      title={'play'}
      path={<path d='m35.353 0 424.236 247.471-424.236 247.471z' />}
      onClick={() => handleClick(dispatch)}
    />
  );
};
