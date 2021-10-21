import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '@/slices/playSliece';
import { Button } from './Button';

export const Pause: FC = () => {
  const dispatch = useDispatch();
  return (
    <Button
      role={'pause'}
      title={'pause'}
      path={
        <path d='M120.16 45A20.162 20.162 0 0 0 100 65.16v381.68A20.162 20.162 0 0 0 120.16 467h65.68A20.162 20.162 0 0 0 206 446.84V65.16A20.162 20.162 0 0 0 185.84 45h-65.68zm206 0A20.162 20.162 0 0 0 306 65.16v381.68A20.162 20.162 0 0 0 326.16 467h65.68A20.162 20.162 0 0 0 412 446.84V65.16A20.162 20.162 0 0 0 391.84 45h-65.68z' />
      }
      onClick={() => dispatch(actions.paused())}
    />
  );
};
