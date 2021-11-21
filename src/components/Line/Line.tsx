import React, { FC } from 'react';
import { Cell } from '../Cell/Cell';
import { Ant } from '@/helpers/Ant';
import { Line as LineType } from '../../helpers/Field';

export interface LineProps {
  /**
   * Line data
   */
  line: LineType;
  /**
   * Line index
   */
  index: number;
  /**
   * Ant position
   */
  ant: Ant;
}

export const Line: FC<LineProps> = ({ line, index, ant }) => {
  const { xAnt, yAnt } = ant;
  return (
    <tr role='line'>
      {line.map((cell, idx) => (
        <Cell
          cell={cell}
          key={`line_${index}-cell_${idx}`}
          ant={index === xAnt && idx === yAnt ? ant : undefined}
        />
      ))}
    </tr>
  );
};
