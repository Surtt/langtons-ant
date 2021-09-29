import React, { FC } from 'react';
import { Line } from './Line';
import { generateField } from '../helpers/Field';
import { generateAntPosition } from '../helpers/Ant';

export const Board: FC = () => {
  const basicSize = 15;
  const defaultCellState = false;
  const cells = generateField(basicSize, defaultCellState);
  const ant = generateAntPosition(0, basicSize);
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
