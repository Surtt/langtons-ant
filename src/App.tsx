import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Board } from './components/Board/Board';
import { generateField } from '@/helpers/Field';
import { generateAntPosition } from '@/helpers/Ant';
import { Controls } from './components/Controls/Controls';
import { AppTitle } from './components/Top/AppTitle';
import { Field } from './helpers/Field';
import { Ant } from './helpers/Ant';

const App: FC = () => {
  const basicSize = 10;
  const defaultCellState = false;
  const cells = generateField(basicSize, defaultCellState);
  const ant = generateAntPosition(0, basicSize);
  // const [ant, setAnt] = useState<Ant>();
  // const [cells, setCells] = useState<Field>()
  // useEffect(() => {
  //   setCells(generateField(basicSize, defaultCellState));
  //   setAnt(generateAntPosition(0, basicSize));
  // });
  return (
    <div style={{ margin: '0 auto ' }}>
      <AppTitle>Langton's Ant</AppTitle>
      <StretchWrap>
        <Controls />
        <Board cells={cells} ant={ant} />
      </StretchWrap>
    </div>
  );
};

export default App;

export const StretchWrap = styled.div`
  width: 75vmin;
  height: 75vmin;
  margin: 0 auto;
`;
