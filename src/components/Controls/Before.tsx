import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '@/slices/playSliece';
import { Button } from './Button';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

export const Before: FC = () => {
  const dispatch = useDispatch();
  return (
    <Button
      role={'before'}
      title={'before'}
      onClick={() => dispatch(actions.doneBefore())}
    >
      <SkipPreviousIcon className='btn__img' />
    </Button>
  );
};
