import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { actions, recursiveGenerating } from '@/slices/playSliece';
import { Button } from './Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const handleClick = (dispatch: AppDispatch) => {
  dispatch(actions.played());
  dispatch(recursiveGenerating());
};

export const Play: FC = () => {
  const dispatch = useDispatch();
  return (
    <Button role={'play'} title={'play'} onClick={() => handleClick(dispatch)}>
      <PlayArrowIcon className='btn__img' />
    </Button>
  );
};
