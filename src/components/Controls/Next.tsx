import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '@/slices/playSliece';
import { Button } from './Button';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export const Next: FC = () => {
  const dispatch = useDispatch();
  return (
    <Button
      role={'next'}
      title={'next'}
      onClick={() => dispatch(actions.doneNext())}
    >
      <SkipNextIcon className='btn__img' />
    </Button>
  );
};
