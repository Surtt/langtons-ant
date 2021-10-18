import { RootState } from '@/store';
import { paused } from '@/store/playSliece';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './Button';

export const Pause: FC = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  return (
    <Button
      title={'pause'}
      path={
        <path d='M120.16 45A20.162 20.162 0 0 0 100 65.16v381.68A20.162 20.162 0 0 0 120.16 467h65.68A20.162 20.162 0 0 0 206 446.84V65.16A20.162 20.162 0 0 0 185.84 45h-65.68zm206 0A20.162 20.162 0 0 0 306 65.16v381.68A20.162 20.162 0 0 0 326.16 467h65.68A20.162 20.162 0 0 0 412 446.84V65.16A20.162 20.162 0 0 0 391.84 45h-65.68z' />
      }
      onClick={() => dispatch(paused(state.play))}
    />
  );
};
