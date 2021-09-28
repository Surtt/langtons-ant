import React, { FC } from 'react';
import Board from './Components/Board';

const App: FC = () => (
  <>
    <h1 className="title">Langton's Ant</h1>
    <Board />
  </>
);

export default App;
