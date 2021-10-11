import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Board } from './components/Board/Board';
import { generateField } from '@/helpers/Field';
import { generateAntPosition } from '@/helpers/Ant';
import { Controls } from './components/Controls/Controls';
import { Top } from './components/Top/Top';
import { Field } from './helpers/Field';
import { Ant } from './helpers/Ant';
import { startGeneration } from './helpers/startGeneration';

const App: FC = () => {
  const basicSize = 10;
  const defaultCellState = false;
  const [ant, setAnt] = useState<Ant>({ xAnt: 0, yAnt: 0, rotation: 0 });
  const [cells, setCells] = useState<Field>([]);
  useEffect(() => {
    setCells(generateField(basicSize, defaultCellState));
    setAnt(generateAntPosition(0, basicSize));
  }, [defaultCellState]);
  console.log(
    startGeneration(
      generateField(basicSize, defaultCellState),
      {
        xAnt: 0,
        yAnt: 0,
        rotation: 0,
      },
      0
    )
  );
  return (
    <div style={{ margin: '0 auto ' }}>
      <Top>Langton's Ant</Top>
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
