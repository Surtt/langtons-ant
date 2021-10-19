import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { doneNext } from '@/store/playSliece';
import { Button } from './Button';

export const Next: FC = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  return (
    <Button
      title={'next'}
      path={
        <path
          d='M360.427,5.833c-3.613-3.617-7.898-5.424-12.847-5.424h-36.545c-4.945,0-9.233,1.807-12.847,5.424
            c-3.614,3.621-5.428,7.902-5.428,12.85v193.574c-0.948-2.091-2.19-3.901-3.717-5.424L86.343,4.125
            c-3.617-3.617-6.663-4.856-9.136-3.713c-2.474,1.143-3.711,4.189-3.711,9.137v420.262c0,4.948,1.237,7.994,3.711,9.138
            c2.473,1.14,5.519-0.1,9.136-3.724L289.048,232.52c1.529-1.711,2.765-3.521,3.72-5.424V420.66c0,4.948,1.81,9.239,5.421,12.847
            c3.62,3.62,7.904,5.428,12.847,5.428h36.552c4.948,0,9.236-1.808,12.847-5.428c3.614-3.607,5.428-7.898,5.428-12.847V18.683
            C365.854,13.73,364.037,9.45,360.427,5.833z'
        />
      }
      onClick={() => dispatch(doneNext(state.play))}
    />
  );
};