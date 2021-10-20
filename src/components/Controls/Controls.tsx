import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Before } from './Before';
import { Play } from './Play';
import { Next } from './Next';
import { Clear } from './Clear';
import { Pause } from './Pause';
import { Slider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changedSpeed, initState } from '@/slices/playSliece';
import cloneDeep from 'lodash/clonedeep';
import { AppDispatch, RootState } from '@/store';

export interface ControlsProps {
  e: Event;
  value: number;
  state: initState;
  dispatch: AppDispatch;
}

const handleSpeedChange = (
  e: Event,
  value: number,
  state: initState,
  dispatch: AppDispatch
) => {
  const newState = cloneDeep(state);
  newState.speed = value;
  dispatch(changedSpeed(newState));
};

export const Controls: FC<ControlsProps> = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { speed } = state;
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
        onChange={(e, value) => handleSpeedChange(e, value, state, dispatch)}
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
