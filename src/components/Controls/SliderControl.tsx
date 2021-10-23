import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Slider } from '@mui/material';
import { AppDispatch, RootState } from '@/store';
import { actions } from '@/slices/playSliece';

const handleSpeedChange = (e: Event, value: number, dispatch: AppDispatch) => {
  dispatch(actions.changedSpeed(value));
};

export const SliderControl: FC = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { speed } = state.present;
  return (
    <>
      <p>Change Speed:</p>
      <Slider
        value={speed}
        min={0.1}
        max={100}
        step={0.1}
        aria-label='small'
        valueLabelDisplay='auto'
        onChange={(e, value) => handleSpeedChange(e, value as number, dispatch)}
      />
    </>
  );
};
