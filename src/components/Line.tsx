import React, { FC } from 'react';
import { Cell } from './Cell';
import { Coords } from '../helpers/Ant';

interface LineProps {
  line: boolean[];
  index: number;
  ant: Coords;
}

export const Line: FC<LineProps> = ({ line, index, ant }) => {
  const [x, y] = ant;
  return (
    <tr className="line">
      {line.map((cell, idx) => (
        <Cell
          key={`line_${index}-cell_${idx}`}
          ant={index === y && idx === x ? ant : undefined}
        />
      ))}
    </tr>
  );
};
