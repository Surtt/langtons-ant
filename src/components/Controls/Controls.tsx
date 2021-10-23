import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Before } from './Before';
import { Play } from './Play';
import { Next } from './Next';
import { Clear } from './Clear';
import { Pause } from './Pause';
import { SliderControl } from './SliderControl';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const Controls: FC = () => {
  const state = useSelector((state: RootState) => state);
  return (
    <>
      <ControlsWrap>
        <Before />
        {!state.present.isPlayed ? <Play /> : <Pause />}
        <Next />
        <Clear />
      </ControlsWrap>
      <SliderControl />
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
