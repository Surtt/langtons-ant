import React, { FC } from 'react';
import { Cell } from './Cell';
import { Ant } from '@/helpers/Ant';

interface LineProps {
  line: boolean[];
  index: number;
  ant: Ant;
}

export const Line: FC<LineProps> = ({ line, index, ant }) => {
  const { xAnt, yAnt } = ant;
  return (
    <tr className="line">
      {line.map((cell, idx) => (
        <Cell
          key={`line_${index}-cell_${idx}`}
          ant={index === xAnt && idx === yAnt ? ant : undefined}
        />
      ))}
    </tr>
  );
};
