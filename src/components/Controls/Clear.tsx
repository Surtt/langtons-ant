import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '@/slices/playSliece';
import { Button } from './Button';
import ClearIcon from '@mui/icons-material/Clear';

export const Clear: FC = () => {
  const dispatch = useDispatch();
  return (
    <Button
      role={'clear'}
      title={'clear'}
      onClick={() => dispatch(actions.cleared())}
    >
      <ClearIcon className='btn__img' />
    </Button>
  );
};
