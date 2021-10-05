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
    <tr>
      {line.map((cell, idx) => (
        <Cell
          key={`line_${index}-cell_${idx}`}
          ant={index === xAnt && idx === yAnt ? ant : undefined}
        />
      ))}
    </tr>
  );
};
