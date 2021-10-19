import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { doneBefore } from '@/store/playSliece';
import { Button } from './Button';
import { usePrevState } from '../hooks/usePrevState';
import { initState } from '@/helpers/startGeneration';

interface BeforeProps {
  initialState: initState;
}

export const Before: FC<BeforeProps> = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  // console.log(state.play, 'current');
  const prevState = usePrevState(state.play);
  // console.log(prevState, 'prev');
  return (
    <Button
      title={'before'}
      path={
        <path
          d='M362.146,0.412c-2.471-1.143-5.517,0.094-9.138,3.709L150.308,206.828c-1.718,1.524-2.955,3.333-3.715,5.424V18.679
            c0-4.952-1.809-9.234-5.424-12.85c-3.617-3.617-7.9-5.426-12.847-5.426H91.775c-4.952,0-9.233,1.809-12.85,5.426
            C75.308,9.448,73.5,13.73,73.5,18.679v401.986c0,4.948,1.807,9.236,5.424,12.847c3.621,3.62,7.902,5.428,12.85,5.428h36.543
            c4.947,0,9.229-1.808,12.847-5.428c3.615-3.61,5.424-7.898,5.424-12.847V227.097c0.763,1.903,2,3.717,3.715,5.425l202.705,202.712
            c3.621,3.617,6.667,4.859,9.138,3.72c2.478-1.144,3.716-4.189,3.716-9.138V9.547C365.862,4.599,364.624,1.553,362.146,0.412z'
        />
      }
      onClick={() => dispatch(doneBefore(prevState))}
    />
  );
};