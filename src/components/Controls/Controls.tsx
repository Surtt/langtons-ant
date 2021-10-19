import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Before } from './Before';
import { Play } from './Play';
import { Next } from './Next';
import { Clear } from './Clear';
import { Pause } from './Pause';
import { Slider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changedSpeed } from '@/store/playSliece';
import cloneDeep from 'lodash/clonedeep';

const handleSpeedChange = (e, value, state, dispatch) => {
  const newState = cloneDeep(state);
  newState.speed = value;
  console.log(newState);
  dispatch(changedSpeed(newState));
};

export const Controls: FC = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { speed } = state.play;
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
        aria-label='slider'
        valueLabelDisplay='auto'
        onChange={(e, value) =>
          handleSpeedChange(e, value, state.play, dispatch)
        }
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
