import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '@/slices/playSliece';
import { Button } from './Button';
import PauseIcon from '@mui/icons-material/Pause';

export const Pause: FC = () => {
  const dispatch = useDispatch();
  return (
    <Button
      role={'pause'}
      title={'pause'}
      onClick={() => dispatch(actions.paused())}
    >
      <PauseIcon className='btn__img' />
    </Button>
  );
};
