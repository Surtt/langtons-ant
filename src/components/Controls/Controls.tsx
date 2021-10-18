import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Before } from './Before';
import { Play } from './Play';
import { Next } from './Next';
import { Clear } from './Clear';
import { Pause } from './Pause';

export const Controls: FC = () => {
  return (
    <ControlsWrap>
      <Before />
      <Play />
      <Pause />
      <Next />
      <Clear />
    </ControlsWrap>
  );
};

const ControlsWrap = styled.div`
  display: inline-flex;
  padding: 10px 12px;
  margin-bottom: var(--mb-3);
  background-color: #efefef;
  border-radius: 5px;
`;
