import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Before } from './Before';
import { Play } from './Play';
import { Next } from './Next';
import { Clear } from './Clear';
import { Pause } from './Pause';
import { Slider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '@/slices/playSliece';
import { AppDispatch, RootState } from '@/store';

const handleSpeedChange = (e: Event, value: number, dispatch: AppDispatch) => {
  dispatch(actions.changedSpeed(value));
};

export const Controls: FC = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { speed } = state.present;
  // console.log(speed);
  return (
    <>
      <ControlsWrap>
        <Before />
        <Play />
        <Pause />
        <Next />
        <Clear />
      </ControlsWrap>
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

const ControlsWrap = styled.div`
  display: inline-flex;
  padding: 10px 12px;
  margin-bottom: var(--mb-3);
  background-color: #efefef;
  border-radius: 5px;
`;
