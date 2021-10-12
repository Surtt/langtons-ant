import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { generateField } from '@/helpers/Field';
import { generateAntPosition } from '@/helpers/Ant';
import { Field } from '@/helpers/Field';
import { Ant } from '@/helpers/Ant';
import { startGeneration } from '@/helpers/startGeneration';

import { Board } from '@/components/Board/Board';
import { Controls } from '@/components/Controls/Controls';
import { Top } from '@/components/Top/Top';
import { About } from '@/components/About/About';

const App: FC = () => {
  const basicSize = 10;
  const defaultCellState = false;
  const [antState, setAnt] = useState<Ant>({ xAnt: 0, yAnt: 0, rotation: 0 });
  const [cells, setCells] = useState<Field>([]);
  const { field, ant } = startGeneration(
    generateField(basicSize, defaultCellState),
    generateAntPosition(0, basicSize),
    0
  );
  useEffect(() => {
    setCells(field);
    setAnt(ant);
  }, []);
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
    <Router>
      <>
        <Header>
          <nav>
            <UlList>
              <li>
                <Link to="/">
                  <Top>Langton's Ant</Top>
                </Link>
              </li>
              <li>
                <Link style={{ color: 'white' }} to="/about">
                  About
                </Link>
              </li>
            </UlList>
          </nav>
        </Header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <StretchWrap>
              <Controls />
              <Board cells={cells} ant={antState} />
            </StretchWrap>
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;

export const Header = styled.header`
  width: 100%;
  padding: var(--mb-2);
  background-color: var(--text-color);
  height: 4rem;
  margin-bottom: var(--mb-5);
`;

export const StretchWrap = styled.div`
  width: 75vmin;
  height: 75vmin;
  margin: 0 auto;
`;

export const UlList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
