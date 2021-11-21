import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { About } from '@/components/About/About';
import { Controls } from '@/components/Controls/Controls';
import { Board } from '@/components/Board/Board';
import { Field } from '../helpers/Field';
import { Ant } from '../helpers/Ant';

interface RoutesProps {
  cells: Field;
  ant: Ant;
}

export const Routes: FC<RoutesProps> = ({ cells, ant }) => {
  return (
    <Switch>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/'>
        <Controls />
        <Board cells={cells} ant={ant} />
      </Route>
    </Switch>
  );
};
