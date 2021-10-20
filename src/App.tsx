import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from '@emotion/styled';

import { Field } from '@/helpers/Field';
import { Ant } from '@/helpers/Ant';

import { useSelector } from 'react-redux';

import { Navigation } from './components/Navigation/Navigation';
import { Routes } from './routes/Routes';
import { RootState } from './store';

const App: FC = () => {
  const { field: cells, ant, count } = useSelector((state: RootState) => state);
  return (
    <Router>
      <>
        <Header>
          <Navigation count={count} />
        </Header>
        <StretchWrap>
          <Routes cells={cells} ant={ant} />
        </StretchWrap>
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
