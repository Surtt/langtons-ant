import { RootState } from '@/store';
import { played } from '@/slices/playSliece';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './Button';

export const Play: FC = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  return (
    <Button
      role={'play'}
      title={'play'}
      path={<path d='m35.353 0 424.236 247.471-424.236 247.471z' />}
      onClick={() => dispatch(played(state))}
    />
  );
};
