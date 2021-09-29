import React, { FC } from 'react';
import { Line } from './Line';
import { generateField } from '../helpers/Field';
import { Ant } from '../helpers/Ant';

export const Board: FC = () => {
  const basicSize = 21;
  const defaultCellState = false;
  const cells = generateField(basicSize, defaultCellState);
  const ant = Ant(10, 10);
  return (
    <div className="stretch">
      <table className="board">
        <tbody>
          {cells.map((line, index) => (
            <Line key={`line_${index}`} line={line} index={index} ant={ant} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
